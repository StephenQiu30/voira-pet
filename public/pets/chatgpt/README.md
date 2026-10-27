# ChatGPT · 银白龙裔

ChatGPT Work Q版宠物，已通过Pets创建与列表回读验证。保留[原角色](../../characters/chibi/chatgpt/)的银白长发、双龙角、淡紫双瞳、尖耳、银白短裙和水晶鞋，安静聪慧，带一点小倔强。

![九种状态动态预览](preview.gif)

## 使用与文件

使用公开npm 0.2.0，在终端运行以下命令，然后在支持v2自定义宠物的桌面客户端「设置 → Pets」刷新并选择。

```sh
npx voira-pet install chatgpt
```

默认路径为CODEX_HOME/pets/voira-chatgpt，未设置CODEX_HOME时为~/.codex/pets/voira-chatgpt。该命令不安装或覆盖DeepSeek。本地安装不会自动同步网页云收藏；网页端需通过支持v2的Pets创建／导入流程添加。

- [pet.json](pet.json)：本地安装manifest，声明v2和spritesheet.webp相对路径。
- [spritesheet.png](spritesheet.png)／[spritesheet.webp](spritesheet.webp)：透明精灵图，1536×2288、8列×11行、192×208单格，73个有效帧。
- [preview.gif](preview.gif)／[preview.mp4](preview.mp4)：九种状态的动态预览。
- [look-loop.gif](look-loop.gif)：十六个顺时针注视方向。
- [idle-jump-idle.gif](idle-jump-idle.gif)：待机、起跳与落地过渡。
- [spritesheet-layout.json](spritesheet-layout.json)：格子位置与方向布局。

## 动作与验证边界

九态为待机、右移、左移、挥手、跳跃、失败、等待输入、专注工作和审阅。专注工作以站定思考表达，区别于移动跑步；左右移独立生成，发饰不通过镜像换侧。

精灵图结构、逐帧检查、最终质量门槛与三份独立方向盲评通过；跳跃峰值离地28像素，落点差0，注视中心最大漂移3像素。022.5／112.5／202.5的角度变化细微，157.5→180跨行衔接保留发束细节差异和像素差警告。原始立绘、设定卡与DeepSeek成品未覆盖。GIF和MP4只作预览，本地安装使用manifest与WebP。
