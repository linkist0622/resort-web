# SHININGresort — プロジェクト前提ファイル v1.3（更新）

注: 本ファイルはリポジトリの現状（Next.js 16 / React 19 / TypeScript 5 等）に合わせて文言と手順を整理・補強しました。

## 1. プロジェクト要約

- プロジェクト名: SHININGresort Webサイト開発（KOKON 再現フェーズ → オリジナル化）
- 目的: 参考サイト（宿-SHUKU- 古今）の「レイアウト／アニメーション／スクロール挙動」を学習・再現し、最終的に SHININGresort のオリジナルサイトへ発展させる。
- 開発方針: 開発初心者が AI を活用して学びながら実装する。コードは「なぜこうするか」を重視して記述・解説する。

著作権ポリシー（厳守）:
- 参考サイトのテキスト・画像・ロゴなどをそのまま転載・公開しないこと。再現対象は「構造・挙動・デザイン思想」に限定する。
- 公開時は必ずオリジナルの文言・写真・ライセンス素材に差し替える。

## 2. 対象読者と作業スタイル

- 対象: コーディング初心者〜中級。AI（Copilot 等）を「ペアプログラマ」として活用する前提。
- ドキュメント方針: 実装はステップ分けして提示し、各ステップに「なぜやるか」と「AI へ投げるプロンプト例」を添える。

例（手順フォーマット）:
- STEP 1: `src/app/page.tsx` に HeroSection を読み込む
- なぜ: トップページの骨組みをここで作るため
- AI プロンプト例: 「KOKON のヒーロー風に、画面いっぱいの画像＋キャッチコピーを表示する React コンポーネントを書いて」

## 3. 技術スタック（本リポジトリの現状）

- Next.js 16（App Router）
- React 19
- TypeScript 5
- Tailwind CSS
- Framer Motion
- デプロイ想定: Vercel（GitHub 連携）

重要: `package.json` にあるスクリプトを優先して利用する（例: `npm run dev`, `npm run build`, `npm start`, `npm run lint`）。

## 4. 実行と開発ワークフロー（必須確認項目）

ローカル開発:
```powershell
npm install
npm run dev
```

本番ビルド:
```powershell
npm run build
npm start
```

Lint:
```powershell
npm run lint
```

チェックリスト（PR 前）:
- `npm run lint` を実行し重大な警告は対処
- `npm run build` が通ること（型エラーやビルド崩れを確認）
- 変更は最小単位で行い、変更ファイルを PR に明記

## 5. プロジェクト構成（優先参照パス）

- ルート: `package.json`, `README.md`, `next.config.ts`, `tsconfig.json`
- ページ: `src/app/page.tsx`, `src/app/layout.tsx`, `src/app/*/page.tsx`
- コンポーネント: `src/components/*`（再利用コンポーネントは `src/components/common/`）
- データ: `src/data/*`（Phase1 はコード内定義）
- 画像: `public/images/*`

現状の観察（実例）:
- `src/app/_components/Hero.tsx` はクライアントコンポーネント（先頭に `"use client"`）で、`framer-motion` と `next/image` を利用している。スクロール依存のロジックがあるので、変更時はブラウザで挙動確認を必ず行う。

## 6. フェーズと短期ゴール

Phase 1 — KOKON 再現（優先）:
- トップページのレイアウト、パララックス／フェード等のアニメーション、レスポンシブ調整を実装。
- コンテンツは `src/data/*.ts` にハードコード。

Phase 2 — オリジナル化 & データ化:
- Supabase 等でデータ化（news, rooms 等）。管理画面は後段で導入。

Phase 3 — 運用 & 最適化:
- アクセシビリティ、パフォーマンス最適化、SEO 対策、CI（GitHub Actions）整備

## 7. 典型的な作業テンプレート（AI に投げるときの例）

バグ修正テンプレート（そのまま貼れる）:
- 目的: `src/app/_components/Hero.tsx` のモバイル背景画像が表示されない問題を修正
- 範囲: `src/app/_components/Hero.tsx`, `public/images/*`
- 再現手順: `npm run dev` → ブラウザで `http://localhost:3000` → モバイル幅を確認
- 期待: 背景が 404 にならず表示される。修正後 `npm run lint` と `npm run build` を実行

新規コンポーネント作成テンプレート:
- 目的: 再利用可能な CTA ボタン `src/components/common/CtaButton.tsx` を作る
- 要件: Tailwind でスタイル、`aria-label` を受け取り、テスト可能
- 確認: `npm run dev` で見た目を確認、`npm run build` が通る

AI プロンプト例（成功率が高い形式）:
"`目的: [何を達成したいか]`、`範囲: [ファイル名]`、`期待結果: [受け入れ条件]`、`コマンド: npm run dev, npm run build` — これに基づいて変更を提案し、必要なコードを出力してください。"

## 8. コーディングルール／注意点（このリポジトリ特有）

- クライアント／サーバの境界: クライアントコンポーネントはファイル先頭に `"use client"` を明示している。これを誤って削除するとレンダリングが変わる。
- 画像: `next/image` の `fill`・`priority`・`sizes` 属性が多用されている。アセット名を変更する際は参照箇所を横断検索して更新する。
- 型: TypeScript を採用しているので、型定義を壊さないこと。`tsconfig.json` を尊重する。
- スタイル: Tailwind をベースにしているため、ユーティリティクラスで実装するのが標準。

## 9. PR／CI に関するチェックリスト

- PR タイトル: 目的を短く（例: "Fix: Hero image mobile 404")
- PR 本文: 変更理由・影響範囲・ローカル再現手順・期待結果を明記
- 自動チェック: `npm run lint`, `npm run build` を通す
- 可能ならスクリーンショット（視覚的変更がある場合）を添付

## 10. 今後欲しい情報（私に伝えて欲しいこと）

- CI ワークフロー（存在するなら `.github/workflows/*`）
- `.env.example` があればパス
- 既存のデザインアセットやフォントガイド（もしあれば `public/fonts` 等）

---

更新履歴: v1.3 — Next/React/TS バージョンの現状反映、実行コマンドと AI テンプレートの追加。

この修正版で問題なければ保存して次のタスク（セクション実装のステップ分解など）に進めます。追加してほしい観点があれば教えてください。

