# GEO + SEO 完整项目 Prompt

> **怎么用：** 整段复制给任何一个 AI 编码助手 / 设计代理 / 工程团队。它是一份"项目定义文档（PRD）"，不是对话。
> 替换 `[品牌名]` `[域名]` `[目标国家]` `[目标语言]` 后即可直接开工。
> 既适用于全新项目，也适用于在现有站点上做 GEO 改造。

---

## 0 · 项目背景（Project Brief）

我们要为 **[品牌名]** 做一个**国际化的官方网站**，所属行业是 **高端 [行业，如：自行车 / 手表 / 服装 / 家具 / 皮具 / 酒]**。

这是一个**营销型品牌官网**，不是电商商城、不是 SaaS 产品页。它需要：

1. 强大的**视觉表达力**——访客 5 秒内形成"高端品牌"的判断
2. **SEO 友好**——在 Google / Bing 自然搜索里有排名
3. **GEO 友好**——内容能被 ChatGPT Search、Perplexity、Google AI Overview、Gemini、Claude 等 AI 搜索引擎**直接引用**进它们的答案里
4. **性能优先**——Lighthouse Mobile 90+，LCP < 2.5s
5. **多语言**——至少英文 + 中文（可扩展更多）
6. **CMS 友好**——后期市场团队可独立更新内容，不需要开发介入

**目标国家 / 市场：** [如：美国、德国、日本、中国大陆]
**主品牌语言：** 英文（中文作为补充）
**目标预算：** [如：$30k - $80k]
**上线时间：** [如：3 个月]

---

## 1 · 设计原则（Design Principles）

### 1.1 视觉方向（不要做平庸事）

```
DO:
  - 极简排版，留白克制
  - 大字号 / Editorial 字体 / 电影感
  - 高质量摄影或专业插画
  - 暗调背景 + 单一品牌色
  - 慢速、精确、电影感的动效
  - 真实材质感（木、金属、皮革、玻璃、石材）

DON'T:
  - 廉价渐变（蓝紫、科技感蓝）
  - 圆角堆砌 / SaaS 卡片网格
  - 通用 stock photo
  - "现代 SaaS 网站" 模板感
  - 无意义旋转 / 弹跳 / 闪烁
  - 装饰性 emoji / icon 滥用
```

### 1.2 设计参考（气质，不复制）

- 高端汽车 / 高端腕表 / 高级时装品牌官网
- Awwwards / FWA 获奖站
- Apple、Bang & Olufsen、Aesop、Polestar、Patagonia 的**编辑型**叙事节奏

### 1.3 字体系统（Editorial Typography）

```
Display:     一个有态度的 Sans-Serif 或 Italic Serif（如：Söhne Breit、GT Sectra、Editorial New）
Body:        一个克制的 Sans-Serif（如：Inter、Suisse Int'l、Untitled Sans）
Mono:        一个数据感的等宽（如：JetBrains Mono、IBM Plex Mono）

规则：
  - Display 字号巨大、字重极重（800-900）
  - Body 行宽 ≤ 60 字符
  - Mono 只用于数字 / 参数 / 技术规格
  - 必须自托管（避免 Google Fonts CDN 影响 LCP 与 GEO 区域）
  - 包含中文时同步加载 Source Han Sans / Noto Sans SC 子集
```

---

## 2 · 必备技术栈（Mandatory Stack）

### 2.1 前端
```
框架:        Next.js 14+ (App Router) 或 Nuxt 3
语言:        TypeScript (strict)
样式:        Vanilla CSS + CSS Modules 或 PostCSS（首选）
             备选: Tailwind CSS（仅当团队有强偏好时）
构建:        静态生成 (SSG) + 增量静态再生 (ISR)
部署:        Vercel / Netlify / Cloudflare Pages
包管理:      pnpm
```

### 2.2 内容
```
CMS:         Sanity / Contentful / Strapi（任选一）
             后期市场团队能独立编辑文章、产品、FAQ
Markdown:    MDX 支持（让作者在 markdown 里嵌入 React 组件）
图片:        Cloudinary 或 imgix（自动 AVIF + responsive + LQIP）
```

