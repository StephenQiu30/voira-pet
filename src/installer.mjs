import { createHash } from "node:crypto";
import { lstat, mkdir, open, readFile, rmdir, unlink } from "node:fs/promises";
import { homedir } from "node:os";
import { join, resolve } from "node:path";

export const pets = Object.freeze([
  Object.freeze({
    key: "deepseek",
    id: "voira-deepseek",
    name: "DeepSeek · 蓝色大肥鱼",
    sha256: "b0ceb29325ab05042cb3871b61c7bc3b6e206235336ebf3d4ce61c378465dc4f",
  }),
  Object.freeze({
    key: "chatgpt",
    id: "voira-chatgpt",
    name: "ChatGPT · 银白龙裔",
    sha256: "8fdf1c28db60b68860ea0b7946fe849dd31bb0005e1d785c9a44286d0df06688",
  }),
  Object.freeze({
    key: "claude",
    id: "voira-claude",
    name: "Claude · 向日葵",
    sha256: "0138381d414a3cb0ead6e3d3dfc60ff2a553dbcbbfa48087590d5c55acb807fe",
  }),
  Object.freeze({
    key: "gemini",
    id: "voira-gemini",
    name: "Gemini · 星辰猫耳",
    sha256: "a6a088aae5919b1572f3cb1a72c93fcbc5b0c6e09d0f741e49578229ecd29c57",
  }),
]);

const hash = (bytes) => createHash("sha256").update(bytes).digest("hex");

export function resolvePetsDirectory({ directory, env = process.env, home = homedir() } = {}) {
  if (directory !== undefined) {
    if (!directory.trim()) throw new Error("--dir 不能为空。");
    return resolve(directory);
  }
  return resolve(env.CODEX_HOME || join(home, ".codex"), "pets");
}

async function loadPet(key) {
  const pet = pets.find((entry) => entry.key === key);
  if (!pet) throw new Error(`没有可安装的宠物：${key}。运行 voira-pet list 查看可用素材。`);
  const base = new URL(`../public/pets/${pet.key}/`, import.meta.url);
  const manifest = JSON.parse(await readFile(new URL("pet.json", base), "utf8"));
  const sprite = await readFile(new URL("spritesheet.webp", base));
  if (
    manifest.id !== pet.id || manifest.displayName !== pet.name ||
    typeof manifest.description !== "string" || !manifest.description.trim() ||
    manifest.spriteVersionNumber !== 2 || manifest.spritesheetPath !== "spritesheet.webp" ||
    hash(sprite) !== pet.sha256
  ) throw new Error("宠物包校验失败，尚未写入安装目录。请重新下载正式发布包。");
  return { pet, manifest, sprite };
}

async function matchesExisting(directory, manifest, expectedHash) {
  const root = await lstat(directory);
  if (!root.isDirectory() || root.isSymbolicLink()) return false;
  const paths = [join(directory, "pet.json"), join(directory, "spritesheet.webp")];
  for (const path of paths) {
    const info = await lstat(path);
    if (!info.isFile() || info.isSymbolicLink()) return false;
  }
  const existing = JSON.parse(await readFile(paths[0], "utf8"));
  return Object.entries(manifest).every(([key, value]) => existing[key] === value) &&
    hash(await readFile(paths[1])) === expectedHash;
}

export async function installPet(key = "deepseek", options = {}) {
  const { pet, manifest, sprite } = await loadPet(key);
  const parent = resolvePetsDirectory(options);
  const directory = join(parent, pet.id);
  await mkdir(parent, { recursive: true });
  try {
    await mkdir(directory, { mode: 0o700 });
  } catch (error) {
    if (error.code !== "EEXIST") throw error;
    let matches = false;
    try { matches = await matchesExisting(directory, manifest, pet.sha256); } catch {}
    if (!matches) throw new Error(`目标已存在且内容不同或不完整，拒绝覆盖：${directory}`);
    return { name: pet.name, directory, alreadyInstalled: true };
  }

  const identity = await lstat(directory);
  const created = [];
  async function writeExclusive(name, content) {
    const path = join(directory, name);
    const file = await open(path, "wx", 0o644);
    created.push(path);
    try { await file.writeFile(content); } finally { await file.close(); }
  }
  try {
    await writeExclusive("spritesheet.webp", sprite);
    // 最后写manifest，客户端不会把尚未完成的图片复制当成可用宠物。
    await writeExclusive("pet.json", `${JSON.stringify(manifest, null, 2)}\n`);
  } catch (error) {
    const current = await lstat(directory).catch(() => null);
    if (current && current.dev === identity.dev && current.ino === identity.ino) {
      for (const path of created.reverse()) await unlink(path).catch(() => {});
      // 只删除本次创建的文件和空目录，保留并行加入的其他内容。
      await rmdir(directory).catch(() => {});
    }
    throw error;
  }
  return { name: pet.name, directory, alreadyInstalled: false };
}
