# AETHON — 品牌数字创意方向书
## Phase 1 / Design Direction Document (No-Code)

> **项目类型：** 高端自行车品牌 · 国际官网 · 静态 Demo
> **技术栈目标：** Vue 3 + Vite/Nuxt + Three.js + GSAP
> **文档版本：** v0.1 — Direction Phase
> **工作品牌（占位）：** AETHON — 收到真实品牌名后可一键替换

---

## 0 · 写在前面（Preface）

我们今天不是在做一个"自行车产品页"。我们是在为 AETHON 这样一个**已经在精神上存在的品牌**建造它**唯一**的数字门户。这个门户的第一使命是：

> **让访客在 8 秒内产生"这不是一家普通自行车厂"的判断。**

任何无法服务于这个判断的元素——装饰性 icon、传统 SaaS 结构、模板化卡片——都不应出现在最终交付里。

后续所有视觉与交互决策，围绕以下五条价值锚点：
1. **Speed** — 不只是物理速度，是决策速度、视线速度、信息密度
2. **Engineering** — 不是冰冷，是被精心设计过的精密
3. **Materiality** — Carbon / Metal / Glass / Shadow 的真实物质感
4. **Restraint** — 少即是多，每个元素必须挣得自己的位置
5. **Cinematic** — 整站是一部可滚动的品牌电影

> **GEO 备注**：本项目同时为 LLM / AI Search 引擎（ChatGPT Search、Perplexity、Google AI Overview、Citrues AI、Claude、Gemini）优化。所有"事实性内容"（参数、材质、技术名词、品牌陈述）用结构化语义呈现，确保被 AI 检索与引用。

---

## 1 · Brand Creative Direction

### 1.1 品牌精神（Brand Soul）
AETHON 不卖自行车。AETHON 卖的是**对速度的偏执、对工程的不妥协、对材料的诚实**。

> **设计哲学（Design Philosophy）：** *"Speed, distilled."*
> 速度，被提炼到最纯净的状态。

### 1.2 创意宣言（Creative Manifesto）
- 我们相信：好的设计应该像风——你看不见它，但你能感受到它穿过你时带起的纹理。
- 我们不堆功能。我们让每一个功能**自己说话**。
- 我们不让用户"看广告"。我们让用户"看一场关于自行车的电影"。
- 我们不解释"为什么选择我们"。我们展示"我们如何不妥协"。

### 1.3 情绪曲线（Emotion Curve）
访客从进入网站到离开，应走过这条曲线：

| 阶段 | 时间 | 情绪关键词 | 视觉表达 |
|---|---|---|---|
| 0 – 5 s | 第一印象 | 震撼、安静、权威 | 黑屏渐显，碳纤维车架从阴影中浮现 |
| 5 – 15 s | 建立认知 | 好奇、渴望 | 巨大标题出现，伴随轻微相机推进 |
| 15 – 60 s | 故事 | 共鸣、敬佩 | 滚动叙事，关于品牌为何存在 |
| 1 – 3 min | 产品 | 惊叹、占有欲 | 3D 产品解剖、参数可视化 |
| 3 – 5 min | 信任 | 信任、向往 | 技术细节、材质、工匠、媒体背书 |
| 5+ min | 转化 | 行动 | Find a dealer / Test ride / Build yours |

### 1.4 目标用户画像（Persona）

**Primary — The Connoisseur（鉴赏家）**
- 35–55 岁，年收入 50 万+
- 拥有 / 考虑拥有高端自行车（5 万+）
- 同时是高端腕表 / 汽车 / 艺术品买家
- 不看产品介绍，看品牌气质
- 决策周期长，但认可后忠诚度极高

**Secondary — The Aspiring Athlete（进阶玩家）**
- 25–40 岁，骑行爱好者，器材党
- 关注技术参数、性能数据
- 在 YouTube / Garmin / 自行车媒体研究产品
- 看重专业性、工程师文化

---

## 2 · Visual Language

### 2.1 视觉关键词
**保留：** Premium / Performance / Engineering / Minimalism / Speed / Precision / Motion / Aerodynamics / Industrial Design / Cinematic / Editorial / Technical / Futuristic
**剔除：** 蓝紫渐变 / 圆角堆砌 / 卡片网格 / SaaS 模板 / 装饰性 icon

### 2.2 视觉参考（仅借鉴气质，不复制）
- **Porsche 官网** — 产品摄影 + 工业感
- **Apple Vision Pro 产品页** — 克制 + 材质
- **Bang & Olufsen** — 材质 + 光影 + 留白
- **Aston Martin 数字站** — 电影感 + 黑色摄影棚
- **Brompton** — 产品个性
- **SFMOMA 数字展览** — 编辑设计
- 摄影师：Norman Seeff / Tim Walker / Sølve Sundsbø（人像 × 车）

