import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const materialUrl = new URL("../data/source-material.json", import.meta.url);
const pageUrl = new URL("../fixtures/source.html", import.meta.url);

test("合成资料包含相互关联的独立来源", async () => {
  const material = JSON.parse(await readFile(materialUrl, "utf8"));
  assert.equal(material.material_nature, "本地合成演练资料");
  assert.equal(material.feeds.length, 3);
  assert.equal(new Set(material.feeds.map((feed) => feed.id)).size, 3);
  assert.ok(material.feeds.every((feed) => feed.records.length > 0));
});

test("本地页面能辨认每个来源及其记录", async () => {
  const material = JSON.parse(await readFile(materialUrl, "utf8"));
  const page = await readFile(pageUrl, "utf8");
  assert.ok(page.includes(material.name));
  assert.ok(page.includes("虚构合成演练资料"));
  for (const feed of material.feeds) {
    assert.ok(page.includes(`data-source="${feed.id}"`));
    assert.ok(page.includes(feed.label));
    for (const record of feed.records) {
      for (const value of Object.values(record)) {
        if (value !== null) assert.ok(page.includes(String(value)));
      }
    }
  }
});
