import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = new URL("../", import.meta.url);
const serverEntry = new URL("../dist/server/index.js", import.meta.url);
const clientDirectory = new URL("../dist/client/", import.meta.url);
const outputDirectory = new URL("../out/", import.meta.url);
const outputPath = fileURLToPath(outputDirectory);
const siteUrl = "https://iceinsoo.kr";
const routes = ["/", "/about", "/privacy", "/terms", "/contact", "/store-supplies"];

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(clientDirectory, outputDirectory, { recursive: true });

const workerUrl = new URL(serverEntry);
workerUrl.searchParams.set("staticExport", Date.now().toString());
const { default: worker } = await import(workerUrl.href);

for (const route of routes) {
  const response = await worker.fetch(
    new Request(`${siteUrl}${route}`, { headers: { accept: "text/html" } }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  if (!response.ok) {
    throw new Error(`Static export failed for ${route}: HTTP ${response.status}`);
  }

  const html = await response.text();
  if (!html.includes("<!DOCTYPE html>") || !html.includes("무인아이스크림")) {
    throw new Error(`Static export produced invalid HTML for ${route}`);
  }

  const routeDirectory = route === "/" ? outputPath : join(outputPath, route.slice(1));
  await mkdir(routeDirectory, { recursive: true });
  await writeFile(join(routeDirectory, "index.html"), html, "utf8");
}

const internalPaths = new Set(routes);
for (const route of routes) {
  const htmlPath = route === "/" ? join(outputPath, "index.html") : join(outputPath, route.slice(1), "index.html");
  const html = await readFile(htmlPath, "utf8");
  const links = [...html.matchAll(/href=["']([^"']+)["']/g)].map((match) => match[1]);

  for (const link of links) {
    if (!link.startsWith("/") || link.startsWith("/assets/")) continue;
    const path = link.split("#")[0].split("?")[0] || "/";
    if (!internalPaths.has(path) && !["/favicon.svg", "/sitemap.xml", "/robots.txt"].includes(path)) {
      throw new Error(`Broken internal link found on ${route}: ${link}`);
    }
  }
}

console.log(`Static export complete: ${routes.length} routes -> out/`);