### 2.3 摄影与影像（Photography Direction）
- **主调：** 暗调黑色摄影棚为主，户外 / 公路 / 山地为辅
- **光线：** Single-source 主光 + 强对比侧逆光 / Rim light 勾勒车架边缘
- **色调：** 低饱和度，黑 + 暖白 + 单一冷色金属高光
- **颗粒：** 极轻微数字颗粒（模拟胶片质感）
- **景深：** 浅景深 + 焦外柔焦
- **动态：** 慢速快门 / 速度线 / Motion blur，用于过渡与分隔

### 2.4 材质语言（Material Library）
设计中"可触碰"的材质：
- **Carbon Fiber** — 斜纹编织，光下呈现 3D 立体纹理
- **Brushed Aluminum** — 拉丝金属，反射与哑光的交界
- **Matte Black** — 不反光但有方向性的深黑
- **Polished Glass** — 表面玻璃，引入环境光
- **Concrete / Raw Plaster** — 摄影棚背景墙
- **Leather / Suede** — 鞍座、把手带
- **Brass / Copper** — 黄铜质感，用于徽标 / 限量标识

### 2.5 空间纵深（Depth System）
全站贯穿三层结构，**每个 Section 都有真实空间感**：

```
前景 (Foreground)  →  车 / 人 / 材质细节 / UI 元素
中景 (Midground)    →  文字 / 品牌符号 / 数据
背景 (Background)   →  摄影 / 光 / 阴影 / 粒子 / 抽象空间
```

---

## 3 · Color System

### 3.1 主色（Primary）
| Token | Hex | 用途 |
|---|---|---|
| `--ink-black` | `#0A0A0B` | 主背景 / 文本反转背景 |
| `--pure-white` | `#F5F4F0` | 主文本（不用纯白，避免刺眼） |
| `--graphite` | `#1C1C1F` | 次级背景 / Section 间隔 |
| `--concrete` | `#3A3A3D` | 辅助背景 / 卡片底色 |

### 3.2 金属与中性（Metals & Neutrals）
| Token | Hex | 用途 |
|---|---|---|
| `--titanium` | `#8A8A8E` | 金属高光、辅文 |
| `--aluminum` | `#C4C4C6` | 边框、分割线 |
| `--brass` | `#B8915A` | 限量徽标、强调金属 |
| `--copper` | `#A85C3C` | 数据高亮（节制使用） |

### 3.3 强调色（Accent — 仅一个）
| Token | Hex | 用途 |
|---|---|---|
| `--signal-red` | `#D32B1E` | 关键 CTA / 限量标识 / 数据峰值 |

**纪律：**
- 90% 页面只用黑 + 灰 + 白
- 9% 允许金属色系（黄铜 / 铜）作为材质质感
- 1% 信号红——只能出现在"这一秒你需要它存在"的地方

### 3.4 CSS 变量体系
```css
:root {
  /* Primary */
  --ink-black: #0A0A0B;
  --pure-white: #F5F4F0;
  --graphite: #1C1C1F;
  --concrete: #3A3A3D;

  /* Metals */
  --titanium: #8A8A8E;
  --aluminum: #C4C4C6;
  --brass: #B8915A;
  --copper: #A85C3C;

  /* Accent */
  --signal-red: #D32B1E;

  /* States */
  --hover-overlay: rgba(245, 244, 240, 0.04);
  --pressed-overlay: rgba(245, 244, 240, 0.08);
}
```

---

## 4 · Typography System

### 4.1 字体选型（推荐）
| 角色 | 字体（首选） | 备选 | 用途 |
|---|---|---|---|
| Display | **Söhne Breit** / **Inter Display** | ABC Diatype Mono Display | Hero、Section 大标题 |
| Editorial | **GT Sectra** / **Tiempos Headline** | Canela, Tobias | 品牌故事、编辑型段落 |
| UI / Body | **Söhne** / **Inter** | Suisse Int'l, Untitled Sans | 正文、UI、按钮 |
| Mono / Technical | **JetBrains Mono** / **Berkeley Mono** | IBM Plex Mono | 数据、参数、技术规格 |

> **重要：** 全部用开源或授权清晰的精品字体。**绝不复用 Google Fonts 默认打包**（避免 geofencing 与性能问题）。推荐自托管（`@fontsource` 或 `nuxt-font-loader`）。