### 2.3 数据 / 分析
```
Analytics:   Plausible 或 Fathom（隐私友好）
             不使用 Google Analytics（GDPR + 性能）
Heatmap:     Hotjar 或 Microsoft Clarity（可选）
Sitemap:     next-sitemap 或 @nuxtjs/sitemap
```

---

## 5 · 传统 SEO 必须做（SEO Checklist — 全量）

> **全部项目都要交付。**不交付则视为项目未完成。

### 5.1 技术 SEO

```
[ ] 全站 HTTPS（强制 HSTS）
[ ] 强制 www 或非 www（择一，301 重定向）
[ ] 自定义 404 / 500 页面（包含返回首页 + 搜索框）
[ ] XML Sitemap 自动生成（含 lastmod / priority / changefreq）
[ ] Sitemap 按内容类型分文件（sitemap-products.xml / sitemap-articles.xml / sitemap-static.xml）
[ ] Sitemap Index 提交到 Google Search Console + Bing Webmaster
[ ] robots.txt 部署（见 §4.4）
[ ] 启用 Gzip / Brotli 压缩
[ ] 启用 HTTP/2 或 HTTP/3
[ ] 图片 AVIF 格式 + 多分辨率 + lazy load
[ ] 字体自托管 + font-display: swap + preload 关键字体
[ ] Core Web Vitals：LCP < 2.5s / INP < 200ms / CLS < 0.1
[ ] Mobile-friendly（移动端 100% 可用）
[ ] 结构化数据测试通过（Schema.org Validator）
[ ] hreflang 完整（每页 + 每片各语言版本互链）
[ ] Canonical URL 每页一个
[ ] Meta robots 标签正确（noindex 列表分页等）
[ ] Open Graph + Twitter Card 全套（见 §4.3）
[ ] 面包屑导航 + BreadcrumbList schema
```

### 5.2 内容 SEO

```
[ ] 每页一个 H1，含主关键词
[ ] 标题层级严格（H1 → H2 → H3，不跳级）
[ ] Title Tag：50-60 字符，含品牌
[ ] Meta Description：140-160 字符，含 CTA 关键词
[ ] URL slug：英文、短、含关键词、kebab-case
[ ] 图片 Alt：描述性 + 含关键词（不要 "image1.jpg"）
[ ] 内链：相关文章、产品、品类互链，3-5 条/页
[ ] 外链：至少 2 条权威外链（媒体 / 行业报告）
[ ] FAQ / How-to 内容（FAQPage schema）
[ ] 关键词研究：每页 1 个主关键词 + 3-5 个长尾
[ ] 内容新鲜度：所有文章带 datePublished + dateModified
[ ] 作者权威：每篇文章有 author bio + 链接到 LinkedIn / 个人页
```

### 5.3 站外 SEO

```
[ ] Google Search Console 注册 + 提交 sitemap
[ ] Bing Webmaster Tools 注册 + 提交 sitemap
[ ] Yandex Webmaster（如果做俄罗斯市场）
[ ] Baidu 站长工具（如果做中国市场）
[ ] 百度站长平台 sitemap 提交（注意：百度 sitemap 协议不同）
[ ] 外链建设：行业媒体、评测、KOL
[ ] 品牌词 SERP 监控
[ ] 关键词排名周报
```

### 5.4 本地 SEO（如有线下）

```
[ ] Google Business Profile 注册
[ ] Bing Places 注册
[ ] 所有经销商页面含 LocalBusiness schema（geo + address + openingHours）
[ ] NAP（Name / Address / Phone）一致性
[ ] 评论管理（Google Reviews / Trustpilot）
```

---

## 4 · GEO 必须做（GEO Checklist — 全量）

> **GEO = 让 AI 搜索引擎直接引用你的内容。**
> **所有项目都要交付。**

### 4.1 llms.txt（必须部署）

**位置：** `https://[域名]/llms.txt`
**规范：** https://llmstxt.org
**格式：**

