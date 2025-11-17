// src/components/home/HeroSection.tsx
"use client";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center bg-black text-white">
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-24 md:py-32">
        {/* ★ ロゴ（テスト用に生の img タグ） */}
        <div className="mb-6 flex justify-start">
          <img
            src="/images/logo/shiningresort-logo.PNG" // さっきブラウザで表示できたURLと同じ
            alt="SHININGresort"
            className="h-auto w-[170px] md:w-[220px]"
          />
        </div>

        <h1 className="mb-6 text-3xl leading-relaxed md:mb-8 md:text-5xl md:leading-[1.9] lg:text-[3.1rem]">
          北軽井沢の静けさと、
          <br className="hidden md:block" />
          光のうつろいに包まれる、
          <br className="hidden md:block" />
          ギャラリーホテル。
        </h1>

        <p className="max-w-xl text-sm text-neutral-200 md:max-w-2xl md:text-base">
          ロゴ表示テスト用のシンプルな HeroSection です。
        </p>
      </div>
    </section>
  );
}