### 4.2 字号阶梯（Modular Scale — 1.333 ratio）
| Token | Size | Line Height | 用途 |
|---|---|---|---|
| `--type-display-xl` | `clamp(96px, 12vw, 240px)` | 0.9 | Hero 主标 |
| `--type-display-l` | `clamp(72px, 8vw, 144px)` | 0.95 | Section 标题 |
| `--type-display-m` | `clamp(48px, 5vw, 96px)` | 1.0 | 子区块标题 |
| `--type-h1` | `56px` | 1.05 | 页面标题 |
| `--type-h2` | `40px` | 1.1 | |
| `--type-h3` | `28px` | 1.2 | |
| `--type-body-l` | `20px` | 1.5 | 引言 |
| `--type-body` | `16px` | 1.6 | 正文 |
| `--type-body-s` | `14px` | 1.5 | 辅助 |
| `--type-caption` | `12px` | 1.4 | 法律、注释 |
| `--type-mono` | `14px` | 1.4 | 数据 |

### 4.3 排版规则
- **Display** 字重：800–900，几乎全用黑体
- **Editorial** 段落用 400–500，避免加粗破坏阅读
- **Mono** 用于所有数字、参数——它是"诚实"的视觉
- 文字行宽：英文 ≤ 60ch / 中文 ≤ 28 字
- 标题之间**不用标点**，让空白本身成为分隔
- 默认左对齐；编辑型独白可居中

### 4.4 Kinetic Typography
- 标题入场：`translateY(100%) → 0` + `opacity 0 → 1`，duration 1200ms，ease `[0.25, 0.46, 0.45, 0.94]`
- 字符级 stagger：每字 30ms，形成"打字机反向"的工业感
- 数字滚动：scrub 模式 count-up
- 段落文字：默认淡入，无位移

---

## 5 · Homepage Storyboard

### 5.1 整体结构（8 段，~5 分钟完整体验）

```
[00] PRELOAD          0.5s    黑屏 + 极细品牌线条逐渐勾勒
[01] HERO             8s      全屏车架 + 主标 + 滚动提示
[02] MANIFESTO        12s     三句品牌宣言，每句占满一屏
[03] ORIGIN           25s     滚动电影：品牌起源 / 工艺
[04] PRODUCT 01       30s     主推车款沉浸展示
[05] ANATOMY          35s     整车 → 拆解 → 重装
[06] TECH DATA        20s     参数可视化（重量 / 刚性 / 空气动力）
[07] JOURNALS         25s     杂志 / 媒体 / 故事
[08] FOOTER           —       dealer locator + 订阅 + 法律
```

### 5.2 Section 01 — HERO
**画面：** 全黑，背景几乎不可见。一辆高端公路车悬挂于画面正中，Rim light 勾勒出车架轮廓，碳纤维纹理在强光下显现。

**元素：**
- 顶部固定 nav：6 个词，透明背景，hover 仅下划线动
- 居中：品牌 LOGO + 主标 `AETHON ONE` + 副标 `Engineered for the Last 5 Seconds.`
- 右下：垂直滚动提示 + 极小 mono 编号 `01 / 08`
- 底层：缓慢推进的 camera（scale 1 → 1.05 over 8s）
- 持续：粒子从车架表面"脱落"上升

**滚动：**
- 开始滚动：相机略微 dolly forward
- 车架开始 1°/s 缓慢旋转
- 文字以不同速度退场（标题快、副标慢）

### 5.3 Section 02 — MANIFESTO
**画面：** 三屏，每屏一句宣言居中显示：

```
01.   Speed is a discipline.
02.   We don't chase it. We engineer it.
03.   Every gram. Every angle. Every second.
```

**视觉：** 每句占 1.2 屏高度，文字 scale 0.95 → 1.05 跟随滚动。背景纯黑 ↔ 深灰过渡，中间穿插单张高对比黑白摄影。

### 5.4 Section 03 — ORIGIN
**结构：** 编辑型长滚动，3–5 段，左右交替。

- 标题：`WHY WE BUILD`
- 段落：每段 1 张全屏摄影 + 60–100 字文案
- 滚动驱动：每段文字以 pinning 方式停留 70vh
- 视觉：照片偏向"工厂 + 工匠 + 材质"——手、工具、碳布、车架

**GEO 内容设计：**
- 文案可被引用为"关于 AETHON 品牌哲学的权威陈述"
- 段落用 `<article>` 包裹，明确 `author` / `datePublished`
- 关键声明使用 Schema.org `Claim` 类型

### 5.5 Section 04 — PRODUCT 01
**画面：** 满屏产品摄影，左下角产品名 + 价格 + 1 个 CTA。

**滚动驱动：**
- 0% – 30%：车静止，居中
- 30% – 70%：车开始旋转 90°，背景出现运动模糊
- 70% – 100%：相机 dolly 向前，进入 Section 05 衔接

**Hover 交互：**
- 鼠标在车架表面移动时，金属高光跟随
- 价格 / 详情 CTA 浮起，光泽扫过

### 5.6 Section 05 — ANATOMY
**3D 拆解体验。** 用户滚动时整车 → 拆解 → 重装。