```markdown
# [品牌名]

> [一句话品牌定位]
> [第二个事实型陈述]
> [第三个事实型陈述]

## Products
- [AETHON ONE](https://[域名]/products/one): High-performance carbon road bike. 6.8 kg. T1100 frame. €18,400.
- [AETHON TWO](https://[域名]/products/two): Endurance model. ...

## Brand
- [About](https://[域名]/about): Founded in [year]. Based in [city, country].
- [Philosophy](https://[域名]/philosophy): "Speed, distilled."

## Engineering
- [Frame technology](https://[域名]/engineering/frame): T1100 carbon layup process.
- [Wind tunnel data](https://[域名]/engineering/wind-tunnel): 0.27 CdA, third-party verified.

## Journal
- [Inside the wind tunnel](https://[域名]/journal/wind-tunnel): 412 iterations. 3 months.
- [200 hours in the saddle](https://[域名]/journal/200-hours): ...

## Dealers
- Milan, Italy · [list with addresses]

## Contact
- Email: ...
- Press: ...

## Optional
- [FAQ](https://[域名]/faq)
- [Press kit](https://[域名]/press)
```

### 4.2 Schema.org JSON-LD（必须部署）

> 所有页面都必须有结构化数据。用 JSON-LD 格式，部署在 `<head>`。

#### 4.2.1 全站首页（Homepage）
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://[域名]/#organization",
  "name": "[品牌名]",
  "alternateName": "[品牌中文名]",
  "url": "https://[域名]",
  "logo": "https://[域名]/logo.png",
  "description": "[品牌定位陈述]",
  "foundingDate": "[年-月-日]",
  "founder": { "@type": "Person", "name": "[创始人]" },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[街道]",
    "addressLocality": "[城市]",
    "postalCode": "[邮编]",
    "addressCountry": "[国家代码 ISO 3166-1 alpha-2]"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "[电话]",
    "contactType": "customer service",
    "areaServed": ["US", "DE", ...],
    "availableLanguage": ["en", "zh"]
  },
  "sameAs": [
    "https://instagram.com/[handle]",
    "https://youtube.com/@[handle]",
    "https://linkedin.com/company/[handle]"
  ],
  "brand": { "@type": "Brand", "name": "[品牌名]" }
}
```

#### 4.2.2 产品页（每个 SKU 一个 Product schema）
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://[域名]/products/[slug]#product",
  "name": "[AETHON ONE]",
  "image": ["https://[域名]/products/one-1.jpg"],
  "description": "[150 字产品描述，含技术参数]",
  "brand": { "@type": "Brand", "name": "[品牌名]" },
  "manufacturer": { "@id": "https://[域名]/#organization" },
  "category": "[品类]",
  "sku": "[SKU]",
  "mpn": "[MPN]",
  "material": "T1100 Carbon Fiber",
  "weight": { "@type": "QuantitativeValue", "value": 6.8, "unitCode": "KGM" },
  "offers": {
    "@type": "Offer",
    "url": "https://[域名]/products/[slug]",
    "priceCurrency": "EUR",
    "price": "18400",
    "priceValidUntil": "2027-12-31",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition",
    "seller": { "@id": "https://[域名]/#organization" }
  },
  "additionalProperty": [
    { "@type": "PropertyValue", "name": "Frame stiffness", "value": "49 N/m/deg" },
    { "@type": "PropertyValue", "name": "Drag coefficient", "value": "0.27 CdA" }
  ]
}
```

#### 4.2.3 文章页（每个 Journal 文章）
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://[域名]/journal/[slug]#article",
  "headline": "[标题]",
  "description": "[副标]",
  "image": ["https://[域名]/journal/[slug]/og.jpg"],
  "datePublished": "2026-04-15T08:00:00+02:00",
  "dateModified": "2026-09-20T14:00:00+02:00",
  "author": {
    "@type": "Person",
    "name": "[作者名]",
    "url": "https://linkedin.com/in/[author]",
    "jobTitle": "[职位]"
  },
  "publisher": { "@id": "https://[域名]/#organization" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://[域名]/journal/[slug]" },
  "articleSection": "[分类]",
  "wordCount": 2500,
  "inLanguage": "en-US"
}
```

#### 4.2.4 经销商页（每个 Dealer 一个 LocalBusiness）
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://[域名]/dealers/[city]#business",
  "name": "[品牌名] [城市]",
  "image": "https://[域名]/dealers/[city].jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[街道]",
    "addressLocality": "[城市]",
    "postalCode": "[邮编]",
    "addressCountry": "[国家代码]"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": [数字],
    "longitude": [数字]
  },
  "telephone": "[电话]",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "10:00",
      "closes": "19:00"
    }
  ],
  "priceRange": "€€€€",
  "parentOrganization": { "@id": "https://[域名]/#organization" }
}
```

