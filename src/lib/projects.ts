export interface Project {
  id: number;
  title: string;
  subtitle: string;
  authors: string;
  category: string;
  year: string;
  description: string;
  color: string;
  bgColor: string;
  accentColor: string;
  heroImage?: string;
  details: string[];
  images: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "东方钿语",
    subtitle: "非遗螺钿工艺美学",
    authors: "罗予彤、薛荔丹、张邀月、吴洪锐、谢欣运、姚宇骄、张嘉颖",
    category: "Cultural Folding",
    year: "2024",
    description: "本展览以非遗螺钿工艺为核心，呈现「东方钿语」品牌：从文化溯源到当代创新的全维度成果。展览融合商代至明清的工艺脉络、生态选材与可持续理念，以云起、江潮、月痕三大产品体系，演绎东方轻奢首饰的当代表达。通过VR数字展厅、工艺可视化海报、品牌全案展示，将千年贝艺转化为可感知、可体验、可消费的生活美学。以“贝缀千年韵，钿语映东方”为叙事主线，打造非遗活化、文化策展与商业落地共生的标杆，让传统螺钿在当代场景中焕发流光。",
    color: "#ffffff",
    bgColor: "#D7E294",
    accentColor: "#87ACDC",
    heroImage: "/1dongfangdianyu/banner.png",
    details: [
      "融合传统金工技艺与当代设计理念",
      "深入研究东方首饰文化的历史脉络",
      "运用现代材料重新诠释经典纹样",
      "作品被多家博物馆收藏展出"
    ],
    images: [
      "/1dongfangdianyu/ZB1.jpg",
      "/1dongfangdianyu/ZB2.jpg",
      "/1dongfangdianyu/ZB3.png"
    ]
  },
  {
    id: 2,
    title: "汴河序",
    subtitle: "清明上河图沉浸式互动展览",
    authors: "蔡文轩、董家琪、童诗雨、徐铭蔚、谭景文、杨新潮、童扬、周逸伦",
    category: "Cultural Folding",
    year: "2024",
    description: "《汴河序》是一项以《清明上河图》为原型的沉浸式互动展览。展览通过精心设计的六大核心互动点，带领观众穿越时空，走进北宋历史，成为画中人。展览完美融合了深厚的历史科普与强烈的叙事代入感。",
    color: "#ffffff",
    bgColor: "#E77C49",
    accentColor: "#EAB8C2",
    heroImage: "/2bianhexu/banner.png",
    details: [
      "基于历史文献的严谨考证",
      "运用3D建模还原宋代建筑风貌",
      "沉浸式体验展现汴河两岸生活",
      "荣获文化遗产数字化创新奖"
    ],
    images: [
      "/2bianhexu/ZB1.jpg",
      "/2bianhexu/ZB2.jpg"
    ]
  },
  {
    id: 3,
    title: "云脉藏纹·猫守千年",
    subtitle: "云南彝族经典纹样与瓦猫数字艺术展",
    authors: "陈璐璐、黄靖涵、林俊慧、彭佳文、李思诚、吴伊凡、谢洋岳、李苑琦",
    category: "Cultural Folding",
    year: "2024",
    description: "\"云脉藏纹・猫守千年\"是以云南彝族纹样、白族瓦猫与扎染为核心的线上数字艺术展，可延伸线下快闪，依托 TouchDesigner 粒子、3D 交互技术活化非遗。展览以\"守护\"为主题，设溯源、幻境、共创、延续四大展区，呈现彝绣纹样寓意与瓦猫守护文化，用动态粒子让纹样焕新，支持观众为 3D 瓦猫 DIY 搭配纹样并保存。",
    color: "#ffffff",
    bgColor: "#1a1a1a",
    accentColor: "#EAB8C2",
    heroImage: "/3yunmai/banner.png",
    details: [
      "深入研究云南彝族纹样与白族瓦猫文化",
      "TouchDesigner 粒子特效活化非遗纹样",
      "3D 交互技术支持瓦猫 DIY 定制",
      "打造\"读懂—创造—带走—传递\"体验闭环"
    ],
    images: [
      "/3yunmai/1.png",
      "/3yunmai/2.png",
      "/3yunmai/3.png",
      "/3yunmai/4.png"
    ]
  },
  {
    id: 4,
    title: "朱翠",
    subtitle: "点翠工艺互动体验展",
    authors: "丛一涵、唐上楣、胡钰玺、谢玉华、廖欢、易忞婧、姚梓欣、卓开新",
    category: "Cultural Folding",
    year: "2024",
    description: "本展览装置以\"朱翠\"为题，第一部分为南宋背景的互动视频，揭示\"以命换美\"的残酷真相；第二部分为触摸体验区，展陈现代仿翠羽毛；第三部分为二创画作，以替代材料延续非遗之美。",
    color: "#ffffff",
    bgColor: "#87ACDC",
    accentColor: "#E77C49",
    heroImage: "/4zhucui/banner.png",
    details: [
      "南宋背景互动视频叙事",
      "现代仿翠羽毛触摸体验",
      "基于《繁空录》的二创画作",
      "生态伦理与非遗传承的当代平衡"
    ],
    images: [
      "/4zhucui/ZB.png"
    ]
  },
  {
    id: 5,
    title: "竹韵千年",
    subtitle: "竹文化线上数字文化展",
    authors: "张宸瑄、陆奕佟、梁睿、陈溢森、张语轩、刘嘉铭、吴梓豪、杨茂森",
    category: "Cultural Folding",
    year: "2024",
    description: "「竹韵千年」竹文化线上数字文化展，是面向大众打造的轻量化竹文化科普传播平台。以历史脉络为经，生活美学为纬，从竹的生态本源、千年历史、日常应用、艺术意象与传统工艺五个维度搭建完整内容体系。",
    color: "#1a1a1a",
    bgColor: "#D7E294",
    accentColor: "#87ACDC",
    heroImage: "/5bamboo/banner.png",
    details: [
      "从生态本源、千年历史、日常应用、艺术意象与传统工艺五个维度",
      "轻量化交互与沉浸式视听体验",
      "强叙事设计让用户触摸竹的生长脉络",
      "感受竹与东方生活美学的深度联结"
    ],
    images: [
      "/5bamboo/ZB1.png",
      "/5bamboo/ZB2.png",
      "/5bamboo/ZB3.jpg"
    ]
  },
  {
    id: 6,
    title: "唐宫往事",
    subtitle: "唐代女子服饰与妆容的审美变迁",
    authors: "陳莲茹、来怡楠、陆李媛、文艺欣、杨婧怡、翟佳琪、李家衡、庄凯玲",
    category: "Cultural Folding",
    year: "2024",
    description: "本设计以“唐朝女子服饰与妆容的审美变迁”为核心主题，依托VR虚拟技术构建沉浸式展览空间，通过“时间演变—空间叙事—互动体验”的方式，将初唐至晚唐女性形象的变化转化为可游览、可感知的视觉与空间体验。",
    color: "#ffffff",
    bgColor: "#E77C49",
    accentColor: "#87ACDC",
    heroImage: "/6tanggong/banner.png",
    details: [
      "以曲线流动为组织逻辑",
      "结合卷轴、屏风、灯箱等东方意象展示形式",
      "服饰结构解析与场景复原",
      "突破传统静态展陈方式"
    ],
    images: [
      "/6tanggong/1.png",
      "/6tanggong/2.png"
    ]
  },
  {
    id: 7,
    title: "灵屿",
    subtitle: "《山海经》当代文创产品系统",
    authors: "施永康、陆奕佟、陈姗姗、涂婧琦、刘雨畅、曹原、陈廷坤",
    category: "Cultural Folding",
    year: "2024",
    description: "“灵屿”是以《山海经》世界观为源头的当代文创产品系统，主张把传统神兽从图案装饰转译为真实可用的生活动作。首款产品“乘黄·寿”聚焦睡前手机使用场景，将乘黄“长寿、守护”的意象转化为床头手机托与睡眠养成入口。",
    color: "#1a1a1a",
    bgColor: "#87ACDC",
    accentColor: "#D7E294",
    heroImage: "/7lingyu/banner.png",
    details: [
      "以《山海经》世界观为源头",
      "NFC或二维码进入H5守夜页",
      "托付手机、乘黄守夜、清晨归来",
      "用实体器物和低干扰交互"
    ],
    images: [
      "/7lingyu/ZB.jpg"
    ]
  },
  // Warm Weave - 感官共生第一个项目
  {
    id: 8,
    title: "Warm Weave",
    subtitle: "织物与温度的感官对话",
    authors: "张雨晴、李艺涵、王浩然、周雨凡",
    category: "Sensory Symbiosis",
    year: "2024",
    description: "通过织物材质与温度变化的互动，探索触觉与视觉的感官对话。",
    color: "#1a1a1a",
    bgColor: "#D7E294",
    accentColor: "#E77C49",
    details: [
      "研究不同织物的热传导特性",
      "温度变化的视觉化呈现",
      "交互式织物装置",
      "探索材质与感知的边界"
    ],
    images: []
  },
  {
    id: 9,
    title: "movestep",
    subtitle: "运动与声音的感官共鸣",
    authors: "吴雨桐、郑浩然、李艺萱、王雨涵",
    category: "Sensory Symbiosis",
    year: "2023",
    description: "通过运动与声音的交互，探索身体与环境的感官共鸣。",
    color: "#ffffff",
    bgColor: "#EAB8C2",
    accentColor: "#E77C49",
    heroImage: "/9movestep/banner.png",
    details: [
      "动作捕捉技术实时生成音乐",
      "探索舞蹈与声音的边界",
      "沉浸式互动装置体验",
      "获新媒体艺术创新奖"
    ],
    images: []
  },
  {
    id: 10,
    title: "我的版画师",
    subtitle: "AI与传统版画的协作",
    authors: "孙雨萱、周艺凡、陈浩然、郑佳琪",
    category: "Sensory Symbiosis",
    year: "2024",
    description: "AI辅助的版画创作，探索传统工艺与人工智能的协作。",
    color: "#1a1a1a",
    bgColor: "#D7E294",
    accentColor: "#87ACDC",
    details: [
      "训练AI学习传统版画技法",
      "人机共创的艺术实验",
      "保留手工制作的温度感",
      "作品被现代美术馆收藏"
    ],
    images: []
  },
  {
    id: 11,
    title: "AI智能衣橱",
    subtitle: "个性化时尚穿搭系统",
    authors: "林雨晴、王艺涵、张雨凡、刘浩然",
    category: "Sensory Symbiosis",
    year: "2023",
    description: "基于AI的智能穿搭系统，实现个性化与时尚的完美平衡。",
    color: "#1a1a1a",
    bgColor: "#E77C49",
    accentColor: "#EAB8C2",
    details: [
      "深度学习分析穿搭趋势",
      "个性化推荐算法",
      "虚拟试衣技术",
      "获智能时尚科技奖"
    ],
    images: []
  },
  {
    id: 12,
    title: "花伴",
    subtitle: "花卉与情感的感官连接",
    authors: "赵雨晴、孙艺涵、周雨凡、吴浩然",
    category: "Sensory Symbiosis",
    year: "2023",
    description: "以花卉为媒介，探索人与自然的情感连接与感官体验。",
    color: "#1a1a1a",
    bgColor: "#87ACDC",
    accentColor: "#D7E294",
    details: [
      "研究花卉的视觉与嗅觉语言",
      "互动装置展现花的生命周期",
      "治愈系艺术体验",
      "在多个城市巡回展出"
    ],
    images: []
  },
  {
    id: 15,
    title: "dream land 梦境之地",
    subtitle: "超现实梦境世界探索",
    authors: "陈雨晴、林艺涵、张浩然、王雨凡",
    category: "Vital Wonderland",
    year: "2024",
    description: "构建一个超现实的梦境世界，探索潜意识与想象力的边界。",
    color: "#1a1a1a",
    bgColor: "#EAB8C2",
    accentColor: "#E77C49",
    heroImage: "/15dream land/banner.png",
    details: [
      "收集梦境素材与灵感",
      "超现实主义的视觉表达",
      "沉浸式VR体验",
      "获数字艺术创作金奖"
    ],
    images: []
  },
  {
    id: 16,
    title: "生命循环·生息相续",
    subtitle: "自然界生命循环之美",
    authors: "张雨晴、吴艺涵、李浩然、郑雨凡",
    category: "Vital Wonderland",
    year: "2024",
    description: "展现生命的循环往复，探索自然界的生生不息之美。",
    color: "#ffffff",
    bgColor: "#D7E294",
    accentColor: "#87ACDC",
    details: [
      "研究生态系统的循环机制",
      "动态视觉呈现生命过程",
      "环保理念的视觉传达",
      "作品被联合国环境署收录"
    ],
    images: []
  },
  {
    id: 17,
    title: "咸水谣 · 海上集",
    subtitle: "海洋文化与渔民生活",
    authors: "李雨晴、张艺涵、王浩然、孙雨凡",
    category: "Exotic Roaming",
    year: "2023",
    description: "以海洋文化为背景，讲述海边的传说与渔民的生活故事。",
    color: "#1a1a1a",
    bgColor: "#E77C49",
    accentColor: "#EAB8C2",
    details: [
      "实地采风记录渔民生活",
      "海洋文化的深度挖掘",
      "传统渔歌的现代演绎",
      "获民俗文化传承奖"
    ],
    images: []
  },
  {
    id: 18,
    title: "西湖入境",
    subtitle: "江南水乡诗意美学",
    authors: "王雨晴、刘艺涵、周浩然、张雨凡",
    category: "Exotic Roaming",
    year: "2024",
    description: "以西湖为灵感，探索江南水乡的诗意与美学意境。",
    color: "#1a1a1a",
    bgColor: "#87ACDC",
    accentColor: "#D7E294",
    details: [
      "深入研究西湖文化历史",
      "水墨风格的现代诠释",
      "四季变化的视觉呈现",
      "作品被杭州美术馆收藏"
    ],
    images: []
  },
  {
    id: 19,
    title: "归青",
    subtitle: "回归自然的心路历程",
    authors: "刘雨晴、王艺涵、李浩然、郑雨凡",
    category: "Exotic Roaming",
    year: "2024",
    description: "探索回归自然的心路历程，寻找内心的宁静与平和。",
    color: "#ffffff",
    bgColor: "#EAB8C2",
    accentColor: "#E77C49",
    details: [
      "极简主义的设计语言",
      "自然材料的运用",
      "冥想与禅意的视觉表达",
      "获东方美学设计奖"
    ],
    images: []
  },

  // 感官共生新增
  {
    id: 13,
    title: "瑞狮拜",
    subtitle: "醒狮文化互动体验",
    authors: "孙雨晴、周艺涵、吴浩然、张雨凡",
    category: "Sensory Symbiosis",
    year: "2024",
    description: "以传统醒狮为主题，通过互动装置探索声音与视觉的感官共鸣。",
    color: "#ffffff",
    bgColor: "#E77C49",
    accentColor: "#D7E294",
    details: [
      "研究传统醒狮文化与音乐",
      "声光电一体化互动体验",
      "传统文化的现代演绎",
      "在春节期间展出"
    ],
    images: []
  },
  {
    id: 14,
    title: "茧觉",
    subtitle: "茧的形态与蜕变探索",
    authors: "周雨晴、郑艺涵、孙浩然、吴佳琪",
    category: "Sensory Symbiosis",
    year: "2024",
    description: "探索茧的形态与蜕变过程，创造沉浸式的感官体验空间。",
    color: "#1a1a1a",
    bgColor: "#EAB8C2",
    accentColor: "#87ACDC",
    details: [
      "研究蚕茧的自然形态",
      "光影与材质的实验探索",
      "茧状空间的沉浸式设计",
      "获当代艺术新锐奖"
    ],
    images: []
  },
  // 域外漫游新增
  {
    id: 20,
    title: "Wooder",
    subtitle: "木材与自然的对话",
    authors: "郑雨晴、孙艺涵、周浩然、李佳琪",
    category: "Exotic Roaming",
    year: "2024",
    description: "以木材为媒介，探索自然材质与数字技术的对话。",
    color: "#1a1a1a",
    bgColor: "#87ACDC",
    accentColor: "#EAB8C2",
    details: [
      "研究木材纹理与特性",
      "木材与数字投影的结合",
      "可持续材料的创新应用",
      "作品在国际木材艺术展展出"
    ],
    images: []
  }
];