| 阶段 | 滚动 % | 视觉 |
|---|---|---|
| 整车 | 0–15% | 完整车，1.0x scale |
| 拆解开始 | 15–30% | 轮组向外 200px，车架不变 |
| 拆解中 | 30–60% | 车架、座管、曲柄、把立各自飞向预设位置 |
| 拆解完成 | 60–75% | 全部零件按工业爆炸图布局 |
| 重装 | 75–95% | 反向回弹 |
| 整车 | 95–100% | 恢复完整 |

**注释层：** 每拆解出一部分，旁边浮出 mono 字体参数：
- 轮组：`DURA-ACE C50 · 1,480g · 50mm DEPTH`
- 车架：`T1100 CARBON · 780g · AERO TUBE`

### 5.7 Section 06 — TECH DATA
**参数可视化。** 三组核心数字 + 简短说明：

```
[ 6.8 ]      [ 49 ]      [ 0.27 ]
KG          STIFFNESS    CdA
FRAME+PAINT  N/m/deg     DRAG COEFFICIENT
```

**视觉：**
- 数字巨大（clamp 120–240px），mono 字体
- 数字下方出现数据图：环形 / 条形 / 折线
- 数字以 scrub 模式 count-up
- 鼠标 hover 数字，显示完整技术报告

**GEO 优化：**
- 数字用 `<dl>` 定义列表
- 加上 `itemprop` 微数据
- 对比表预留：vs. Trek / vs. Specialized（克制使用）

### 5.8 Section 07 — JOURNALS
**内容入口。** 3–4 张大版式编辑文章，每张都是杂志封面：

```
[A]  Inside the wind tunnel.
[B]  200 hours in the saddle.
[C]  Why we said no to disc brakes.
```

**点击：** 进入 `/journal/[slug]` 详情页（本期静态 demo 不展开）。

### 5.9 Section 08 — FOOTER
**信息架构重构。** 不是"链接列表"，是"对话框"。

- 左侧：品牌 LOGO + 简短品牌宣言 + 订阅邮箱
- 中间：导航（极简，6 项）
- 右侧：经销商搜索（结构化数据：Schema.org `LocalBusiness`）
- 底部：法律 + 社交（极简图标）

---

## 6 · Section-by-Section Experience（细化的全局规则）

### 6.1 全局 Sticky Layer
- **Top Nav**：透明 / scroll > 80px 时变玻璃态（`backdrop-blur 12px` + 0.6 alpha）
- **Scroll Progress**：极细 1px 线，顶部 0 → 100%
- **Section Counter**：右侧 mono `01 / 08`
- **Audio Toggle**：默认关，hover 出 tooltip（可选，谨慎）

### 6.2 Section 转场
- 滚动达到 section end 80% 时，触发 *cinematic transition*
- 视觉：当前 section 主元素缩放 + 模糊，新 section 元素从暗处渐入
- 音频（可选）：极轻微的 whoosh 音效

### 6.3 加载策略（Performance-First）
- 首屏：只加载 hero 资源（车架摄影 + 字体 + 首屏 CSS）
- 其余图片：`IntersectionObserver` 懒加载 + blur-up 占位
- 字体：自托管 + `font-display: swap`
- 3D 模型：用户进入 ANATOMY section 前 500ms 才开始加载

### 6.4 GEO 内容单元
每个 Section 都有"可被 AI 引用"的内容单元：

| Section | 语义化容器 | Schema 类型 |
|---|---|---|
| HERO | `<h1>` 含品牌 + 主标 + 1 句品牌定位 | `Organization` |
| MANIFESTO | `<blockquote>` 包裹每段 | `Claim` |
| ORIGIN | `<article>` + `author` + `datePublished` | `Article` |
| PRODUCT | `<section itemtype="Product">` 完整 schema | `Product` + `Offer` |
| TECH DATA | `<dl>` + 数字单位明确 | `QuantitativeValue` |
| JOURNALS | 完整 Article schema | `Article` + `BreadcrumbList` |
| DEALERS | LocalBusiness 列表含 geo 坐标 | `LocalBusiness` |

---

## 7 · 3D Concept

### 7.1 技术选型
- **Three.js** + **Vue 3**（用 `@tresjs/core` + `@tresjs/cientos` 生态）
- **Drei**：Environment / OrbitControls / useScroll
- **GLSL Shader**：自定义 carbon fiber 着色器
- **Lenis**：滚动驱动 camera 位置

### 7.2 3D 应用场景
| Section | 3D 类型 | 复杂度 |
|---|---|---|
| HERO | 静态车架 + 动态光照 | 低 |
| PRODUCT 01 | 旋转 + 材质切换 | 中 |
| ANATOMY | 爆炸图 + 部件独立动画 | 高 |
| TECH DATA | 数据可视化（Three.js + D3） | 中 |
| Footer | 无 | — |

