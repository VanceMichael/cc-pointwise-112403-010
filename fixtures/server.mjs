import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const page = fileURLToPath(new URL("./source.html", import.meta.url));
const port = Number(process.env.SOURCE_PORT || 0);
const server = createServer(async (request, response) => {
  if (request.url !== "/source.html") {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("未找到合成来源页");
    return;
  }
  response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  response.end(await readFile(page));
});

server.listen(port, "127.0.0.1", () => {
  const address = server.address();
  process.stdout.write(`合成来源页已就绪：http://127.0.0.1:${address.port}/source.html\n`);
});
