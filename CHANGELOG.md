# 更新记录

## 0.4.0 - 2026-10-27

### 新功能

- npm 安装器增加 `install gemini`，与 DeepSeek、ChatGPT、Claude 使用同样的命令，写入独立的 voira-gemini 目录。
- 发布 Gemini · 星辰猫耳 v2 宠物。
- GitHub Release v0.4.0 提供四位角色的独立 ZIP，以及与 npm 0.4.0 相同的 tgz。

## 0.3.0 - 2026-10-27

### 新功能

- npm 安装器增加 `install claude`，与 DeepSeek、ChatGPT 使用同样的命令，写入独立的 voira-claude 目录。
- 发布 Claude · 向日葵 v2 宠物。
- GitHub Release v0.3.0 提供三位角色的独立 ZIP，以及与 npm 0.3.0 相同的 tgz。

## 0.2.0 - 2026-10-27

### 新功能

- npm 安装可选 DeepSeek 或 ChatGPT。无参数时仍默认安装 DeepSeek；`install chatgpt` 安装到独立目录，不覆盖已有的另一位角色。
- 发布 ChatGPT · 银白龙裔 v2 宠物。

## 0.1.0 - 2026-10-27

### 新功能

- 发布DeepSeek · 蓝色大肥鱼v2宠物，含九种动画和十六个注视方向。
- 增加独立宠物ZIP和无依赖npx安装入口，支持CODEX_HOME与自定义安装目录。
- 提供npm公开分发入口，npx voira-pet默认安装DeepSeek。
- 安装前校验正式素材；重复安装保持原样，遇到内容冲突和目标符号链接时拒绝覆盖。

### 说明

- 本地安装用于桌面客户端，不自动同步网页端云收藏或切换活动宠物。
- ChatGPT、Claude、Gemini目前仍为静态形象素材。