### 7.3 3D 降级策略
- 检测 WebGL 支持 + 设备性能（GPU benchmark）
- 不支持：用预渲染视频替代 ANATOMY
- 低性能：静态爆炸图（按 frame 拆分的 PNG 序列）
- 用户开启 `prefers-reduced-motion`：完全禁用 3D 旋转

### 7.4 模型与资源
- **首选：** Sketchfab 上有商业授权的自行车模型（CC BY / Standard）
- **降级：** Spline 设计社区模型
- **保底：** 静态摄影 + 后期合成爆炸图

### 7.5 资产体积预算
- 单个 3D 模型 ≤ 8 MB（Draco 压缩后）
- 4K 摄影 ≤ 300 KB（AVIF）
- 字体子集 ≤ 80 KB
- 首屏总传输 ≤ 1.5 MB

---

## 8 · Motion Design System

### 8.1 缓动函数库
```javascript
export const easing = {
  mechanical: [0.65, 0, 0.35, 1],   // 工业感
  cinematic:  [0.25, 0.46, 0.45, 0.94], // 电影感
  smooth:     [0.16, 1, 0.3, 1],    // 缓出
  impact:     [0.87, 0, 0.13, 1],   // 强入场
  linear:     [0, 0, 1, 1],         // 线性
}
```

### 8.2 时长规范
- **微交互**：150–300 ms（hover / press / state change）
- **入场**：600–1200 ms（section 元素进入）
- **出场**：300–500 ms（退出视口）
- **滚动驱动**：scrub 0.5–1.2（GSAP）
- **页面切换**：800–1500 ms

### 8.3 动效语言（核心动效原子）
1. **Slide** — 元素从一侧滑入，无 bounce
2. **Reveal** — mask / clip-path 揭示
3. **Counter** — 数字 count-up
4. **Glide** — camera dolly 缓慢推进
5. **Sweep** — 光线扫过（gradient 移动）
6. **Drift** — 粒子上升 / 飘落
7. **Unfold** — 段落 / 卡片展开
8. **Disassemble** — 拆解（ANATOMY 专用）

### 8.4 滚动驱动总原则
- **Camera** 跟随滚动，scrub 0.6
- **Text** 入场 scrub 0.3（更快）
- **Photography** 视差 scrub 0.4
- **3D Objects** 旋转 scrub 0.5
- **数值** count-up scrub 0.8

### 8.5 音频（可选）
- Section 转场：whoosh（频率 sweep + 噪点）
- Hero 进场：sub-bass 缓慢升起
- 鼠标 hover 金属 CTA：极轻金属敲击
- 默认关闭，用户可启用

### 8.6 Reduced Motion
所有动效检测 `prefers-reduced-motion: reduce`：
- 滚动驱动变为瞬时
- 3D 旋转禁用
- 文字淡入保留（缩短为 200 ms）
- 粒子 / 模糊全部禁用

---

## 9 · Interaction Design

### 9.1 鼠标交互
- **Custom Cursor**（可选）：极简圆点 + 8 px 跟随
- **Hover State**：底色 / 边框 / 光泽扫过，**无缩放**
- **Magnetic CTA**：主 CTA 鼠标靠近时轻微"吸"向光标
- **Product Hover**：金属高光跟随鼠标

### 9.2 滚动交互
- **Lenis** smooth scroll（lerp 0.1）
- **GSAP ScrollTrigger** 驱动所有进场 / scrub
- **Sticky Sections** 用于 2 屏以上的"电影段落"
- **Scroll Velocity** 作为动效速度变量（滚动越快，相机越快）

### 9.3 键盘 / 可访问性
- 全站 Tab 导航可达
- Section 跳转：`1–8` 数字键 + `Home / End`
- `Esc` 关闭任何覆盖层
- 所有动效可通过 `prefers-reduced-motion` 关闭
- 对比度：所有文本 vs. 背景 ≥ 4.5:1
- ARIA labels on all interactive elements

### 9.4 触摸交互（移动端）
- **Swipe** 替代 hover
- **Pinch** 用于 3D 模型（HERO / PRODUCT）
- **Pull-to-refresh** 关闭
- **Vertical scroll** 是主导航（不用 swipe 切换 section）

---

## 10 · Mobile Strategy

### 10.1 设计原则
> 移动端不是缩小桌面端。是**重新讲一个针对手机的故事**。

### 10.2 布局重构
| Desktop | Mobile |
|---|---|
| 全屏产品居中 | 9:16 竖版产品 + 下半屏文字 |
| 多列编辑段落 | 单列长滚动 |
| 3D 爆炸图 | 静态 4 步图解 + 滑动切换 |
| 横向多图 | 上下堆叠 + 文字覆盖 |
| Side-by-side 双栏 | 顶图 + 底文 |

