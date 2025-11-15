SHININGresort Project Starter — 前提条件とディレクトリ規約 v1.0

**対象**：開発初心者の私（LiNKiST）が、AI（ChatGPT）と一緒に“迷わず育てられる”Next.jsサイトを新環境で立ち上げるための**前提条件（プリセット）**。**目的**：KOKONのUI/動きを参考に、SHININGresort（Resort & Retreat）のトップページ体験を高品質に再現し、今後の拡張に耐える構成で安定運用する。

* * *

1. プロジェクトのゴール / 非ゴール

* * *

* **ゴール**
  
  * Hero：画像の**自然なクロスフェード**、ロゴ・キャッチの配置、**ABOUTの中央停止**（スクロール時）を再現。
    
  * KOKONに寄せた**余白設計**・**タイポ**（見出し=Serif、本文=Sans）・**ボタン**（織部色）・**静かなモーション**。
    
  * ディレクトリを**役割別**＋**ドメイン別（セクション単位）**に整理し、成長しても迷わない。
    
* **非ゴール**
  
  * 宿泊予約システムの本番実装（当面はTripla/TableCheckの埋め込みボタンでOK）。
    
  * 複雑なCMS/DB導入（必要なら後から `features/*` に追加）。
    

* * *

2. 技術スタック（推奨バージョン）

* * *

* Node.js LTS（20 以上）
  
* Next.js 16（App Router）
  
* TypeScript
  
* Tailwind CSS
  
* Framer Motion（アニメ・スクロール連動）
  
* 画像：`public/images/*` に WebP/SVG 配置
  

* * *

3. 最低要件・環境

* * *

* Git / GitHub（任意ブランチ運用：`main` + `feat/*`）
  
* エディタ：VS Code（Tailwind IntelliSense 推奨）
  
* OSは問わない（Windows/Mac）
  
* **初心者前提**：実装の際は**手順を1つずつ**進め、**理解メモ**を残しながら進行する
  

* * *

4. ディレクトリ構成（確定版）

* * *

`shiningresort/├─ app/│ ├─ (site)/ # 画面系（サイト本体のルート） │ │ ├─ page.tsx # トップ（セクションを順に並べるだけ） │ │ ├─ layout.tsx # <html> <body> とグローバルUI │ │ ├─ error.tsx / loading.tsx│ │ ├─ components/ # サイト横断の“見た目”部品 │ │ │ ├─ layout/│ │ │ │ ├─ Header.tsx│ │ │ │ ├─ Footer.tsx│ │ │ │ └─ MobileNav.tsx│ │ │ ├─ ui/│ │ │ │ ├─ Button.tsx│ │ │ │ ├─ SectionTitle.tsx│ │ │ │ └─ Reveal.tsx│ │ │ └─ media/│ │ │ └─ ResponsiveImage.tsx│ │ ├─ sections/ # ページの各セクション（KOKON準拠） │ │ │ ├─ hero/│ │ │ │ ├─ HeroGroup.tsx # クロスフェード & ロゴ & CTA │ │ │ │ ├─ HeroCrossfade.tsx # 自然なフェード │ │ │ │ └─ useHeroScroll.ts # ABOUTが中央で“止まる” │ │ │ ├─ about/AboutSection.tsx│ │ │ ├─ news/NewsSection.tsx│ │ │ ├─ rooms/RoomsSection.tsx│ │ │ ├─ experience/ExperienceSection.tsx│ │ │ ├─ access/AccessSection.tsx│ │ │ └─ reserve/ReserveSection.tsx│ │ └─ api/health/route.ts # 任意 │ ├─ styles/globals.css # Tailwind層 + カスタムCSS │ └─ head.tsx # 必要なら │├─ features/ # 機能（ビジネスロジック） │ ├─ news/│ │ ├─ NewsCard.tsx│ │ ├─ fetchNews.ts│ │ └─ types.ts│ ├─ rooms/│ │ ├─ RoomCard.tsx│ │ ├─ rooms.data.ts│ │ └─ types.ts│ ├─ reserve/│ │ ├─ TriplaButton.tsx│ │ ├─ TableCheckButton.tsx│ │ └─ embed.ts│ └─ maps/│ ├─ GoogleMap.tsx│ └─ constants.ts│├─ lib/│ ├─ motion.ts│ ├─ viewport.ts│ └─ utils.ts│├─ hooks/│ ├─ useIsMounted.ts│ └─ useInViewOnce.ts│├─ styles/ # Tailwind分割したいとき │ └─ tailwind.css│├─ types/│ └─ global.d.ts│├─ public/│ ├─ images/│ │ ├─ hero/hero-1.webp│ │ ├─ hero/hero-2.webp│ │ ├─ hero/hero-3.webp│ │ ├─ logo/logo-white.svg # 白抜きロゴ（SVG推奨） │ │ ├─ rooms/... # 各ルーム画像 │ │ └─ exp/... # 体験画像 │ └─ favicon.ico│├─ tests/│ └─ hero.test.tsx # 将来用に雛形だけでも可 ├─ .env.local # APIキー等（Git管理外） ├─ next.config.ts├─ tailwind.config.js├─ tsconfig.json└─ package.json`

