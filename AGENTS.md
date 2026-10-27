# Voira Pet Agent 入口

- 本仓库为ChatGPT Work制作Q版宠物，收录DeepSeek、ChatGPT、Claude、Gemini与Grok五位角色。五位均已完成v2精灵图、动态校验及Pets创建。公开npm 0.5.0支持DeepSeek、ChatGPT、Claude、Gemini与Grok，无参数时默认DeepSeek；未发布的本地能力不视为已发布。
- README维护对外定位、形象介绍和当前可用内容；不得把设计目标、静态图或设定卡写成已实现能力。
- Pets的description只描述人设、性格和形象设计，保持云端与本地pet.json一致；动画帧数、注视方向、安装及用途归技术说明，不写进角色描述。
- bin为npx产品入口，src维护安装逻辑，package.json维护版本与分发白名单；下载与安装规则见docs/01-下载与安装.md。安装到本地pets目录不等于同步网页云收藏，不改变活动宠物，不覆盖用户已有不同内容。
- 本地工作区中，本仓库与../voira-server为同级独立Git仓库；共享原素材位于../public，GitHub仓库名分别为voira-pet与voira。文章Markdown和Word原稿归articles，不放工作区或服务端根目录。
- 正式素材位于public/characters/chibi/<角色>/，master.png为透明立绘，card.png为设定卡。未经授权不覆盖原图；Pets成品位于public/pets/<角色>/；候选、源条带、检查报告与过程产物放被忽略的output或.local。
- 角色名不等于同名AI服务接入。宠物制作与导入遵循Pets插件的create-pet流程及当前精灵图契约，不自动扩展为独立桌宠程序或继承Voira网页业务范围。
- 保留并行改动和秘密；只提交本任务范围。提交标题使用type(scope): 简洁中文说明，type与scope小写；仅按用户授权提交、推送或发布。