### 10.3 动效简化
- 入场动效保留（缩短 30%）
- 滚动驱动 scrub 改为瞬时 snap
- 3D 拆解改为 4 步水平滑动
- 粒子上限：20 颗（桌面 200+）
- 禁用 mouse parallax，启用 device orientation parallax（极轻）

### 10.4 性能预算
- 移动端首屏 ≤ 1 MB
- 视频自动播放禁用
- 3D 模型：≤ 4 MB 或降级为图片
- 字体子集化

### 10.5 触摸目标
- 最小 44 × 44 pt
- CTA 之间间距 ≥ 12 pt
- Swipe 区域：至少 50% 屏宽

---

## 11 · Recommended Tech Stack

### 11.1 核心栈
```
Frontend       Vue 3 (Composition API + <script setup>)
Build          Vite 5
Meta-Framework Nuxt 3（推荐）/ 纯 Vue 3 SPA
TypeScript     ✓ 严格模式
Styling        Vanilla CSS + CSS Custom Properties（首选）
               备选：UnoCSS（按需，原子化仅用于 utility）
Animation      GSAP 3 + ScrollTrigger + Lenis
3D             Three.js + @tresjs/core + @tresjs/cientos
Forms          VeeValidate + Zod
State          Pinia
i18n           @nuxtjs/i18n
```

### 11.2 选型理由
- **Vue 3** — 用户指定
- **Nuxt 3** — 自带 SSG（`nuxt generate`），对 GEO 关键
- **GSAP + Lenis** — 行业标准滚动动效
- **@tresjs** — Vue 3 原生 Three.js 绑定，比 R3F 生态轻
- **Vanilla CSS** — 性能 + 可控性，避免 Tailwind 的"模板感"
- **UnoCSS 备选** — 仅当团队有原子化偏好时启用

### 11.3 工程化
```
Package        pnpm
Lint           ESLint + Prettier + Stylelint
Type Check     vue-tsc
Test           Vitest + Playwright
CI             GitHub Actions
Deploy         Vercel / Netlify（自动预渲染）
```

### 11.4 GEO 工具链
```
Structured Data   Schema.org JSON-LD（自写 + schema-dts）
LLM Sitemap       单独 llms.txt（参考 llmstxt.org 规范）
Meta              OG / Twitter Card 全套
Robots            允许 GPTBot / ClaudeBot / PerplexityBot / Google-Extended
Content           Markdown / MDX 作为内容源
```

### 11.5 性能预算
```
LCP    < 2.0 s
CLS    < 0.05
INP    < 200 ms
TTFB   < 600 ms
Bundle < 200 KB JS (initial)
```

---

## 12 · Potential Technical Challenges

### 12.1 性能 vs. 视觉冲突
- **挑战：** 3D + 4K 摄影 + 滚动动效叠加，首屏可能 > 5 MB
- **解决：** 分阶段加载（首屏 ≤ 1.5 MB），`<link rel="preload">` 控制优先级，3D 模型按需加载

### 12.2 跨设备一致性
- **挑战：** Safari iOS 对 `backdrop-filter` / WebGL 兼容性差异
- **解决：** feature detection + 渐进降级，WebGL 不可用时静态图替代

### 12.3 滚动驱动动效在不同设备上的"节奏漂移"
- **挑战：** 60 Hz / 120 Hz / 高刷屏 scrub 感不同
- **解决：** Lenis 用时间驱动而非帧驱动，scrub 数值统一

### 12.4 字体加载与 FOUT
- **挑战：** 自托管字体在 4G/弱网下 FOIT/FOUT
- **解决：** `font-display: swap` + 关键字体子集化（拉丁扩展 + 中文 3500 字）

### 12.5 3D 模型版权与体积
- **挑战：** 真实 3D 模型难获取，开源模型精度不够
- **解决：** Sketchfab 商业授权模型为主，自建简模为辅，2D 摄影兜底

### 12.6 GEO 内容维护
- **挑战：** LLM 检索偏好"事实 + 来源 + 时间戳"
- **解决：** 每篇文章 / 数据带 `datePublished` + `author` + 引用源链接

### 12.7 多语言与 SEO
- **挑战：** i18n 路由 + hreflang 维护
- **解决：** Nuxt i18n 自动生成，CI 校验

---

## 13 · Three Visual Directions

### Direction A — Luxury Performance（奢华性能）

**核心隐喻：** 像百达翡丽做一只计时码表。
**情绪：** 暗调、克制、私人、永恒。
**主色：** 哑黑 + 暖灰 + 黄铜。
**参考：** Aston Martin · Bang & Olufsen · Hermès Digital · 独立制表师网站。