* * *

5. 命名・パスエイリアス（TypeScript）

* * *

`tsconfig.json` に**短い import**のためのパスを定義：

`{ "compilerOptions": { "baseUrl": ".", "paths": { "@site/*": ["app/(site)/*"], "@ui/*": ["app/(site)/components/ui/*"], "@layout/*": ["app/(site)/components/layout/*"], "@sections/*": ["app/(site)/sections/*"], "@features/*": ["features/*"], "@lib/*": ["lib/*"], "@types/*": ["types/*"], "@public/*": ["public/*"] } } }`

* * *

6. 新規セットアップ手順（ゼロから）

* * *

> ここは“復習しながら理解する”ため、**丁寧に分解**。

### 6.1 プロジェクト生成

`# ① プロジェクト作成 npx create-next-app@latest shiningresort # ② ディレクトリへ移動 cd shiningresort`

* Linter は **ESLint** でOK（推奨）
  
* Turbopack は **お好み**（最初はNoでも可）
  
* TypeScript は **Yes**
  

### 6.2 依存パッケージ

`# Tailwind / PostCSS npm i -D tailwindcss postcss autoprefixer # UI/アニメ npm i framer-motion`

### 6.3 Tailwind 初期化

`npx tailwindcss init -p`

`tailwind.config.js` を編集：

`module.exports = { content: [ "./app/**/*.{ts,tsx}", "./features/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}" ], theme: { extend: { colors: { brand: "var(--brand)", ink: "var(--ink)", line: "var(--line)", paper: "var(--paper)" } } }, plugins: []};`

### 6.4 グローバルCSS

`app/styles/globals.css`（または `app/globals.css`）を用意し、**カスタムプロパティ**中心で色/余白を統一。（既に別途提供している最新版を使用。`border-line/70` のようなTailwind未定義ユーティリティは**使わない**）

### 6.5 画像配置

`public/images/hero/hero-*.webp` と `public/images/logo/logo-white.svg` を配置。

### 6.6 ページ雛形

* `app/(site)/layout.tsx`：`<Header/> <Footer/>` を含む基本レイアウト。
  
* `app/(site)/page.tsx`：トップ。**Hero → About → News → Rooms → Experience → Access → Reserve** の順に**並べるだけ**。
  

* * *

7. Hero 再現ガイド（KOKON準拠）

* * *

* **クロスフェード**：3–4秒、`ease-in-out`、オーバーレイに**ごく薄い黒**（読みやすさ担保）。
  
* **ロゴ**：
  
  * **SP**：`width: 42–52vw` 目安で中央寄せ。
    
  * **PC**：`width: 18–22vw`、縦の中心から僅かに上。
    
* **キャッチ**：Serif で余白を贅沢に取り、**letter-spacing**やや広め。
  
* **ボタン**：織部色（`--brand`）。円形／角丸大きめ、ホバーで薄い白被せ。
  
* **ABOUTの中央停止**：
  
  * `useScroll` + `useTransform`（Framer Motion）
    
  * 例：`useTransform(scrollYProgress, [0.18, 0.42, 0.78, 1], [start, 0, 0, exit])`※ **0.42** 付近が“中央停止”、**0.78** 以降で離脱。画面によって微調整。
    

* * *

