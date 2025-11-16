// src/components/home/HeroSection.tsx
"use client";

import { MotionSection } from "@/components/common/MotionSection";

export function HeroSection() {
  return (
    <MotionSection className="relative min-h-screen flex items-center bg-[#0d0c0b] text-white">
      {/* 背景にグラデーションのオーバーレイ（あとで画像を足してKOKON寄せにする余地） */}
      <div className="absolute inset-0">
        {/* ここに後で bg-[url('/images/hero/main.jpg')] などを追加してもOK */}
        <div className="h-full w-full bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      {/* コンテンツ本体 */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-24 md:py-32">
        {/* 小さい英字のタグライン */}
        <p className="text-[10px] tracking-[0.35em] uppercase mb-6 text-neutral-300">
          SHININGRESORT
        </p>

        {/* メインキャッチ：KOKONの「行間広め・静かなトーン」に寄せた感じ */}
        <h1 className="text-3xl md:text-5xl lg:text-[3.1rem] leading-relaxed md:leading-[1.9] mb-6 md:mb-8">
          北軽井沢の静けさと、<br className="hidden md:block" />
          光のうつろいに包まれる、<br className="hidden md:block" />
          ギャラリーホテル。
        </h1>

        {/* 説明文（あとで完全オリジナルコピーに差し替える前提の仮テキスト） */}
        <p className="text-sm md:text-base text-neutral-200 max-w-xl md:max-w-2xl">
          深い森と澄んだ空気、季節ごとに表情を変える光と影。アートと自然、
          そして静けさを楽しむための、SHININGresortの入り口となる部屋です。
          ※ この文章は仮テキストで、公開前にオリジナルコピーに差し替えます。
        </p>
      </div>
    </MotionSection>
  );
}
