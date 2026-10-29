import { cp, mkdir, rm } from "node:fs/promises";
import { join } from "node:path";

const ids = ["deepseek", "chatgpt", "claude", "gemini", "grok"];
const dest = "public/pets";

await rm(dest, { recursive: true, force: true });

for (const id of ids) {
  const dir = join(dest, id);
  await mkdir(dir, { recursive: true });
  await cp(
    join("..", "public", "characters", "chibi", id, "master.png"),
    join(dir, "master.png"),
  );
  await cp(
    join("..", "public", "characters", "chibi", id, "card.png"),
    join(dir, "card.png"),
  );
  await cp(
    join("..", "public", "pets", id, "preview.gif"),
    join(dir, "preview.gif"),
  );
}
