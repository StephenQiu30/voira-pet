# Gemini · 星辰猫耳

灵动好奇的星辰猫耳少女，眼神明亮，喜欢发现日常里的新鲜事。蓝紫色长卷发与环形呆毛，毛绒猫耳、琥珀双瞳，编发间点缀白花、深紫蝴蝶结与金色星饰；身穿白紫层叠短裙，配白袜和紫色搭扣鞋。

![九种状态动态预览](preview.gif)

## 使用与文件

已通过Pets创建与列表回读验证，可在当前账号的Pets收藏中找到「Gemini · 星辰猫耳」。

Gemini 已加入当前源码安装器，尚未包含在公开 npm 0.3.0 中。在仓库根目录运行：

```sh
node bin/voira-pet.mjs install gemini
```

默认写入 CODEX_HOME/pets/voira-gemini，未设置时为 ~/.codex/pets/voira-gemini；支持 --dir 指定其他目录。安装后在支持 v2 自定义宠物的桌面客户端「设置 → Pets」刷新并选择。本地安装不自动同步网页云收藏、不切换活动宠物，不覆盖已有不同内容。

- [pet.json](pet.json)：本地v2 manifest，人设描述仅包含性格与外观。
- [spritesheet.png](spritesheet.png)／[spritesheet.webp](spritesheet.webp)：透明精灵图，1536×2288、8列×11行、192×208单格，73有效帧。
- [preview.gif](preview.gif)／[preview.mp4](preview.mp4)：九种状态动态预览。
- [look-loop.gif](look-loop.gif)：十六个顺时针注视方向。
- [idle-jump-idle.gif](idle-jump-idle.gif)：待机、起跳与落地过渡。
- [spritesheet-layout.json](spritesheet-layout.json)：格子位置与方向布局。

## 动作与验证边界

九态为待机、右移、左移、挥手、跳跃、失败、等待输入、专注工作与审阅。猫耳、星饰及编发随头转自然跟随；左右移独立生成，不镜像换侧。工作采用站定思考，审阅为低手扫视，避免动作含义混淆。

结构、逐帧、最终质量门槛、第二轮三人方向盲审与Pets预检通过；跳跃峰值离地44像素、落点差0，注视中心最大漂移2.5像素。157.5°／202.5°横向分量细微，结合完整循环复核后保留警告；审阅动作较轻，细饰在小尺寸有所简化。PNG与WebP解码像素一致，预览从最终精灵图导出。原[立绘与设定卡](../../characters/chibi/gemini/)及既有三位精灵图保持。