#### 4.2.5 FAQ 页
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[问题 1]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[回答，含具体数字]"
      }
    }
  ]
}
```

#### 4.2.6 面包屑
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://[域名]" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://[域名]/products" },
    { "@type": "ListItem", "position": 3, "name": "[AETHON ONE]", "item": "https://[域名]/products/one" }
  ]
}
```

#### 4.2.7 品牌宣言（可选 Claim schema）
```json
{
  "@context": "https://schema.org",
  "@type": "Claim",
  "claimInterpreter": { "@id": "https://[域名]/#organization" },
  "text": "Speed, distilled.",
  "appearance": { "@type": "CreativeWork", "name": "Brand Philosophy" }
}
```

### 4.3 Open Graph + Twitter Card（必须）

```
[ ] og:type             （website / article / product）
[ ] og:title            （60 字符内）
[ ] og:description      （120-160 字符）
[ ] og:image            （1200×630，< 200KB WebP）
[ ] og:url              （canonical）
[ ] og:site_name        （品牌名）
[ ] og:locale           （en_US）
[ ] og:locale:alternate （zh_CN 等）
[ ] article:published_time  （文章页）
[ ] article:author             （文章页）
[ ] article:section            （文章页）
[ ] twitter:card        （summary_large_image）
[ ] twitter:site        （@handle）
[ ] twitter:creator     （@author）
[ ] twitter:title       （60 字符）
[ ] twitter:description （200 字符）
[ ] twitter:image       （1200×675）
```

### 4.4 robots.txt（必须部署）

**位置：** `https://[域名]/robots.txt`

```txt
# Allow all major crawlers
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /preview/
Disallow: /*?*sort=
Disallow: /*?*filter=
Disallow: /*?*page=  (allow first pagination)

# AI Bots — explicitly welcome (GEO)
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: CCBot
Allow: /

User-agent: Amazonbot
Allow: /

# Sitemaps
Sitemap: https://[域名]/sitemap.xml
Sitemap: https://[域名]/sitemap-products.xml
Sitemap: https://[域名]/sitemap-articles.xml
```

### 4.5 语义化 HTML 规则

```
<article>          包裹每一篇 journal / case study
<section>          包裹每个 page section（不要 div 代替）
<header>           页面或 section 头部
<nav>              所有导航
<main>             页面主体
<footer>           页脚
<aside>            侧边栏
<time datetime="ISO8601">  所有日期
<address>             必须封装经销商地址
<dl> <dt> <dd>   参数列表
<figure> <figcaption>  所有图片
<table>            真实表格数据（不要 div 模拟）
<blockquote>       长引用
<cite>             引用来源
```

### 4.6 内容写作规则（EEAT 信号）

**E - Experience**（经验）
- 工艺 / 工厂 / 工匠 / 测试过程的细节
- 第一人称叙述

**E - Expertise**（专业）
- 技术参数的精确单位（kg / N/m/deg / CdA / 等）
- 工程师签名 / 设计师署名
- 引用第三方测试报告（Cologne 风洞 / ISO 标准）

**A - Authoritativeness**（权威）
- 媒体引用（Bloomberg / Monocle / Wallpaper*）
- 行业奖项（红点 / iF / Good Design）
- 创始人 / 设计总监的 LinkedIn / 个人网站链接

**T - Trust**（信任）
- 每篇文章带 `datePublished` + `dateModified`
- 作者 bio + 头像
- 联系方式真实可达
- 评论 / 媒体背书可点击验证
- 退货 / 保修政策清晰

### 4.7 GEO 内容自适应（Fact-Centric Content）

**每个 page 必须有：**
- 一个可被引用的"事实型陈述"——具体数字 + 单位 + 来源
- 一个或多个"问题 + 答案"对（FAQ 风格），用 FAQPage schema 标记

**反例：**
```
❌ "Our bike is fast."
❌ "We use the best materials."
❌ "Engineered for performance."
```

**正例：**
```
✓ "Measured 0.27 CdA in the Cologne wind tunnel at 45 km/h, third-party verified."
✓ "T1100 carbon fiber, 780g frame, three-year warranty."
✓ "AETHON ONE weighs 6.8 kg including paint. ISO 4210-6 tested."
```