**视觉特点：**
- 黑色摄影棚为主，几乎不用室外场景
- 灯光像电影布光，单一主光源 + 强侧逆光
- 表面材质偏向皮革、黄铜、木头——汽车内饰感
- 文字编辑感强，serif 字体比例更高
- 整体像在一间高端酒店的私人展厅

**适合品牌：**
- 已有 50+ 年历史
- 强调工艺、传承
- 客户群偏成熟（40+）
- 单车价格 15 万+

**首页做法：**
- HERO：黑屏 → 车架从侧光中浮现，缓慢旋转 5°，仅 1 句主标
- MANIFESTO：3 句长句（serif），配 3 张极简黑白摄影
- PRODUCT：每个产品占满 1 屏，像艺术品图录
- ANATOMY：拆解过程用慢动作（scrub 1.2），让用户"看"工艺
- TECH DATA：数字 + 工艺描述，工程师签名感

**3D 做法：**
- 车架使用 PBR 真实材质（碳布编织纹理 shader）
- 灯光为单点主光，模拟影棚
- 镜头像电影摄影机（35 mm 焦段感）

**动效做法：**
- 入场动效非常慢（1500 ms+）
- 滚动 scrub 1.0（最慢）
- 几乎无 bounce，全部 ease-out
- 文字 fade-in 0.5 s，无位移

---

### Direction B — Futuristic Engineering（未来工程）

**核心隐喻：** 像 Apple Vision Pro 介绍一台机器。
**情绪：** 科技、精确、未来、冷峻。
**主色：** 深空灰 + 电子蓝 + 信号红。
**参考：** Apple · Polestar · Dyson · Cyberpunk（克制版）。

**视觉特点：**
- 背景多为虚拟空间 / 抽象网格 / 等高线
- 强烈几何感：直线、网格、坐标轴
- 字体以 mono 和 sans-serif 为主
- 大量使用 data visualization
- 表面材质：抛光金属、玻璃、HUD 元素
- 整体像在一间高科技实验室

**适合品牌：**
- 新创品牌，强调颠覆
- 客户群年轻（25–40）科技爱好者
- 强调 e-bike / 智能 / 数据
- 单车价格 8 万+

**首页做法：**
- HERO：HUD 风界面，参数实时显示在车架上
- MANIFESTO：3 句短句 + 等宽数字
- PRODUCT：每个产品像 *tech spec sheet* 展开
- ANATOMY：拆解过程伴随参数实时标注（像 CAD）
- TECH DATA：3D 数据可视化为主，d3.js + Three.js

**3D 做法：**
- 整体 Tech 化：grid、wireframe、scan lines
- 材质偏向金属 + 玻璃
- 镜头锐利，无景深
- 拆解带"机械感"音效（可选）

**动效做法：**
- 入场 600–800 ms，更快
- 数字 count-up 0.8 s
- 滚动 scrub 0.5
- 允许轻微 glitch 效果（但每屏最多 1 次）
- 鼠标 hover 触发光带扫过

---

### Direction C — Outdoor Exploration（户外探索）

**核心隐喻：** 像 Patagonia 拍一部关于山地的电影。
**情绪：** 自然、史诗、人与车、远方。
**主色：** 哑黑 + 橄榄绿 + 沙色 + 暖橙。
**参考：** Patagonia · Arc'teryx · The North Face · 公路电影。

**视觉特点：**
- 大量外景：山地、公路、荒漠、海岸
- 自然光为主：日出 / 日落 / 阴天
- 人物与车同等重要，叙事感强
- 字体：偏 warm serif + 实用 sans
- 材质：哑光、磨损、真实感
- 整体像一部公路电影

**适合品牌：**
- 主打 gravel / mountain / adventure
- 客户群热爱户外
- 强调 community / 故事
- 单车价格 5–12 万

**首页做法：**
- HERO：山地日出公路，一辆车 + 一个骑手从远景推进
- MANIFESTO：3 段第一人称独白
- PRODUCT：每个产品配 1 段骑行场景视频
- ANATOMY：拆解过程用"工坊"实拍 + 3D 配合
- TECH DATA：参数 + 真实骑行情境

**3D 做法：**
- 3D 仅用于产品细节
- 主视觉为实拍 + 后期
- 镜头有 motion blur，速度感强
- 拆解过程模拟"工坊拆装"视角

**动效做法：**
- 入场 800–1200 ms
- 大量 parallax（前景树叶 / 中景车 / 背景山）
- 滚动 scrub 0.6
- 视频穿插（用户滚动到某点才播放）

---

## 14 · 推荐方向：Direction A — Luxury Performance

### 推荐理由

**1. 契合"国际顶级品牌"定位**
用户明确说"国际顶级自行车品牌"。Direction A 是三个方向中最贴合"顶级品牌"叙事语言的——克制、永恒、像百达翡丽做码表。

