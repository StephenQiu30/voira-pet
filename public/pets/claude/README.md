# Claude · 向日葵

沉稳细腻的向日葵少女，温柔含蓄，笑意温暖。铜橙色长卷发与弯卷呆毛，暖琥珀双瞳，侧边编发缀着向日葵与深棕蝴蝶结；身穿米白花纹短裙、深棕层叠裙摆和泡泡袖，搭配白袜与棕色搭扣鞋。

![九种状态动态预览](preview.gif)

## 使用与文件

已通过 Pets 创建与列表回读验证，可在当前账号的 Pets 收藏中找到「Claude · 向日葵」。

公开npm 0.3.0已包含Claude，在终端运行：

```sh
npx voira-pet install claude
```

默认写入 CODEX_HOME/pets/voira-claude，未设置 CODEX_HOME 时为 ~/.codex/pets/voira-claude；支持 --dir 指定其他目录。安装后在支持 v2 自定义宠物的桌面客户端「设置 → Pets」刷新并选择。本地安装不切换活动宠物、不自动同步网页云收藏，不覆盖已有不同内容。

- [pet.json](pet.json)：本地 v2 manifest，description 仅包含人设和形象设计。
- [spritesheet.png](spritesheet.png)／[spritesheet.webp](spritesheet.webp)：透明精灵图，1536×2288、8列×11行、192×208单格，73个有效帧。
- [preview.gif](preview.gif)／[preview.mp4](preview.mp4)：九种状态的动态预览。
- [look-loop.gif](look-loop.gif)：十六个顺时针注视方向。
- [idle-jump-idle.gif](idle-jump-idle.gif)：待机、起跳与落地过渡。
- [spritesheet-layout.json](spritesheet-layout.json)：格子位置与方向布局。

## 动作与验证边界

九态为待机、右移、左移、挥手、跳跃、失败、等待输入、专注工作和审阅。工作以站定思考表达；左右移独立制作，向日葵发饰随头转自然遮挡，不通过镜像换侧。原始[立绘与设定卡](../../characters/chibi/claude/)保留。

结构、逐帧、质量门槛与 Pets 预检通过。最终跳跃峰值离地43像素、首尾落点差0；注视中心最大漂移2.5像素。四轴盲审通过，337.5°向左分量细微，结合完整循环复核后保留警告；不代表完美角度插值。PNG与WebP解码像素一致，预览均从最终PNG导出。
