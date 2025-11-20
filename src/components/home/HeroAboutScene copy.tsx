"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// Hero 背景用画像（public 配下）
const HERO_IMAGES = [
  "/images/hero/hero-1.webp",
  "/images/hero/hero-2.webp",
  "/images/hero/hero-3.webp",
];

// 画像ごとのオーバーレイ濃さ（1,2 は明るめに暗めのオーバーレイ）
const OVERLAY_OPACITY = [0.6, 0.6, 0.35];

export function HeroAboutScene() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // ===== ロゴの動き（%ベース） =====
  // 中央付近から上へ移動しつつ縮小、終盤で少し抜ける
  const logoY = useTransform(
    scrollYProgress,
    [0, 0.35, 0.85, 1],
    ["0%", "-35%", "-35%", "-40%"]
  );
  const logoScale = useTransform(scrollYProgress, [0, 0.35, 1], [1, 0.8, 0.8]);
  const logoOpacity = useTransform(scrollYProgress, [0, 1], [1, 1]);

  // ===== ABOUT 停止位置を「画面の40%」に揃えるための計測 =====
  const [layout, setLayout] = useState<{ vh: number; aboutStopY: number }>({
    vh: 0,
    aboutStopY: 0,
  });

  useEffect(() => {
    if (!aboutRef.current || typeof window === "undefined") return;

    const rect = aboutRef.current.getBoundingClientRect();
    const vh = window.innerHeight;

    const targetTop = vh * 0.4; // 画面上から40%の位置
    const currentTop = rect.top;

    // 必要な translateY(px) を算出
    const stopY = targetTop - currentTop;

    setLayout({ vh, aboutStopY: stopY });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 開始位置・終了位置（px）を計算
  const startY = layout.aboutStopY + layout.vh * 0.35; // かなり下からスタート
  const endY = layout.aboutStopY - layout.vh * 0.4;   // 終盤で少し上に抜ける

  // ===== ABOUT の移動カーブ（下からせり上がる） =====
  const aboutY = useTransform(
    scrollYProgress,
    [0.35, 0.55, 0.85, 1],
    [startY, layout.aboutStopY, layout.aboutStopY, endY]
  );

  // ===== ABOUT のフェードイン（停止時点 0.55 までに完全表示） =====
  const aboutOpacity = useTransform(
    scrollYProgress,
    [0.45, 0.55],
    [0, 1]
  );

  // ===== 背景クロスフェード =====
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length),
      16000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[460vh] bg-black text-base-ivory"
    >
      {/* sticky で1画面分固定 */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* 背景クロスフェード */}
        <div className="absolute inset-0">
          {HERO_IMAGES.map((src, index) => (
            <motion.div
              key={src}
              className="absolute inset-0"
              animate={{ opacity: index === currentIndex ? 1 : 0 }}
              transition={{ duration: 4 }}
            >
              <Image
                src={src}
                alt={`SHININGresort hero ${index + 1}`}
                fill
                priority={index === 0}
                className="h-full w-full object-cover"
                sizes="100vw"
              />
              <div
                className="absolute inset-0"
                style={{ backgroundColor: `rgba(0,0,0,${OVERLAY_OPACITY[index]})` }}
              />
            </motion.div>
          ))}
        </div>

        {/* 下からのグラデーションで文字を浮かせる */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* 詩コピー（左下寄せ） */}
        <div className="pointer-events-none absolute left-4 bottom-24 max-w-xs md:left-10 md:bottom-16 md:max-w-md flex flex-col">
          <p className="font-serif text-base md:text-2xl leading-relaxed text-base-ivory drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
            2026年春、一期一会のリゾート、ここに。
          </p>
          <p className="mt-2 font-heading text-[13px] md:text-sm tracking-[0.2em] uppercase text-base-ivory/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
            Grand Opening Spring 2026
          </p>
        </div>

        {/* コンテンツ（ロゴ + ABOUT） */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-6">
            {/* ロゴ（動きながら縮む） */}
            <motion.div
              style={{ y: logoY, scale: logoScale, opacity: logoOpacity }}
              className="relative h-52 w-[32rem] max-w-full md:h-[22rem] md:w-[64rem]"
            >
              <Image
                src="/images/logo/shiningresort-logo.png"
                alt="SHININGresort ロゴ"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* ABOUT（カード上端が画面40%に停止、停止時点で完全表示） */}
            <motion.div
              ref={aboutRef}
              style={{ y: aboutY, opacity: aboutOpacity }}
              className="max-w-lg md:max-w-2xl font-body text-[16px] leading-relaxed text-base-ivory/90 md:text-xl md:leading-relaxed"
            >
              <p>
                浅間山の麓、森に抱かれた静かな土地に佇み
                ひと部屋ごとにテーマを持つ客室と
                お部屋や共有空間の各所にアートが飾られた
                日常からそっと離れる時間をお届けします。
              </p>
              <p className="mt-4">
                アート、茶の時間、星空。北軽井沢ならではの空気とともに、
                自分本来の輝きに戻っていくような滞在をお楽しみください。
              </p>

              <p className="mt-6">
                静かなギャラリーで作品と向き合うひととき。<br />
                朝の森で淹れる一杯のコーヒー。<br />
                夜は星空と音に身をゆだねて。
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
