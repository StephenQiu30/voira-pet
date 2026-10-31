<div align="center">

# Voira Pet

**ChatGPT Work 宠物 · 五位 Q 版伙伴**

温柔的鲸鱼娘，安静的龙裔，温暖的向日葵，好奇的猫耳少女，还有笑里藏着小机灵的星冠少女。

<p>
  <a href="#deepseek"><img src="public/characters/chibi/deepseek/master.png" width="104" alt="DeepSeek · 蓝色大肥鱼：雾蓝长发、蓝白水手裙与鲸鱼伙伴"></a>
  <a href="#chatgpt"><img src="public/characters/chibi/chatgpt/master.png" width="104" alt="ChatGPT · 银白龙裔：银白长发、双龙角、淡紫眼睛与水晶鞋"></a>
  <a href="#claude"><img src="public/characters/chibi/claude/master.png" width="104" alt="Claude · 向日葵：铜橙长发、向日葵与米白深棕裙装"></a>
  <a href="#gemini"><img src="public/characters/chibi/gemini/master.png" width="104" alt="Gemini · 星辰猫耳：蓝紫长发、猫耳、琥珀眼睛与金色星饰"></a>
  <a href="#grok"><img src="public/characters/chibi/grok/master.png" width="104" alt="Grok · 星冠双马尾：金色双马尾、蓝瞳、星冠与黑红金裙装"></a>
</p>

