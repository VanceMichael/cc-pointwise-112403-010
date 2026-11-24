# 载人飞行任务阶段公告与地面验证回执采集簿

这是一个围绕合成演练资料开发的数据采集项目。项目尚未提供业务采集或办理能力。

## 目录

- `data/source-material.json` 保存合成来源数据及其背景。
- `fixtures/source.html` 是可由 HTTP 获取的合成发布页。
- `fixtures/server.mjs` 仅提供来源演练页，不包含采集或业务处理能力。
- `test/materials.test.js` 检查资料与来源页的对应关系。
- `package.json` 声明 Node.js 测试入口，不依赖第三方包。

## 运行

需要 Node.js 22 或更新版本。运行现有检查：

```sh
npm test
```

启动本地合成来源页：

```sh
npm run sources
```

页面地址为 `http://127.0.0.1:4173/source.html`。服务只提供演练资料，不实现采集结果、归属判断或业务状态。
