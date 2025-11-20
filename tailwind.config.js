/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 1. ベース / 背景
        base: {
          ivory: "#F5EFE5",     // bg-base-ivory, text-base-ivory
          ivorySoft: "#F2E8DA", // bg-base-ivorySoft, text-base-ivorySoft
        },

        // ギャラリー系
        gallery: {
          wall: "#F4F1E8",  // ★ 追加：ギャラリーの壁色（メイン背景）
          warm: "#E3DFD7",
          stone: "#B5B1A8",     // bg-gallery-stone, text-gallery-stone
        },

        // 2. ブランドカラー（光 × 緑）
        brand: {
          gold: "#C9A25A",       // bg-brand-gold, text-brand-gold
          goldLight: "#D8BA68",  // bg-brand-goldLight
          goldDark: "#9E7C3E",   // bg-brand-goldDark
          green: "#123026",      // text-brand-green, bg-brand-green
          greenDeep: "#0F1A18",  // ENCOUNTER 用
        },

        // 3. テキスト / ニュートラル
        ink: {
          DEFAULT: "#181818",    // text-ink, bg-ink
          subtle: "#444444",     // text-ink-subtle
        },

        border: {
          neutral: "#D5CBBE",    // border-border-neutral
        },

        // 4. アクセント（くすみ紅）
        accent: {
          red: "#A5423F",        // bg-accent-red, text-accent-red
          redLight: "#C75B55",   // bg-accent-redLight
        },
      },
    },
  },
  plugins: [],
};
