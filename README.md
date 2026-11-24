# 载人飞行任务阶段公告与地面验证回执采集簿

这是一个围绕合成演练资料开发的数据采集项目。项目尚未提供业务采集或办理能力。

## 目录

- `data/source-material.json` 保存当前演练使用的来源片段及其背景。
- `test/materials.test.js` 检查演练资料能够读取且结构完整。
- `package.json` 声明 Node.js 测试入口，不依赖第三方包。

## 运行

需要 Node.js 22 或更新版本。运行现有检查：

```sh
npm test
```
