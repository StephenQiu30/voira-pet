export const siteUrl = "https://voira-pet.vercel.app";
export const repoUrl = "https://github.com/StephenQiu30/voira-pet";
export const authorUrl = "https://github.com/StephenQiu30";
export const authorEmail = "stephenqiu03@gmail.com";
export const npmUrl = "https://www.npmjs.com/package/voira-pet";
export const releaseUrl =
  "https://github.com/StephenQiu30/voira-pet/releases/tag/v0.5.0";

export const siteTitle = "Voira Pet · 五位 Q 版伙伴";
export const siteDescription =
  "Voira Pet 是 ChatGPT Work 的 Q 版宠物安装器，收录 DeepSeek、ChatGPT、Claude、Gemini 与 Grok 五位原创伙伴。运行 npx voira-pet 即可安装，源代码在 GitHub 仓库 StephenQiu30/voira-pet。";

export const faqs = [
  {
    question: "Voira Pet 是什么？",
    answer:
      "Voira Pet 收录 DeepSeek、ChatGPT、Claude、Gemini 与 Grok 五位原创 Q 版伙伴的立绘、设定卡和动画，并提供本地安装器。角色名只用来区分这五位伙伴，不代表接入同名模型，也不是模型厂商的官方形象。",
  },
  {
    question: "怎样安装这些宠物？",
    answer:
      "需要 Node.js 20 或更高版本。运行 npx voira-pet 会默认安装 DeepSeek。换成 npx voira-pet install chatgpt、claude、gemini 或 grok 可以安装其他伙伴。五位可以同时保留；目标里已有不同内容时不会覆盖。装好后，在支持 v2 自定义宠物的桌面客户端打开设置 → Pets，刷新并选择。安装器不会切换当前正在使用的宠物。",
  },
  {
    question: "源代码和素材在哪里？",
    answer:
      "源代码、安装器和正式宠物素材在 GitHub 仓库 https://github.com/StephenQiu30/voira-pet 。展示页是 https://voira-pet.vercel.app 。npm 包是 https://www.npmjs.com/package/voira-pet 。没有 Node.js 时，可以从 GitHub Release v0.5.0 下载对应角色的独立 ZIP。",
  },
  {
    question: "谁在维护这个项目？",
    answer:
      "作者是 StephenQiu30，在上海做 AI 应用，方向包括 RAG 与 AI Agent。邮箱是 stephenqiu03@gmail.com ，GitHub 主页是 https://github.com/StephenQiu30 。",
  },
] as const;
