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

test("可访问来源页展示与结构化资料一致的字段", async () => {
  const material = JSON.parse(await readFile(source, "utf8"));
  const page = await readFile(new URL("../fixtures/source.html", import.meta.url), "utf8");
  assert.ok(page.includes(material.name));
  assert.ok(page.includes("本页为虚构合成来源"));
  assert.ok(page.includes("<table>"));
  assert.ok(page.includes("notes"));
});
