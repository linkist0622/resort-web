<!--
リポジトリ: resort-web
目的: このプロジェクトで速やかに安全に作業できるよう、AIエージェント向けの具体的で実用的な指示をまとめる。
-->

# Copilot / AI エージェント向け要点 — `resort-web`

短く要約:
- フレームワーク: Next.js (App Router, Next 16) + React 19 + TypeScript
- スタイル: Tailwind CSS (`tailwind.config.js` あり)
- 主な場所: `src/app/` (ルートページ), `src/components/` (UI), `public/images/` (静的画像)

よく使うコマンド（まずはこれを確認）:
- `npm run dev` — 開発サーバ（http://localhost:3000）
- `npm run build` — 本番ビルド
- `npm start` — 本番サーバ起動
- `npm run lint` — ESLint

プロジェクト固有の観察とルール（AIが守ること）:
- App Router を使っているため、ページ編集は `src/app/page.tsx` や `src/app/layout.tsx` を優先して変更。
- クライアントコンポーネントにはファイル先頭に `"use client"` がある（例: `src/components/Hero.tsx`）。これを削除・追加すると SSR/CSR の挙動が変わるので注意する。
- 画像は `next/image` を使用し `fill`, `priority`, `sizes` など属性が使われている。`public/images/*` にあるアセット名を更新する場合は参照箇所を忘れずに修正。
- グローバル CSS は `src/app/globals.css`。Tailwind のユーティリティが広く使われている。
- 型は TypeScript で厳密ではあるため、API 型やコンポーネント props を変更する際は `tsconfig.json` を壊さないこと。

変更方針（守る）:
- 小さく安全な変更を心がける（1ファイル or 1コンポーネント単位）。大規模リファクタは事前に提案を出す。
- 環境変数やシークレットは絶対にコミットしない。`.env.example` を参照して作業する。
- lint エラーは PR 前に可能な限り解消する（`npm run lint`）。ただし自動修正が必要な場合は `--fix` を提案して実行許可を求める。

注意すべき既知パターン（具体例）:
- `Hero.tsx` は `useScroll` / `framer-motion` を使うクライアントコンポーネント。スクロールやアニメーションの副作用がある変更はブラウザで挙動確認を行う。
- コンポーネントは `src/components/` 以下に分割されている。再利用可能な UI はここに追加する。
- API が別ディレクトリ（`server/` または `api/`）にある場合は API 層を壊さない。現状このリポジトリには API スクリプトが見当たらない（フロントエンド主体）。

PR 作成時チェックリスト:
- 目的: 1行で要約
- 変更点: 影響範囲をファイル名で列挙
- 確認手順: ローカルでの動作確認コマンド（例: `npm run dev`）と期待結果
- Lint/Build: `npm run lint` と `npm run build` を実行したか

補足: このファイルは自動スキャンで取得した情報（`README.md`, `package.json`, `src/` の一部）に基づき作成しました。より深い統合や CI の情報（例: GitHub Actions ワークフロー）がある場合は、そのファイルパスを教えてください。追加で以下を提供してもらえれば、更に指示を精緻化します:
- CI ワークフロー (`.github/workflows/*`) があればパス
- 環境変数定義ファイル（`.env.example`）

---
この指示で不足している点や、特に強調して欲しい作業パターンがあれば教えてください。