8. Reserve / Access

* * *

* **Tripla**：`data-tripla-booking-widget="search"` を持ったボタンを `features/reserve/*` に分離。
  
* **TableCheck**：外部リンクでOK。
  
* **Google Map**：`features/maps/GoogleMap.tsx` 経由で埋め込み（住所：`〒377-1524 群馬県吾妻郡嬬恋村鎌原1053-8599`）。
  

* * *

9. 運用ルール（初心者でも迷わない）

* * *

* **コミット**：1修正＝1コミット、メッセージは「fix:」「feat:」「chore:」で始める。
  
* **ブランチ**：機能ごとに `feat/hero-crossfade` 等。
  
* **学習メモ**：`docs/notes/2025-11-xx.md` を作り、**気づき・詰まり**を書いて残す。
  

* * *

10. 初回チェックリスト

* * *

* `npm run dev` でビルド通過（Tailwindの`@tailwind`/`@apply`エラーなし）
  
* **SP（iPhone 12 Pro相当）**・**PC** 両方でHeroの**クロスフェード**・**ロゴサイズ**・**ボタン大きさ**がKOKON参考値に近い
  
* スクロール時、**ABOUTが画面中央**で**一旦停止**→**自然に離脱**
  
* セクション間の余白：SP 64–80px / PC 120–160px
  
* 予約・アクセスの導線が明確
  

* * *

11. トラブルシュート（実際に遭遇した系）

* * *

* **Module not found: `./components/HeroGroup`**→ パス相違。**`app/(site)/sections/hero/HeroGroup.tsx`** に置き、`@sections/hero/HeroGroup` でimport。
  
* **Element type is invalid（undefined コンポーネント）**→ `export default` と `import` 形式の**取り違い**。定義側と呼び出し側を揃える。
  
* **Identifier 'React' / 'Hero' has already been declared**→ 同一スコープに**重複import/宣言**がある。**1ファイル1定義**を徹底。
  
* **Tailwind: Unknown at rule `@tailwind` / `@apply`**→ Tailwind未設定 or VSCode拡張の警告。**ビルドは通ればOK**。設定を再確認（`tailwind.config.js` と `postcss.config.js`）。
  
* **クラス `border-line/70` がない**→ Tailwindのクラスではない。**`border-[color:var(--line)/0.7]`** など `var(--line)`＋opacity構文に置換。
  

* * *

12. 次の一歩（具体タスク）

* * *

1. このMDに従い**新プロジェクトを作成**し、ディレクトリを骨組みだけでも組む
  
2. `public/images/hero/*` と `logo-white.svg` を配置
  
3. `HeroGroup` と `HeroCrossfade` の最小実装（3枚ループ/フェード）
  
4. `useHeroScroll` を組み込んで **ABOUT中央停止** を再現
  
5. SP/PCで**ロゴ・文字・ボタンのサイズ調整**
  
6. 余白とフォントを**KOKON寄せ**で詰める
  

* * *

付録 A：コマンド早見表

`# 開発サーバ npm run dev # Lint npm run lint # 依存インストール npm i`

* * *

付録 B：最小 page.tsx（例）

`// app/(site)/page.tsx import HeroGroup from "@sections/hero/HeroGroup"; import AboutSection from "@sections/about/AboutSection"; import NewsSection from "@sections/news/NewsSection"; import RoomsSection from "@sections/rooms/RoomsSection"; import ExperienceSection from "@sections/experience/ExperienceSection"; import AccessSection from "@sections/access/AccessSection"; import ReserveSection from "@sections/reserve/ReserveSection"; export default function Page() { return ( <main className="bg-[color:var(--paper)] text-[color:var(--ink)]"> <HeroGroup /> <AboutSection /> <NewsSection /> <RoomsSection /> <ExperienceSection /> <AccessSection /> <ReserveSection /> </main> );}`

* * *

付録 C：理解メモ（書き方の例）

* **なぜHeroはFramer Motion？**CSSだけでも可能だが、**スクロールに連動**した“中央停止→離脱”は `useScroll/useTransform` が直感的で拡張が効くから。
  
* **余白を広めにする理由**高級感・可読性・誤タップ防止。KOKONの印象（静けさ・ゆとり）に合わせる。
