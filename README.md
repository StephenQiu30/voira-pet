<div align="center">

# Voira Pet

**ChatGPT Work 宠物**

让写代码的日常，多一个小小的陪伴。

[使用 DeepSeek](#使用-deepseek-宠物) · [使用 ChatGPT](#使用-chatgpt-宠物) · [认识伙伴](#认识四位伙伴) · [角色设定卡](#角色设定卡) · [当前进度](#当前进度)

</div>

<p align="center">
  <a href="public/characters/chibi/deepseek/master.png"><img src="public/characters/chibi/deepseek/master.png" width="150" alt="DeepSeek Q版：雾蓝长发、蓝白水手裙与漂浮的小鲸鱼"></a>
  <a href="public/characters/chibi/chatgpt/master.png"><img src="public/characters/chibi/chatgpt/master.png" width="150" alt="ChatGPT Q版：银白长发、双龙角、淡紫双瞳与微鼓脸颊"></a>
  <a href="public/characters/chibi/claude/master.png"><img src="public/characters/chibi/claude/master.png" width="150" alt="Claude Q版：铜橙长发、向日葵与闭眼浅笑"></a>
  <a href="public/characters/chibi/gemini/master.png"><img src="public/characters/chibi/gemini/master.png" width="150" alt="Gemini Q版：蓝紫长发、猫耳、琥珀双瞳与星饰"></a>
</p>

Voira Pet 为 ChatGPT Work 制作 Q 版宠物，让熟悉的角色陪伴日常工作。本仓库维护角色立绘、设定卡、动画精灵图和安装器。

> **DeepSeek 与 ChatGPT 宠物已完成。** 两位角色的 v2 动画精灵图均已通过校验和 ChatGPT Work Pets 创建验证。Claude、Gemini 目前仍为静态形象素材。

## 使用 DeepSeek 宠物

![DeepSeek九种状态动态预览](public/pets/deepseek/preview.gif)

“DeepSeek · 蓝色大肥鱼”已完成Pets创建验证。成品包含九种动画状态和十六个注视方向，共73个有效帧。

### npx 安装

需要 Node.js 20 或以上。在终端运行：

```sh
npx voira-pet
```

默认安装到 `~/.codex/pets/voira-deepseek/`；设置过 `CODEX_HOME` 时使用该目录下的 `pets/`。安装后在桌面客户端的 **设置 → Pets** 中刷新并选择。需要安装到其他位置时，在命令末尾添加 `--dir "/你的/pets目录"`。重复安装相同素材会保持原样，遇到内容不同的已有目录时停止覆盖。

此命令从 [npm](https://www.npmjs.com/package/voira-pet) 下载并运行安装器，默认安装 DeepSeek，无需 Git 或 npm 账号。首次运行时按 npx 提示确认下载。需要跳过确认时使用 `npx --yes voira-pet`。

也可以显式选择其中一位，或查看可用角色：

```sh
npx voira-pet install deepseek
npx voira-pet list
```

<details>
<summary>从 GitHub 安装固定版本</summary>

以下为 GitHub tgz 备用入口；npm 12 需要显式允许本次远程下载（[npm 官方说明](https://docs.npmjs.com/cli/v12/commands/npm-install/#allow-remote)）：

```sh
npx --yes --allow-remote=root https://github.com/StephenQiu30/voira-pet/releases/download/v0.1.0/voira-pet-0.1.0.tgz install deepseek
```

该参数仅作用于本次命令，不修改全局 npm 配置。

</details>

### 下载 ZIP 手动安装

从 [GitHub Releases](https://github.com/StephenQiu30/voira-pet/releases/latest) 下载 `voira-pet-deepseek-v0.1.0.zip`，解压后将完整的 `voira-deepseek` 文件夹放入上述 `pets` 目录，再刷新宠物列表。文件夹内的 `pet.json` 和 `spritesheet.webp` 必须一起保留；发布页同时提供 SHA-256 校验文件。

本地安装适用于支持 v2 自定义宠物的桌面客户端，不会自动同步网页端的 Pets 云收藏。网页端需通过支持 v2 的 Pets 创建／导入流程另行添加。安装器不会切换当前宠物。

[查看素材与使用说明](public/pets/deepseek/README.md) · [透明精灵图](public/pets/deepseek/spritesheet.png) · [注视方向预览](public/pets/deepseek/look-loop.gif)

## 使用 ChatGPT 宠物

![ChatGPT九种状态动态预览](public/pets/chatgpt/preview.gif)

“ChatGPT · 银白龙裔”保留银白长发、双龙角、淡紫眼睛与水晶鞋，包含九种动画状态和十六个注视方向，共73个有效帧，已通过Pets创建验证。

需要 Node.js 20 或以上。在终端运行：

```sh
node bin/voira-pet.mjs install chatgpt
```

在项目源码根目录运行。ChatGPT 尚未发布到 npm，当前 npm 0.1.0 仅含 DeepSeek。安装到 `~/.codex/pets/voira-chatgpt/`；设置过 `CODEX_HOME` 时使用该目录下的 `pets/`。这条命令只安装 ChatGPT，不覆盖已经装好的 DeepSeek。安装后在桌面客户端的 **设置 → Pets** 中刷新并选择。本地安装不会同步网页端云收藏。

[查看素材与使用说明](public/pets/chatgpt/README.md) · [透明精灵图](public/pets/chatgpt/spritesheet.png) · [注视方向预览](public/pets/chatgpt/look-loop.gif)

## 认识四位伙伴

**DeepSeek · 蓝色大肥鱼**<br>
温柔、耐心，带一点小机灵。雾蓝长发搭配蓝白水手裙，小鲸鱼和气泡陪在身旁。像一位愿意慢慢听你说完的伙伴。

**ChatGPT · 银白龙裔**<br>
安静、聪慧，偶尔有点小倔强。银白双龙角、淡紫双瞳和水晶鞋，配上微鼓的脸颊，藏着含蓄的小情绪。

**Claude · 向日葵**<br>
沉稳、细腻，笑意温暖。铜橙长发、米白与深棕裙装，点缀向日葵；微微倾头、闭眼浅笑，安静地陪在一旁。

**Gemini · 星辰猫耳**<br>
灵动、好奇，总想分享新发现。蓝紫长发、猫耳与金色星饰，琥珀色眼睛明亮，轻抬指尖的动作像刚有了新点子。

点击上方角色可查看完整透明立绘。四位名称用于区分 Voira 的角色形象，宠物用于 ChatGPT Work；角色名称不代表已接入同名模型服务，也不代表模型厂商的官方形象或合作关系。

## 角色设定卡

每张卡包含主立绘、表情、动作与服饰细节，点击可查看原图。

<details>
<summary>DeepSeek · 蓝白水手裙与鲸鱼伙伴</summary>

![DeepSeek Q版设定卡：主立绘、四种表情、动作与鲸鱼及衣饰细节](public/characters/chibi/deepseek/card.png)

</details>

<details>
<summary>ChatGPT · 银白双龙角与水晶鞋</summary>

![ChatGPT Q版设定卡：主立绘、表情、动作与龙角、发饰及水晶鞋细节](public/characters/chibi/chatgpt/card.png)

</details>

<details>
<summary>Claude · 向日葵与温暖浅笑</summary>

![Claude Q版设定卡：主立绘、表情、动作与向日葵及裙装细节](public/characters/chibi/claude/card.png)

</details>

<details>
<summary>Gemini · 星饰与好奇目光</summary>

![Gemini Q版设定卡：主立绘、表情、动作与猫耳及星饰细节](public/characters/chibi/gemini/card.png)

</details>

## 当前进度

- **已完成：** DeepSeek 与 ChatGPT 的 v2 宠物，各含九种动画状态、十六个注视方向、精灵图校验及 Pets 创建。本地源码 0.2.0 可选安装这两位；公开 npm 0.1.0 仅含 DeepSeek。GitHub Release v0.1.0 仍为 DeepSeek 包。
- **其余素材：** 四位 Q 版角色共 4 张透明立绘与 4 张白底设定卡；Claude、Gemini 的宠物动画与导入尚未完成。

想先查看素材，可以克隆仓库：

```sh
git clone https://github.com/StephenQiu30/voira-pet.git
cd voira-pet
```

素材位于 `public/characters/chibi/<角色>/`：`master.png` 是透明立绘，`card.png` 是完整设定卡。卡内表情和动作不等于独立动画资源；DeepSeek 与 ChatGPT 的正式宠物素材另见 `public/pets/<角色>/`。

项目由 [Voira](https://github.com/StephenQiu30/voira) 的 Q 版形象延展，独立维护。欢迎通过 [Issues](https://github.com/StephenQiu30/voira-pet/issues) 分享你想要的桌宠体验或角色建议。
