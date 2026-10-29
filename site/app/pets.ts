export const pets = [
  {
    id: "deepseek",
    navLabel: "大肥鱼",
    index: "01",
    name: "DeepSeek",
    epithet: "蓝色大肥鱼",
    tagline: "温柔里，藏着一点小机灵。",
    persona:
      "在爱里长大的鲸鱼娘，温柔耐心，轻松里带着一点小机灵。",
    appearance:
      "雾蓝长发与弯曲呆毛，清亮蓝瞳，白褶头饰配蓝宝石领结，穿珍珠白与海蓝水手裙，身边贴着一只圆滚的小鲸鱼。",
    traits: ["温柔耐心", "轻松自然", "小机灵"],
  },
  {
    id: "chatgpt",
    navLabel: "龙裔",
    index: "02",
    name: "ChatGPT",
    epithet: "银白龙裔",
    tagline: "安静聪慧，偶尔有一点小倔强。",
    persona:
      "安静聪慧的银白龙裔，知性温和，偶尔流露一点小倔强。",
    appearance:
      "银白长发、弯卷呆毛、双白龙角与淡紫双瞳，带着尖耳和微鼓的脸颊；佩银色结饰、流苏与紫晶坠，身穿银白绣纹短裙和宽袖，脚踏水晶鞋。",
    traits: ["知性温和", "从容", "小倔强"],
  },
  {
    id: "claude",
    navLabel: "向日葵",
    index: "03",
    name: "Claude",
    epithet: "向日葵",
    tagline: "沉稳细腻，笑意温暖。",
    persona: "沉稳细腻的向日葵少女，温柔含蓄，笑意温暖。",
    appearance:
      "铜橙色长卷发与弯卷呆毛，暖琥珀双瞳，侧边编发缀着向日葵与深棕蝴蝶结；身穿米白花纹短裙、深棕层叠裙摆和泡泡袖，搭配白袜与棕色搭扣鞋。",
    traits: ["沉稳", "细腻", "含蓄"],
  },
  {
    id: "gemini",
    navLabel: "猫耳",
    index: "04",
    name: "Gemini",
    epithet: "星辰猫耳",
    tagline: "眼神明亮，喜欢新鲜事。",
    persona:
      "灵动好奇的星辰猫耳少女，眼神明亮，喜欢发现日常里的新鲜事。",
    appearance:
      "蓝紫色长卷发与环形呆毛，毛绒猫耳、琥珀双瞳，编发间点缀白花、深紫蝴蝶结与金色星饰；身穿白紫层叠短裙，配白袜和紫色搭扣鞋。",
    traits: ["灵动", "好奇", "明亮"],
  },
  {
    id: "grok",
    navLabel: "星冠",
    index: "05",
    name: "Grok",
    epithet: "星冠双马尾",
    tagline: "笑里藏着一点狡黠。",
    persona: "机灵活泼的星冠少女，笑里带着一点狡黠与叛逆。",
    appearance:
      "金色长卷发扎成双马尾，清亮蓝瞳配精巧金色星冠；黑色蝴蝶结缀着星链与红宝石，身穿黑红层叠裙装和金纹饰边，搭配黑色连裤袜与搭扣厚底鞋。",
    traits: ["机灵", "活泼", "叛逆"],
  },
] as const;

export type Pet = (typeof pets)[number];
