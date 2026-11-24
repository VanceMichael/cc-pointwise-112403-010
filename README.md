# 发射窗口调整下的关键物资到场采集核对

这是一个使用合成网页和记录开展本地开发的数据采集项目。业务采集、关系判断和办理结果尚未实现。

## 内容

- `data/source-material.json` 按来源保存虚构演练记录。
- `fixtures/source.html` 是来源目录，列出三个独立来源页。
- `fixtures/server.mjs` 提供本地来源页。
- `test/materials.test.js` 检查演练资料与来源页。

## 运行

需要 Node.js 22 或更新版本。执行 `npm test` 运行基线检查，执行 `npm run sources` 启动本地来源目录。目录中的每个来源链接可单独访问。
