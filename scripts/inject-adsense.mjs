import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve("dist/client");
const adsenseSource = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9586684866056186";
const adsenseScript = `<script async src="${adsenseSource}" crossorigin="anonymous"></script>`;

async function collectHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? collectHtmlFiles(target) : target.endsWith(".html") ? [target] : [];
  }));
  return files.flat();
}

const htmlFiles = await collectHtmlFiles(outputDirectory);
let injectedCount = 0;

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  if (html.includes(adsenseSource)) continue;
  if (!html.includes("</head>")) continue;
  await writeFile(file, html.replace("</head>", `${adsenseScript}</head>`), "utf8");
  injectedCount += 1;
}

console.log(`AdSense verification script injected into ${injectedCount} static pages.`);