### 4.8 多语言 GEO

```
[ ] hreflang 完整（每个页面所有语言版本互链）
[ ] x-default 指向英文或主语言
[ ] llms.txt 多语言版本（/llms.txt /zh/llms.txt）
[ ] Schema.org inLanguage 字段
[ ] 内容本地化（不只翻译，地区化）
```

### 4.9 GEO 监控

```
[ ] 每月查询 ChatGPT / Perplexity / Google AI Overview / Gemini 中是否引用品牌
[ ] 跟踪 "best [品类] brand" 类型查询的 AI 回答
[ ] 监控 llms.txt 是否被 AI 引用（看 server log）
[ ] 设置品牌提及监控（Brand24 / Mention）
[ ] AI 引用率季度报告
```

---

## 3 · 项目交付清单（Deliverables）

### 3.1 设计阶段
```
[ ] Brand Mood Board（图片情绪板）
[ ] Design System（Figma：色彩 / 字体 / 组件）
[ ] 高保真视觉稿（桌面 + 平板 + 手机 三套）
[ ] Micro-interaction Spec（动效规范）
[ ] 文案 Copy Deck（中英双版）
[ ] 摄影 Art Direction（如需实拍）
```

### 3.2 开发阶段
```
[ ] 仓库初始化（Git + .gitignore + README + LICENSE）
[ ] CI/CD（GitHub Actions：typecheck / lint / test / build / deploy）
[ ] 开发环境（pnpm dev 可用，hot reload）
[ ] 预生产环境（preview deploy 每 PR）
[ ] 生产环境（Vercel / Netlify 部署）
[ ] 监控（Lighthouse CI / Sentry / Plausible）
```

### 3.3 内容资产
```
[ ] llms.txt（英文 + 中文）
[ ] robots.txt
[ ] sitemap.xml（自动生成）
[ ] sitemap-products.xml
[ ] sitemap-articles.xml
[ ] manifest.json（PWA 可选）
[ ] humans.txt
[ ] security.txt
[ ] favicon / apple-touch-icon / og-image
```

### 3.4 Schema.org 部署
```
[ ] Organization（首页）
[ ] Brand（首页）
[ ] Product × N（每个产品）
[ ] Offer × N（每个产品）
[ ] AggregateRating（如有评分）
[ ] Article × N（每篇 journal）
[ ] BreadcrumbList（全站）
[ ] LocalBusiness × N（每个经销商）
[ ] FAQPage（FAQ 页）
[ ] Claim（品牌宣言，可选）
[ ] Person × N（创始人 / 设计师 / 作者）
[ ] WebSite + SearchAction（站点搜索）
```

### 3.5 测试
```
[ ] Lighthouse ≥ 95（桌面）/ ≥ 90（移动）
[ ] Core Web Vitals 通过
[ ] Schema.org Validator 通过
[ ] Google Rich Results Test 通过
[ ] Mobile-Friendly Test 通过
[ ] 跨浏览器测试（Chrome / Safari / Firefox / Edge）
[ ] 多设备测试（iPhone / Android / iPad）
[ ] 无障碍测试（WAVE / axe DevTools，AA 级）
[ ] 慢网络测试（Slow 3G + 4G）
[ ] 多语言切换测试
```

---

## 6 · 预算分配建议

```
设计 (25%)        $7.5k - $20k    视觉 / 文案 / 摄影
前端 (35%)        $10.5k - $28k   Next.js / 组件库 / CMS 集成
内容 + SEO + GEO (20%)   $6k - $16k    文案 / Schema / llms.txt / 监控
后端 + 部署 (10%) $3k - $8k      CMS / API / 部署
测试 + 维护 (10%) $3k - $8k      QA / 性能 / 文档
```

---

## 7 · 验收标准（Definition of Done）

**只有满足以下全部条件，项目才算交付完成：**

