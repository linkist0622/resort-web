// src/app/_components/Hero.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const DESKTOP_BG = "/images/hero/hero-shelf-desktop-v2.webp";
const MOBILE_BG = "/images/hero/hero-shelf-mobile-v2.webp";
const LOGO = "/images/logo/resort-logo_transparent.webp";

export default function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);

  // Hero セクションのスクロール進捗（0〜1）
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // 背景（棚）のパララックス
  const frameY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const frameOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  // ロゴの動き：少しだけ上に＆ほんの少し縮む
  const logoY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const logoScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section
      ref={ref}
      className="relative h-screen overflow-hidden bg-gallery-wall"
    >
      {/* ───────── 背景：棚（PC/SPで画像切り替え） ───────── */}
      <motion.div
        style={{ y: frameY, opacity: frameOpacity }}
        className="pointer-events-none absolute inset-0"
      >
        {/* PC用（横長） */}
        <Image
          src={DESKTOP_BG}
          alt="SHININGresort shelf background desktop"
          fill
          priority
          sizes="100vw"
          className="hidden object-cover md:block"
        />

        {/* SP用（縦長） */}
        <Image
          src={MOBILE_BG}
          alt="SHININGresort shelf background mobile"
          fill
          sizes="100vw"
          className="block object-cover md:hidden"
        />
      </motion.div>

      {/* 下からのごく薄いグラデーション（テキストの可読性UP） */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/10 via-ink/5 to-transparent" />

      {/* ───────── 中央ロゴ（新しい resort-logo.webp） ───────── */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-6">
          <motion.div
            style={{ y: logoY, scale: logoScale }}
            className="relative h-60 w-60 max-w-full md:h-80 md:w-80"
          >
            <Image
  src="/images/logo/resort-logo_no_bg.webp"
  alt="SHININGresort ロゴ"
  fill
  className="object-contain"
  priority
/>
          </motion.div>
        </div>
      </div>

      {/* ───────── 左下の詩＋英文（KOKONレイアウト） ───────── */}
      <div
        className="
          pointer-events-none
          absolute left-4 bottom-24
          max-w-xs
          md:left-16 md:bottom-24 md:max-w-md
          flex flex-col
          z-20
        "
      >
        {/* 日本語：セリフ体 */}
        <p className="font-serif text-base md:text-2xl leading-relaxed text-ink">
          2026年春、一期一会のリゾート、ここに。
        </p>

        {/* 英文：ヘッディング用フォント＋トラッキング強め */}
        <p className="mt-2 font-heading text-[11px] md:text-sm tracking-[0.2em] uppercase text-ink-subtle">
          Grand Opening Spring 2026
        </p>
      </div>

      {/* ───────── Scroll インジケータ（中央下） ───────── */}
      <div className="absolute inset-x-0 bottom-8 z-10 flex items-center justify-center">
        <div className="flex items-center gap-4">
          <div className="h-px w-16 bg-border-neutral" />
          <div className="flex flex-col items-center text-[10px] uppercase tracking-[0.2em] text-ink-subtle font-heading">
            <span>Scroll</span>
            <span className="mt-1 inline-block h-6 w-px bg-border-neutral" />
          </div>
          <div className="h-px w-16 bg-border-neutral" />
        </div>
      </div>
    </section>
  );
}