**2. 差异化最高**
自行车行业 90% 的官网走 Direction C（户外 / 公路 / 生活方式），Direction A 在视觉上立刻拉开距离。Direction B 已被太多科技公司用滥，容易陷入"另一个 Polestar"。

**3. 与高端材质语言高度一致**
用户提到的"碳纤维、金属、玻璃、shadow、depth"在 Direction A 下能最自然地呈现。Direction B 会把 carbon fiber 做成 tech 风格（蓝紫渐变）—— 这正是用户明确要避免的。

**4. GEO 优势**
"高端"叙事 = 更多可引用的"权威陈述"（品牌哲学、工艺、技术承诺）。Direction A 的 editorial 文字 + 完整 schema，能让 AI Search 把 AETHON 引用为"高端自行车品牌代表"。

**5. 技术可控**
Direction A 不需要实时 webGL grid / 数据可视化等高风险 3D，技术风险低，演示 demo 更容易跑通。

### 落地建议
- 用 AETHON 品牌为案例，落地完整首页
- 3D 仅用于 ANATOMY section，HERO 用高质量摄影 + 后期合成
- 字体：Söhne（UI）+ GT Sectra（编辑）+ JetBrains Mono（数据）
- 主色 + 黄铜 + 唯一红色强调

### 备选策略
- 如果客户群明显年轻化，**B（未来工程）** 是次优解
- 如果品牌强调户外 / gravel / community，**C（户外探索）** 是次优解
- **不建议混合使用** —— 混合会破坏品牌一致性

---

## 15 · GEO 战略（GEO Brief）

### 15.1 目标
让 AETHON 在 AI 搜索引擎（ChatGPT Search、Perplexity、Google AI Overview、Citrues AI、Claude、Gemini）中：
- 被引用为"高端自行车品牌"代表
- 在 "best road bike brands"、"luxury bicycle"、"carbon fiber bike" 等查询中被推荐
- 关键数据 / 工艺 / 品牌哲学被 AI 引用为权威来源

### 15.2 实施策略

**1. 结构化数据** — 全站 Schema.org JSON-LD
- `Organization` + `Brand`
- `Product` + `Offer` + `AggregateRating`
- `Article` for journals
- `LocalBusiness` for dealers
- `BreadcrumbList` for navigation
- `FAQPage` for support
- `Claim` for manifesto statements

**2. llms.txt** — 提供 AI 友好的站点地图（llmstxt.org 规范）

**3. Content Hubs** — 可被引用的"事实型内容"：
- "The Engineering Behind AETHON ONE"（2000 字 + 数据 + 图）
- "Carbon Fiber Weave Patterns Explained"（权威 + 可引用）
- "Why We Don't Use 1x Drivetrain"（观点型，立场清晰）
- 数字必须可被引用：单位 + 来源 + 时间戳

**4. 作者权威** — 所有文章明确 `author` + `bio` + 链接到 LinkedIn / 个人页面

**5. 数据时间戳** — 所有 `datePublished` + `dateModified` 明确，AI 偏好"新鲜 + 权威"

### 15.3 监控与迭代
- 每月扫描 AI Search 结果中 AETHON 是否被引用
- 跟踪 "best bike brand" 类型查询的 AI 回答
- 迭代内容以提升引用率

---

## 16 · 下一步（Next Steps）

**Phase 1（本文件）：** ✓ 创意方向书

**Phase 2（待确认方向后启动）：**
- Figma：完整设计系统 + 高保真视觉稿
- 3D 资产采购 / 制作
- 摄影指导（art direction for product photoshoot）

**Phase 3（开发）：**
- Nuxt 3 项目脚手架
- 字体 / 色彩 / 组件库搭建
- 8 个 Section 逐个实现
- 3D ANATOMY 集成
- GEO 结构化数据接入
- 性能 / 可访问性测试
- 部署到 Vercel / Netlify

---

## 附录 · 等待你确认的问题

1. **三个方向你倾向哪一个？**（推荐 Direction A — Luxury Performance）
2. **品牌名 AETHON 是占位** —— 你的品牌叫什么？是否有现成 LOGO / VI？
3. **产品线范围：** 公路 / 山地 / 城市 / Gravel，哪些是本期重点？
4. **是否需要先做 Direction A 的 Figma mood board**（图片情绪板，约 1 小时工作量）？
5. **真实摄影资源：** 你有现成的高端自行车产品照吗？还是需要我用占位图 + 文字标注 "PHOTO TBD"？
6. **3D 模型：** 是否有 Sketchfab / 自建模型？还是 Phase 3 我用占位？
7. **品牌主色：** 文档里 Signal Red `#D32B1E` 是我设的"唯一强调色" —— 你品牌是否已有色卡要替换？
