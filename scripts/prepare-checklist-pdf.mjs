import { mkdir, readFile, writeFile } from "node:fs/promises";

const downloadsDir = new URL("../public/downloads/", import.meta.url);
const parts = await Promise.all(
  Array.from({ length: 7 }, (_, index) =>
    readFile(new URL(`checklist.part${String(index + 1).padStart(2, "0")}.txt`, downloadsDir), "utf8"),
  ),
);

await mkdir(downloadsDir, { recursive: true });
await writeFile(
  new URL("icecream-takeover-checklist.pdf", downloadsDir),
  Buffer.from(parts.join(""), "base64"),
);
