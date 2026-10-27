# Grok · 星冠双马尾

机灵活泼的星冠少女，笑里带着一点狡黠与叛逆。金色长卷发扎成双马尾，清亮蓝瞳配精巧金色星冠；黑色蝴蝶结缀着星链与红宝石，身穿黑红层叠裙装和金纹饰边，搭配黑色连裤袜与搭扣厚底鞋。

![九种状态动态预览](preview.gif)

## 使用与文件

已通过Pets创建与列表回读验证，可在当前账号的Pets收藏中找到「Grok · 星冠双马尾」。公开 npm 已包含 Grok，在终端运行：

```sh
npx voira-pet install grok
```

默认写入 CODEX_HOME/pets/voira-grok，未设置时为 ~/.codex/pets/voira-grok；支持 --dir 指定其他目录。安装后在支持v2自定义宠物的桌面客户端「设置 → Pets」刷新并选择。本地安装不自动同步网页云收藏、不切换活动宠物，不覆盖已有不同内容。

- [pet.json](pet.json)：本地v2 manifest，description只写人设与外观。
- [spritesheet.png](spritesheet.png)／[spritesheet.webp](spritesheet.webp)：透明精灵图，1536×2288、8列×11行、192×208单格，73有效帧。
- [preview.gif](preview.gif)／[preview.mp4](preview.mp4)：九种状态动态预览。
- [look-loop.gif](look-loop.gif)：十六个顺时针注视方向。
- [idle-jump-idle.gif](idle-jump-idle.gif)：待机、蹲身起跳与落地过渡。
- [spritesheet-layout.json](spritesheet-layout.json)：格子位置与方向布局。

## 动作与验证边界

九态为待机、右移、左移、挥手、跳跃、失败、等待输入、专注工作与审阅。左右移独立生成，首饰和裙摆不通过镜像换侧；工作为站定思考，等待轻摊双手，审阅低手扫视。金冠和星链保持附着，不用散落星光表现动作。

逐帧、结构、最终质量门槛、三人方向盲审多数、独立视觉复核及Pets预检通过。跳跃采用整行共同比例调整，避免蹲身按总高对齐引起头脸膨胀；最终峰值离地36像素、落点差0，注视中心最大漂移3.5像素。近垂直157.5°／202.5°横向分量及部分相邻方向增量细微，工作／审阅动作较轻，不宣称完美等角度插值。PNG与WebP解码像素一致，预览从最终精灵图导出。原[立绘与设定卡](../../characters/chibi/grok/)及既有四位成品保持。
