# DeepSeek · 蓝色大肥鱼

ChatGPT Work Q版宠物，保留雾蓝长发、蓝白水手裙、蓝瞳、呆毛及贴身小鲸鱼。原始立绘和设定卡继续保存在[角色目录](../../characters/chibi/deepseek/)。

![九种状态动态预览](preview.gif)

## 使用与文件

“DeepSeek · 蓝色大肥鱼”已通过Pets创建验证。其他用户需导入自己的Pets收藏后，再在Pets列表中选择。导出素材使用v2格式，须通过支持v2精灵图的Pets创建／导入流程使用；这些文件本身不包含聊天服务或独立桌宠程序。

- [spritesheet.png](spritesheet.png)：透明PNG，1536×2288，8列×11行，单格192×208，共73个有效帧。
- [spritesheet.webp](spritesheet.webp)：同一精灵图的无损WebP副本。
- [preview.gif](preview.gif)／[preview.mp4](preview.mp4)：九种动画状态的完整预览。
- [look-loop.gif](look-loop.gif)：16个顺时针注视方向。
- [idle-jump-idle.gif](idle-jump-idle.gif)：待机、跳跃、返回待机的过渡检查。
- [spritesheet-layout.json](spritesheet-layout.json)：格子位置和方向布局说明。

## 动作与检查

九种状态为待机、向右移动、向左移动、挥手、跳跃、失败、等待输入、专注工作和审阅。后两行是从朝上开始的16个顺时针注视方向；“专注工作”表示处理任务，不是脚步奔跑。

最终PNG通过本地结构检查、动作质量检查、三份独立方向盲评及Pets插件预检，并已创建成功。跳跃峰值离地30像素，回到待机基线；注视中心最大漂移2像素。中间相邻角度变化较细微，两处跨行衔接保留轻微衣饰与轮廓差异。

PNG／WebP用于导入宠物；GIF和MP4仅为预览，不作为导入文件。
