# DeepSeek · 蓝色大肥鱼

ChatGPT Work Q版宠物，保留雾蓝长发、蓝白水手裙、蓝瞳、呆毛及贴身小鲸鱼。原始立绘和设定卡继续保存在[角色目录](../../characters/chibi/deepseek/)。

![九种状态动态预览](preview.gif)

## 使用与文件

“DeepSeek · 蓝色大肥鱼”已通过Pets创建验证。在终端运行：

```sh
npx voira-pet install deepseek
```

然后在桌面客户端「设置 → Pets」刷新并选择。说明见[项目首页](../../../README.md#开始使用)。网页端云收藏需要通过支持v2的Pets创建／导入流程另行添加。本地安装不会同步云收藏或切换活动宠物。

- [pet.json](pet.json)：本地安装manifest，声明v2、显示名称和精灵图相对路径；须与WebP一起放入voira-deepseek目录。
- [spritesheet.png](spritesheet.png)：透明PNG，1536×2288，8列×11行，单格192×208，共73个有效帧。
- [spritesheet.webp](spritesheet.webp)：同一精灵图的无损WebP副本。
- [preview.gif](preview.gif)／[preview.mp4](preview.mp4)：九种动画状态的完整预览。
- [look-loop.gif](look-loop.gif)：16个顺时针注视方向。
- [idle-jump-idle.gif](idle-jump-idle.gif)：待机、跳跃、返回待机的过渡检查。
- [spritesheet-layout.json](spritesheet-layout.json)：格子位置和方向布局说明。

## 动作与检查

九种状态为待机、向右移动、向左移动、挥手、跳跃、失败、等待输入、专注工作和审阅。后两行是从朝上开始的16个顺时针注视方向；“专注工作”表示处理任务，不是脚步奔跑。

最终PNG通过本地结构检查、动作质量检查、三份独立方向盲评及Pets插件预检，并已创建成功。跳跃峰值离地30像素，回到待机基线；注视中心最大漂移2像素。中间相邻角度变化较细微，两处跨行衔接保留轻微衣饰与轮廓差异。

本地安装使用pet.json及WebP；PNG可用于支持v2的Pets创建流程。GIF和MP4仅为预览，不作为导入文件。
