import { readFile } from "node:fs/promises";
import { parseArgs } from "node:util";
import { installPet, pets } from "./installer.mjs";

const help = `Voira Pet — ChatGPT Work 本地宠物安装器

用法：
  voira-pet install [deepseek|chatgpt] [--dir <pets目录>]
  voira-pet list
  voira-pet --help
  voira-pet --version

默认安装到 CODEX_HOME/pets；未设置时使用 ~/.codex/pets。
已有相同宠物时保持原样；遇到不同文件或符号链接时拒绝覆盖。
安装后在桌面客户端的设置 → Pets 中刷新并选择宠物。
本地安装不会自动创建或同步网页端 Pets 收藏。`;

export async function runCli(args, output = console.log) {
  const { values, positionals } = parseArgs({
    args,
    allowPositionals: true,
    options: {
      dir: { type: "string" },
      help: { type: "boolean", short: "h" },
      version: { type: "boolean", short: "v" },
    },
  });
  if (values.help) return output(help);
  if (values.version) {
    const pkg = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8"));
    return output(pkg.version);
  }
  const [command = "install", key = "deepseek", ...extra] = positionals;
  if (command === "list" && positionals.length === 1 && !values.dir) {
    for (const pet of pets) output(`${pet.key}\t${pet.name}`);
    return;
  }
  if (command !== "install" || extra.length) throw new Error(`未知命令或参数。\n${help}`);
  const result = await installPet(key, { directory: values.dir });
  output(`${result.alreadyInstalled ? "已安装，保持原样" : "安装成功"}：${result.name}`);
  output(result.directory);
  output("在桌面客户端的设置 → Pets 中刷新并选择此宠物；网页端需另行导入。");
}