```
□ 所有页面在桌面 / 平板 / 手机 三端正常渲染
□ Lighthouse 移动端 Performance ≥ 90 / SEO ≥ 95 / Best Practices ≥ 95 / A11y ≥ 95
□ Schema.org Validator 全部页面 0 error
□ Google Rich Results Test 通过（Product / Article / FAQ / LocalBusiness）
□ llms.txt 可访问且符合 llmstxt.org 规范
□ robots.txt 放行主要 AI 爬虫
□ 所有 sitemap 提交到 GSC + Bing Webmaster
□ 中文 / 英文双版本完整
□ 跨浏览器测试通过
□ CMS 内容更新流程跑通（市场团队能 1 人独立完成）
□ 监控 / 报警就绪
□ 文档齐全（README / DEPLOY / CONTENT_GUIDE / GEO_GUIDE）
```

---

## 8 · 附录 A — 项目目录结构建议

```
[品牌名]/
├── public/
│   ├── robots.txt
│   ├── llms.txt
│   ├── sitemap.xml
│   ├── manifest.json
│   ├── humans.txt
│   ├── security.txt
│   ├── og/                  OG 分享图（1200×630）
│   └── icons/               favicon / apple-touch
├── src/
│   ├── app/                 (Next.js App Router)
│   │   ├── [locale]/
│   │   │   ├── page.tsx     首页（含 Organization schema）
│   │   │   ├── products/
│   │   │   │   ├── page.tsx 产品列表
│   │   │   │   └── [slug]/page.tsx 产品详情（含 Product schema）
│   │   │   ├── journal/
│   │   │   │   └── [slug]/page.tsx 文章（含 Article schema）
│   │   │   ├── dealers/
│   │   │   │   └── [city]/page.tsx 经销商（含 LocalBusiness schema）
│   │   │   ├── faq/page.tsx FAQ（含 FAQPage schema）
│   │   │   ├── about/page.tsx
│   │   │   └── contact/page.tsx
│   │   ├── api/
│   │   └── layout.tsx       Root layout（含 WebSite schema）
│   ├── components/
│   ├── lib/
│   │   ├── seo/
│   │   │   ├── schema.ts    所有 Schema 构造器
│   │   │   ├── metadata.ts  Next.js Metadata API 包装
│   │   │   └── sitemap.ts   Sitemap 构造器
│   │   └── analytics/
│   ├── content/             MDX / MD 文章源
│   └── styles/
├── content/                 （如用本地 MDX，无 CMS 时）
│   ├── products/
│   ├── journal/
│   └── dealers/
├── tests/
│   ├── lighthouse/
│   ├── schema/
│   └── e2e/
├── .github/
│   └── workflows/
├── README.md
├── DEPLOY.md
├── CONTENT_GUIDE.md        （给市场团队）
└── GEO_GUIDE.md             （GEO 维护指南）
```

---

## 9 · 附录 B — 监控指标（KPI）

**SEO**
- 自然搜索流量（按月 / 按页面）
- 关键词排名（top 3 / top 10 关键词数）
- Domain Rating（Ahrefs）
- Backlinks 数与质量

**GEO**
- AI 搜索结果中的品牌被引用率（每月手动抽样 30 个查询）
- llms.txt 被 AI 引用的次数（server log）
- 关键事实陈述的 AI 引用率（3 个核心数字被引用的频率）
- Featured Snippet / AI Overview 收录数

**Conversion**
- Dealer locator 使用率
- 邮件订阅转化率
- Test ride 预约数（如有此功能）
- 配置器完成率（如有此功能）

---

## 10 · 附录 C — 工具清单（推荐）

```
SEO 审计:     Screaming Frog / Ahrefs / SEMrush
Lighthouse:   PageSpeed Insights / WebPageTest
Schema 测试:  Schema.org Validator / Google Rich Results Test
GEO 监控:     Perplexity + ChatGPT Search 手动抽样
             + brand24.com（关键词监控）
             + 自己做 dashboard（每月）
性能:         Bundlephobia / Vercel Analytics / Sentry
协作:         Linear / Notion / Figma
部署:         Vercel / Netlify / Cloudflare Pages
```

---

## 结语

**这个 prompt 是一份完整 PRD。** 直接复制发给任何人 / 任何 AI，对方都应能据此交付一份合格的"既传统 SEO 又有 GEO"的高端品牌官网。

如果你只需要给一个 AI 用，可以直接说"按 §0~§7 严格执行，输出最终交付物"。如果给团队用，加上 §8（目录结构）+ §10（工具清单）。