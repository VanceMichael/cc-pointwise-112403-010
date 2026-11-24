import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const source = new URL("../data/source-material.json", import.meta.url);

test("演练资料声明合成性质并保留项目名称", async () => {
  const material = JSON.parse(await readFile(source, "utf8"));
  assert.equal(material.material_nature, "本地合成演练资料");
  assert.ok(material.name);
  assert.ok(material.records);
});

test("来源资料含有可供人工查看的业务记录", async () => {
  const material = JSON.parse(await readFile(source, "utf8"));
  const values = Object.values(material.records);
  assert.ok(values.some((value) => Array.isArray(value) && value.length > 0));
});
