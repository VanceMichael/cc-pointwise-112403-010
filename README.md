# 发射窗口调整下的关键物资到场采集核对

这个工作区用于围绕合成资料开展来源采集与业务数据处理。

## 内容

- `data/source-material.json` 按来源保存虚构演练记录。
- `fixtures/source.html` 是来源目录，列出三个独立来源页。
- `fixtures/server.mjs` 提供本地来源页。
- `test/materials.test.js` 检查演练资料与来源页。

## 运行

需要 Node.js 22 或更新版本。执行 `npm test` 运行基线检查，执行 `npm run sources` 启动本地来源目录。目录中的每个来源链接可单独访问。
