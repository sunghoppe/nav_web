export type Language = 'en' | 'zh'

export const translations = {
  en: {
    // Navigation
    products: "Products",
    blog: "Blog",
    about: "About",
    community: "Community",
    resources: "Resources",
    github: "GitHub",
    signIn: "Sign in",
    
    // Products page
    productsTitle: "Products",
    productsDescription: "Explore the best products to help you ship next application faster and better",
    submitProduct: "Submit Product",
    noProducts: "No products found in this category.",
    more: "More",
    subcategories: "Subcategories",
    all: "All",
    
    // Main Categories
    new: "New",
    featured: "Featured",
    templates: "Templates",
    tools: "Tools",
    design: "Design",
    saas: "SaaS",
    cms: "CMS",
    openSource: "Open Source",
    free: "Free",
    hosting: "Hosting",
    framework: "Framework",
    domain: "Domain",
    database: "Database",
    monetization: "Monetization",
    learning: "Learning",
    community: "Community",
    
    // Sub Categories
    imageTools: "Image Tools",
    videoTools: "Video Tools",
    codeTools: "Code Tools",
    devTools: "Dev Tools",
    aiTools: "AI Tools",
    marketingTools: "Marketing Tools",
    uiKits: "UI Kits",
    icons: "Icons",
    illustrations: "Illustrations",
    fonts: "Fonts",
    mockups: "Mockups",
    analytics: "Analytics",
    marketing: "Marketing",
    productivity: "Productivity",
    communication: "Communication",
    finance: "Finance",
    landing: "Landing Pages",
    admin: "Admin Dashboards",
    ecommerce: "E-commerce",
    blog: "Blog",
    portfolio: "Portfolio",
    
    // Product badges
    freeLabel: "Free",
    openSourceLabel: "OpenSource",
    newLabel: "New",
    
    // Blog page
    blogTitle: "Blog",
    blogDescription: "Insights, tutorials, and news for indie developers and creators",
    backToBlog: "Back to Blog",
    
    // Footer
    footerDescription: "Indie Dev Hub - Explore the best products to help you ship next application faster and better",
    aboutSite: "About Site",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    features: "Features",
    links: "Links",
    copyright: "© {year} Indie Dev Hub. All rights reserved.",
  },
  zh: {
    // 导航
    products: "产品",
    blog: "博客",
    about: "关于",
    community: "社区",
    resources: "资源",
    github: "GitHub",
    signIn: "登录",
    
    // 产品页面
    productsTitle: "产品",
    productsDescription: "探索最佳产品，帮助您更快更好地开发应用",
    submitProduct: "提交产品",
    noProducts: "该分类下没有找到产品。",
    more: "更多",
    subcategories: "子分类",
    all: "全部",
    
    // 主分类
    new: "最新",
    featured: "精选",
    templates: "模板",
    tools: "工具",
    design: "设计",
    saas: "SaaS",
    cms: "内容管理",
    openSource: "开源",
    free: "免费",
    hosting: "托管",
    framework: "框架",
    domain: "域名",
    database: "数据库",
    monetization: "变现",
    learning: "学习",
    community: "社区",
    
    // 子分类
    imageTools: "图像工具",
    videoTools: "视频工具",
    codeTools: "代码工具",
    devTools: "开发工具",
    aiTools: "AI工具",
    marketingTools: "营销工具",
    uiKits: "UI套件",
    icons: "图标",
    illustrations: "插图",
    fonts: "字体",
    mockups: "样机",
    analytics: "分析",
    marketing: "营销",
    productivity: "生产力",
    communication: "通讯",
    finance: "财务",
    landing: "着陆页",
    admin: "管理仪表板",
    ecommerce: "电子商务",
    blog: "博客",
    portfolio: "作品集",
    
    // 产品标签
    freeLabel: "免费",
    openSourceLabel: "开源",
    newLabel: "新品",
    
    // 博客页面
    blogTitle: "博客",
    blogDescription: "为独立开发者和创作者提供的见解、教程和新闻",
    backToBlog: "返回博客",
    
    // 页脚
    footerDescription: "独立开发者中心 - 探索最佳产品，帮助您更快更好地开发应用",
    aboutSite: "关于网站",
    privacyPolicy: "隐私政策",
    termsOfService: "服务条款",
    features: "功能",
    links: "链接",
    copyright: "© {year} 独立开发者中心。保留所有权利。",
  }
} as const

export function getTranslation(lang: Language, key: keyof typeof translations.en, params?: Record<string, string | number>): string {
  let text = translations[lang][key] || translations.en[key] || key;
  
  if (params) {
    Object.entries(params).forEach(([param, value]) => {
      text = text.replace(`{${param}}`, String(value));
    });
  }
  
  return text;
}
