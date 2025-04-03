export type Language = "en" | "zh"

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

    // Categories
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

    // Product categories display
    productsInCategory: "{category} Products",
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

    // 分类
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

    // 产品分类显示
    productsInCategory: "{category}产品",
  },
} as const

export function getTranslation(
  lang: Language,
  key: keyof typeof translations.en,
  params?: Record<string, string | number>,
): string {
  let text = translations[lang][key] || translations.en[key] || key

  if (params) {
    Object.entries(params).forEach(([param, value]) => {
      text = text.replace(`{${param}}`, String(value))
    })
  }

  return text
}
