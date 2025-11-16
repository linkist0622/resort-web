// src/components/home/HeroSection.tsx
"use client";

import { MotionSection } from "@/components/common/MotionSection";

export function HeroSection() {
  return (
    <MotionSection
      className="
        relative min-h-screen flex items-center
        bg-[#0d0c0b]
        bg-[url('/images/hero/hero-placeholder.webp')]
        bg-cover bg-center
        text-white
      "
    >
      {/* 背景の上に重ねるグラデーションレイヤー（文字を読みやすくする） */}
      <div className="absolute inset-0">
        <div className="h-full w-full bg-gradient-to-t from-black via-black/65 to-transparent" />
      </div>

      {/* コンテンツ本体 */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-24 md:py-32">
        <p className="text-[10px] tracking-[0.35em] uppercase mb-6 text-neutral-300">
          SHININGRESORT
        </p>

        <h1 className="text-3xl md:text-5xl lg:text-[3.1rem] leading-relaxed md:leading-[1.9] mb-6 md:mb-8">
          北軽井沢の静けさと、<br className="hidden md:block" />
          光のうつろいに包まれる、<br className="hidden md:block" />
          ギャラリーホテル。
        </h1>

        <p className="text-sm md:text-base text-neutral-200 max-w-xl md:max-w-2xl">
          深い森と澄んだ空気、季節ごとに表情を変える光と影。アートと自然、
          そして静けさを楽しむための、SHININGresortの入り口となる部屋です。
          ※ この文章は仮テキストで、公開前にオリジナルコピーに差し替えます。
        </p>
      </div>
    </MotionSection>
  );
}
