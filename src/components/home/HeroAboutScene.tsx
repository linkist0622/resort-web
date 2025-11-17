// src/components/home/HeroAboutScene.tsx
"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const HERO_IMAGES = [
  "/images/hero/hero-01.webp",
  "/images/hero/hero-02.webp",
  "/images/hero/hero-03.webp",
];

export function HeroAboutScene() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // このコンテナ全体（約2画面分）をスクロールの対象にする
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // ── ロゴの動き：ゆっくり上に抜ける ─────────────────
  // 0%〜35%あたりで「中央 → 画面の外」まで動くイメージ
  const logoY = useTransform(scrollYProgress, [0, 0.25, 0.95, 1], ["0%", "-55%", "-55%", "-180%"]);

  // ── SCROLL インジケーター：最初だけ表示 ───────────────
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  // ── About テキスト：下から上へせり上がって中央で“落ち着く” ──
  // 0.15〜0.5 の間で 画面下 → 中央 へ移動
  const aboutY = useTransform(scrollYProgress, [0, 0.35, 0.6, 0.95, 1], ["110%", "110%", "10%", "10%", "-115%"]);
  // 少し遅れてフェードイン
  const aboutOpacity = useTransform(scrollYProgress, [0.4, 0.9], [0, 1]);

  // 背景画像のクロスフェード
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000); // 4秒ごとに切り替え
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[240vh] bg-black text-white"
    >
      {/* stickyなHeroレイヤー（常に画面1枚分） */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* 背景スライドショー */}
        <div className="absolute inset-0">
          {HERO_IMAGES.map((src, index) => (
            <motion.div
              key={src}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${src})` }}
              animate={{ opacity: index === activeIndex ? 1 : 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          ))}
          {/* 黒のグラデーションオーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>

        {/* コンテンツレイヤー */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
          {/* 中央ロゴ（あとでロゴ画像に差し替え可） */}
          <motion.div style={{ y: logoY }} className="flex flex-col items-center text-center">
            <p className="mb-3 text-[15px] tracking-[0.3em] uppercase text-neutral-300">
              2026 GRAND OPEN
            </p>
            <div className="mb-6 flex justify-center">
             <Image
               src="/images/logo/shiningresort-logo.PNG"
               alt="SHININGresort"
               width={220}
               height={60}
               className="h-auto w-[170px] md:w-[220px]"
               priority
           />
           {/* ※ もし <img> のままが良ければ↓でもOK
           <img
             src="/images/logo/shiningresort-logo.png"
             alt="SHININGresort"
             className="h-auto w-[170px] md:w-[220px]"
           />
           */}
            </div>    
          </motion.div>

          {/* SCROLL インジケーター */}
          <motion.div
            style={{ opacity: scrollOpacity }}
            className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.25em] uppercase text-neutral-300"
          >
            <div className="flex flex-col items-center gap-2">
              <span>SCROLL</span>
              <span className="h-6 w-px bg-neutral-500" />
            </div>
          </motion.div>

          {/* About テキストブロック（Hero上に重ねる） */}
          <motion.div
            style={{ y: aboutY, opacity: aboutOpacity }}
            className="pointer-events-none absolute inset-x-0 mx-auto flex max-w-3xl items-center justify-center px-6"
          >
            <div className="pointer-events-auto rounded-2xl bg-black/55 px-6 py-8 backdrop-blur-sm md:px-10 md:py-10">
              <p className="mb-4 text-[10px] tracking-[0.35em] uppercase text-neutral-400">
                ABOUT
              </p>
              <h2 className="mb-4 text-lg tracking-[0.12em] md:text-2xl">
                北軽井沢の静けさに、そっと灯りをともす宿。
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-neutral-200 md:text-base md:leading-[1.9]">
                <p>
                  北軽井沢の森に囲まれたこの場所は、季節ごとに光と風の表情が変わる、
                  少しだけ特別な静けさをもったエリアです。喧騒から少しだけ離れて、
                  深く呼吸をするための時間を過ごしていただきたい、そんな思いから
                  SHININGresort は生まれました。
                </p>
                <p>
                  建物全体をギャラリーとしてとらえ、客室や共有スペース、廊下にいたるまで、
                  アートとオブジェ、光の入り方を一つひとつ丁寧に設えています。
                  大きな主張ではなく、「ふと目にとまる心地よさ」を積み重ねていくことを
                  大切にしています。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
