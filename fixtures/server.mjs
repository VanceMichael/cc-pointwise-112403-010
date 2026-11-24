import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const fixture = (name) => fileURLToPath(new URL(`./${name}`, import.meta.url));
const material = JSON.parse(await readFile(fixture("../data/source-material.json"), "utf8"));
const sources = new Map(material.feeds.map((feed) => [feed.id, `source-${feed.id}.html`]));
const port = Number(process.env.SOURCE_PORT || 0);
const server = createServer(async (request, response) => {
  const pathname = new URL(request.url, "http://localhost").pathname;
  const sourceId = pathname.startsWith("/source/") ? pathname.slice("/source/".length) : "";
  const filename = pathname === "/source.html" ? "source.html" : sources.get(sourceId);
  if (!filename) {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("未找到合成来源页");
    return;
  }
  response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  response.end(await readFile(fixture(filename)));
});

server.listen(port, "127.0.0.1", () => {
  const address = server.address();
  process.stdout.write(`合成来源目录已就绪：http://127.0.0.1:${address.port}/source.html
`);
});