[展示页](https://voira-pet.vercel.app) · [开始使用](#开始使用) · [认识五位伙伴](#认识五位伙伴) · [角色设定卡](#角色设定卡) · [下载与文档](#下载与文档)

[npm 0.5.0](https://www.npmjs.com/package/voira-pet) · [GitHub 仓库](https://github.com/StephenQiu30/voira-pet) · [GitHub 下载](https://github.com/StephenQiu30/voira-pet/releases/tag/v0.5.0) · Node.js 20+

</div>

Voira Pet 收录五位角色的立绘、设定卡与完整动画，并提供本地宠物安装器。五位均已完成 v2 精灵图与 Pets 创建验证，当前公开版本 **0.5.0** 包含全部五位。

展示页有中文 `/zh-CN/` 和英文 `/en/`。打开网站根路径时，已保存的 `voira-locale` 优先；否则按浏览器语言，英语进入英文，其余进入中文。

## 开始使用

运行下面的命令，先领养一位 DeepSeek：

```sh
npx voira-pet
```

安装后，在支持 v2 自定义宠物的桌面客户端中打开 **设置 → Pets**，刷新并选择她。

想换一位伙伴，使用对应的角色名：

```sh
npx voira-pet install deepseek
npx voira-pet install chatgpt
npx voira-pet install claude
npx voira-pet install gemini
npx voira-pet install grok
```

五位可以分别安装、同时保留。重复安装相同素材时保持原样；遇到不同的已有内容时停止覆盖。

<details>
<summary>安装位置与更多命令</summary>

默认安装到 `~/.codex/pets/`；设置过 `CODEX_HOME` 时，使用其 `pets/` 目录。每位角色保存在独立的 `voira-<角色名>/` 文件夹中。

```sh
# 查看可安装的角色
npx voira-pet list

# 指定 pets 父目录
npx voira-pet install grok --dir "/你的/pets目录"
```

安装器不会切换当前活动宠物。本地安装与网页端 Pets 云收藏独立，网页端需通过支持 v2 的 Pets 创建／导入流程另行添加。完整规则见[下载与安装](docs/01-下载与安装.md)。

</details>

## 认识五位伙伴

<a name="动画预览"></a>

每位角色均有九种动画状态和十六个注视方向。下面展示正式成品，点击预览可查看完整动画与素材说明。

<a name="deepseek"></a>

### DeepSeek · 蓝色大肥鱼

<p align="center">
  <a href="public/pets/deepseek/README.md"><img src="public/pets/deepseek/preview.gif" width="384" alt="DeepSeek · 蓝色大肥鱼九种状态动态预览"></a>
</p>

在爱里长大的鲸鱼娘，温柔耐心，轻松里带着一点小机灵。雾蓝长发与弯曲呆毛，清亮蓝瞳，白褶头饰配蓝宝石领结，穿珍珠白与海蓝水手裙，身边贴着一只圆滚的小鲸鱼。

[完整动画与素材](public/pets/deepseek/README.md) · [透明立绘](public/characters/chibi/deepseek/master.png)

<a name="chatgpt"></a>

### ChatGPT · 银白龙裔

<p align="center">
  <a href="public/pets/chatgpt/README.md"><img src="public/pets/chatgpt/preview.gif" width="384" alt="ChatGPT · 银白龙裔九种状态动态预览"></a>
</p>

安静聪慧的银白龙裔，知性温和，偶尔流露一点小倔强。银白长发、弯卷呆毛、双白龙角与淡紫双瞳，带着尖耳和微鼓的脸颊；佩银色结饰、流苏与紫晶坠，身穿银白绣纹短裙和宽袖，脚踏水晶鞋。

[完整动画与素材](public/pets/chatgpt/README.md) · [透明立绘](public/characters/chibi/chatgpt/master.png)

<a name="claude"></a>

### Claude · 向日葵

<p align="center">
  <a href="public/pets/claude/README.md"><img src="public/pets/claude/preview.gif" width="384" alt="Claude · 向日葵九种状态动态预览"></a>
</p>

沉稳细腻的向日葵少女，温柔含蓄，笑意温暖。铜橙色长卷发与弯卷呆毛，暖琥珀双瞳，侧边编发缀着向日葵与深棕蝴蝶结；身穿米白花纹短裙、深棕层叠裙摆和泡泡袖，搭配白袜与棕色搭扣鞋。

[完整动画与素材](public/pets/claude/README.md) · [透明立绘](public/characters/chibi/claude/master.png)

<a name="gemini"></a>

### Gemini · 星辰猫耳

<p align="center">
  <a href="public/pets/gemini/README.md"><img src="public/pets/gemini/preview.gif" width="384" alt="Gemini · 星辰猫耳九种状态动态预览"></a>
</p>

灵动好奇的星辰猫耳少女，眼神明亮，喜欢发现日常里的新鲜事。蓝紫色长卷发与环形呆毛，毛绒猫耳、琥珀双瞳，编发间点缀白花、深紫蝴蝶结与金色星饰；身穿白紫层叠短裙，配白袜和紫色搭扣鞋。

[完整动画与素材](public/pets/gemini/README.md) · [透明立绘](public/characters/chibi/gemini/master.png)

<a name="grok"></a>

### Grok · 星冠双马尾

<p align="center">
  <a href="public/pets/grok/README.md"><img src="public/pets/grok/preview.gif" width="384" alt="Grok · 星冠双马尾九种状态动态预览"></a>
</p>

机灵活泼的星冠少女，笑里带着一点狡黠与叛逆。金色长卷发扎成双马尾，清亮蓝瞳配精巧金色星冠；黑色蝴蝶结缀着星链与红宝石，身穿黑红层叠裙装和金纹饰边，搭配黑色连裤袜与搭扣厚底鞋。

[完整动画与素材](public/pets/grok/README.md) · [透明立绘](public/characters/chibi/grok/master.png)

## 角色设定卡

展开查看表情、动作与服饰细节。卡内动作属于形象设定，独立动画资源见上方各角色的素材说明。

<details>
<summary>DeepSeek · 蓝色大肥鱼</summary>

![DeepSeek · 蓝色大肥鱼设定卡：主立绘、表情、动作与服饰细节](public/characters/chibi/deepseek/card.png)

</details>

<details>
<summary>ChatGPT · 银白龙裔</summary>

![ChatGPT · 银白龙裔设定卡：主立绘、表情、动作与服饰细节](public/characters/chibi/chatgpt/card.png)

</details>

<details>
<summary>Claude · 向日葵</summary>

![Claude · 向日葵设定卡：主立绘、表情、动作与服饰细节](public/characters/chibi/claude/card.png)

</details>

<details>
<summary>Gemini · 星辰猫耳</summary>

![Gemini · 星辰猫耳设定卡：主立绘、表情、动作与服饰细节](public/characters/chibi/gemini/card.png)

</details>

<details>
<summary>Grok · 星冠双马尾</summary>

![Grok · 星冠双马尾设定卡：主立绘、表情、动作与服饰细节](public/characters/chibi/grok/card.png)

</details>

## 下载与文档

没有 Node.js 时，可从 [GitHub Release v0.5.0](https://github.com/StephenQiu30/voira-pet/releases/tag/v0.5.0) 下载对应角色的独立 ZIP，将解压后的完整文件夹放入客户端的 `pets/` 目录，保留 `pet.json` 和 `spritesheet.webp`。同一 Release 也提供 npm 安装包与 SHA-256 校验和。

<details>
<summary>通过 GitHub 安装固定版本</summary>

以下命令从 GitHub 下载 0.5.0 安装包；将最后的 `grok` 换成其他角色名即可。npm 12 使用 `--allow-remote=root` 允许本次远程下载，详见 [npm 官方说明](https://docs.npmjs.com/cli/v12/commands/npm-install/#allow-remote)。

```sh
npx --yes --allow-remote=root https://github.com/StephenQiu30/voira-pet/releases/download/v0.5.0/voira-pet-0.5.0.tgz install grok
```

该参数只作用于本次命令，不修改全局 npm 配置。

</details>

| 想了解什么 | 从这里开始 |
| --- | --- |
| 安装位置、重复安装与内容保护 | [下载与安装](docs/01-下载与安装.md) |
| 动画、方向预览与精灵图 | 各角色下方的「完整动画与素材」 |
| 版本变化 | [更新记录](CHANGELOG.md) |
| 问题反馈与角色建议 | [GitHub Issues](https://github.com/StephenQiu30/voira-pet/issues) |

角色原图位于 `public/characters/chibi/<角色>/`，正式宠物位于 `public/pets/<角色>/`。本项目由 [Voira](https://github.com/StephenQiu30/voira) 的 Q 版形象延展，独立维护；角色名称不代表接入同名模型服务，也不代表模型厂商的官方形象或合作关系。

## 作者

StephenQiu30 · AI Application Engineer · RAG 与 AI Agent · 上海

[stephenqiu03@gmail.com](mailto:stephenqiu03@gmail.com) · [GitHub](https://github.com/StephenQiu30) · [展示页](https://voira-pet.vercel.app)
