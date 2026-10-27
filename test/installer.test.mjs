import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { execFile } from "node:child_process";
import { lstat, mkdir, mkdtemp, readFile, rm, stat, symlink, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";
import { test } from "node:test";
import { installPet, pets, resolvePetsDirectory } from "../src/installer.mjs";

const exec = promisify(execFile);
const bin = fileURLToPath(new URL("../bin/voira-pet.mjs", import.meta.url));

async function temporary(t) {
  const path = await mkdtemp(join(tmpdir(), "voira-pet-test-"));
  t.after(() => rm(path, { recursive: true, force: true }));
  return path;
}

test("default path honors CODEX_HOME and falls back to the user's home", () => {
  assert.equal(resolvePetsDirectory({ env: {}, home: "/home/example" }), resolve("/home/example/.codex/pets"));
  assert.equal(resolvePetsDirectory({ env: { CODEX_HOME: "/custom/codex" }, home: "/ignored" }), resolve("/custom/codex/pets"));
  assert.equal(resolvePetsDirectory({ directory: "/custom/pets", env: { CODEX_HOME: "/ignored" } }), resolve("/custom/pets"));
  assert.throws(() => resolvePetsDirectory({ directory: " " }), /不能为空/);
});

test("installs a complete supported v2 package into a path containing spaces and Chinese", async (t) => {
  const directory = join(await temporary(t), "我的 pets");
  const result = await installPet("deepseek", { directory });
  assert.equal(result.alreadyInstalled, false);
  const manifest = JSON.parse(await readFile(join(result.directory, "pet.json"), "utf8"));
  assert.deepEqual(manifest, {
    id: "voira-deepseek",
    displayName: "DeepSeek · 蓝色大肥鱼",
    description: "在爱里长大的鲸鱼娘，温柔耐心，轻松里带着一点小机灵。雾蓝长发与弯曲呆毛，清亮蓝瞳，白褶头饰配蓝宝石领结，穿珍珠白与海蓝水手裙，身边贴着一只圆滚的小鲸鱼。",
    spriteVersionNumber: 2,
    spritesheetPath: "spritesheet.webp",
  });
  const sprite = await readFile(join(result.directory, manifest.spritesheetPath));
  assert.equal(createHash("sha256").update(sprite).digest("hex"), pets[0].sha256);
});

test("reinstall is a no-op and preserves user-added metadata and files", async (t) => {
  const directory = await temporary(t);
  const first = await installPet("deepseek", { directory });
  const path = join(first.directory, "pet.json");
  const manifest = JSON.parse(await readFile(path, "utf8"));
  manifest.category = "my-favorites";
  await writeFile(path, JSON.stringify(manifest));
  await writeFile(join(first.directory, "note.txt"), "保留我的文件");
  const before = await stat(path);
  const second = await installPet("deepseek", { directory });
  assert.equal(second.alreadyInstalled, true);
  assert.equal((await stat(path)).mtimeMs, before.mtimeMs);
  assert.equal(JSON.parse(await readFile(path)).category, "my-favorites");
  assert.equal(await readFile(join(first.directory, "note.txt"), "utf8"), "保留我的文件");
});

test("ChatGPT and default DeepSeek install separately and preserve each other's files", async (t) => {
  const directory = await temporary(t);
  const deepseek = await installPet(undefined, { directory });
  const deepseekBytes = await readFile(join(deepseek.directory, "pet.json"));
  const chatgpt = await installPet("chatgpt", { directory });
  assert.equal(chatgpt.directory, join(directory, "voira-chatgpt"));
  const manifest = JSON.parse(await readFile(join(chatgpt.directory, "pet.json")));
  assert.equal(manifest.id, "voira-chatgpt");
  assert.equal(manifest.displayName, "ChatGPT · 银白龙裔");
  assert.equal(manifest.spriteVersionNumber, 2);
  const sprite = await readFile(join(chatgpt.directory, manifest.spritesheetPath));
  assert.equal(createHash("sha256").update(sprite).digest("hex"), "8fdf1c28db60b68860ea0b7946fe849dd31bb0005e1d785c9a44286d0df06688");
  assert.deepEqual(await readFile(join(deepseek.directory, "pet.json")), deepseekBytes);
  const before = await stat(join(chatgpt.directory, "pet.json"));
  assert.equal((await installPet("chatgpt", { directory })).alreadyInstalled, true);
  assert.equal((await stat(join(chatgpt.directory, "pet.json"))).mtimeMs, before.mtimeMs);
  assert.match((await exec(process.execPath, [bin, "list"])).stdout, /chatgpt\s+ChatGPT · 银白龙裔/);
});

test("existing unrelated or incomplete target is never overwritten", async (t) => {
  const directory = await temporary(t);
  const target = join(directory, "voira-deepseek");
  await mkdir(target);
  await writeFile(join(target, "pet.json"), "not my package");
  await assert.rejects(installPet("deepseek", { directory }), /拒绝覆盖/);
  assert.equal(await readFile(join(target, "pet.json"), "utf8"), "not my package");
  await assert.rejects(lstat(join(target, "spritesheet.webp")), { code: "ENOENT" });
});

test("modified installed artwork is preserved and reported as a conflict", async (t) => {
  const directory = await temporary(t);
  const result = await installPet("deepseek", { directory });
  const path = join(result.directory, "spritesheet.webp");
  await writeFile(path, "user artwork");
  await assert.rejects(installPet("deepseek", { directory }), /拒绝覆盖/);
  assert.equal(await readFile(path, "utf8"), "user artwork");
});

test("target symlink is rejected without touching its destination", async (t) => {
  const root = await temporary(t);
  const directory = join(root, "pets");
  const outside = join(root, "outside");
  await mkdir(directory);
  await mkdir(outside);
  await writeFile(join(outside, "keep.txt"), "untouched");
  await symlink(outside, join(directory, "voira-deepseek"), "dir");
  await assert.rejects(installPet("deepseek", { directory }), /拒绝覆盖/);
  assert.equal(await readFile(join(outside, "keep.txt"), "utf8"), "untouched");
  await assert.rejects(lstat(join(outside, "pet.json")), { code: "ENOENT" });
});

test("unknown pet and traversal input fail before creating a directory", async (t) => {
  const directory = join(await temporary(t), "not-created");
  await assert.rejects(installPet("../escape", { directory }), /没有可安装/);
  await assert.rejects(lstat(directory), { code: "ENOENT" });
});

test("CLI help/list do not install, invalid arguments fail, install resolves CODEX_HOME", async (t) => {
  const home = join(await temporary(t), "codex");
  const env = { ...process.env, CODEX_HOME: home };
  assert.match((await exec(process.execPath, [bin, "--help"], { env })).stdout, /用法/);
  assert.match((await exec(process.execPath, [bin, "list"], { env })).stdout, /deepseek/);
  await assert.rejects(lstat(home), { code: "ENOENT" });
  await assert.rejects(exec(process.execPath, [bin, "unknown"], { env }), (error) => error.code === 1);
  assert.match((await exec(process.execPath, [bin, "install", "deepseek"], { env })).stdout, /安装成功/);
  assert.equal(JSON.parse(await readFile(join(home, "pets/voira-deepseek/pet.json"))).spriteVersionNumber, 2);
  assert.equal((await exec(process.execPath, [bin, "--version"], { env })).stdout.trim(), "0.2.0");
});
