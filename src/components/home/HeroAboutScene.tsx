"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

/**
 * HeroAboutScene.tsx
 *
 * - ABOUT は「句読点（。）」で分割して 1行1文 に表示（長文は '、' でさらに分割する簡易ロジック）
 * - MB の文字サイズを少し大きめに（text-[16px]）、PC は md:text-[18px]
 * - 文字間（tracking）を全体で少し広げる（tracking-[0.02em]）
 * - 詩（左下）は日本語/英字ともに font-semibold、上下の gap を狭める（mt-0.5）
 * - ロゴの停止位置はヘッダー高さに合わせる（Header が dispatch する custom event を受け取る）
 * - ABOUT は「カード上端が画面上から 40% で停止」する（aboutRef + innerHeight で算出）
 */

const HERO_IMAGES = [
  "/images/hero/hero-1.webp",
  "/images/hero/hero-2.webp",
  "/images/hero/hero-3.webp",
];

const OVERLAY_OPACITY = [0.6, 0.6, 0.35];

// --- 本文テキスト（例） ---
// 実際はi18n/propsで差し替える想定。句読点で分割して1行1文化する。
const ABOUT_TEXT = `浅間山の麓、森に抱かれた静かな土地に佇む SHININGresort。ひと部屋ごとにテーマを持つ客室と、小さなギャラリーのような共有空間で、日常からそっと離れる時間をお届けします。アート、茶の時間、星空。北軽井沢ならではの空気とともに、自分本来の輝きに戻っていくような滞在をお楽しみください。`;

function splitIntoLines(source: string) {
  // 「。」で分割して1文ごとに。空要素は削除。
  const sentences = source
    .split("。")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => s + "。");

  // 長い文は「、」でさらに分割してバランス調整（縦長に見えるように）
  const result: string[] = [];
  for (const sent of sentences) {
    // 文字数の閾値。必要なら調整。
    const LONG_LEN = 48;
    if (sent.replace(/\s+/g, "").length > LONG_LEN && sent.includes("、")) {
      const parts = sent.split("、").map((p) => p.trim()).filter(Boolean);
      // 再結合して長さを均す（2個ごとに1行化など）
      let buffer = "";
      for (let i = 0; i < parts.length; i++) {
        if (!buffer) buffer = parts[i] + "、";
        else buffer += parts[i] + (i === parts.length - 1 ? "。" : "、");

        if (buffer.replace(/\s+/g, "").length >= LONG_LEN || i === parts.length - 1) {
          result.push(buffer.replace(/、。$/, "。"));
          buffer = "";
        }
      }
    } else {
      result.push(sent);
    }
  }

  // Safety: ensure at least one line
  if (result.length === 0) return [source];
  return result;
}

export function HeroAboutScene() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // --- header height & derived percent stop for logo ---
  // Header は外部で次のように event を dispatch している想定:
  // window.dispatchEvent(new CustomEvent("sh-header-height", { detail: { height: headerRef.current.offsetHeight } }))
  const [headerH, setHeaderH] = useState<number>(0);
  const [headerStopPercent, setHeaderStopPercent] = useState<number | null>(null);

  useEffect(() => {
    const handler = (e: any) => {
      const h = Number(e?.detail?.height) || 0;
      setHeaderH(h);
      // convert to vh percent (slightly offset so logo sits just under header)
      const vh = window.innerHeight || 800;
      const margin = 8; // px margin below header
      const percent = ((h + margin) / vh) * 100;
      setHeaderStopPercent(percent);
    };
    window.addEventListener("sh-header-height", handler as EventListener);
    // also attempt immediate read if header height was set on window
    // (in case Header dispatched earlier)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if ((window as any).__sh_header_height) {
      const h = Number((window as any).__sh_header_height);
      const vh = window.innerHeight || 800;
      const margin = 8;
      setHeaderH(h);
      setHeaderStopPercent(((h + margin) / vh) * 100);
    }
    return () => window.removeEventListener("sh-header-height", handler as EventListener);
  }, []);

  // --- logo movement: use percent stops if headerStopPercent available, otherwise fallback to defaults ---
  const defaultLogoStops = ["0%", "-35%", "-35%", "-40%"];
  const logoStops = headerStopPercent !== null && !Number.isNaN(headerStopPercent)
    ? ["0%", `-${Math.max(18, Math.min(45, headerStopPercent))}%`, `-${Math.max(18, Math.min(45, headerStopPercent))}%`, `-${Math.max(18, Math.min(45, headerStopPercent + 5))}%`]
    : defaultLogoStops;

  const logoY = useTransform(scrollYProgress, [0, 0.35, 0.85, 1], logoStops as any);
  const logoScale = useTransform(scrollYProgress, [0, 0.35, 1], [1, 0.8, 0.8]);
  const logoOpacity = useTransform(scrollYProgress, [0, 1], [1, 1]);

  // --- ABOUT stop calculation (card top aligns to vh * 0.4) ---
  const [layout, setLayout] = useState<{ vh: number; aboutStopY: number }>({ vh: 0, aboutStopY: 0 });

  useEffect(() => {
    // calculate after mount / layout
    const calc = () => {
      if (!aboutRef.current) return;
      const rect = aboutRef.current.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      const targetTop = vh * 0.4; // 40% target
      const currentTop = rect.top;
      const stopY = targetTop - currentTop;
      setLayout({ vh, aboutStopY: stopY });
    };
    // run on mount and also on resize
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const startY = layout.aboutStopY + layout.vh * 0.35;
  const endY = layout.aboutStopY - layout.vh * 0.4;

  // ABOUT movement: same curve as earlier good version
  const aboutY = useTransform(scrollYProgress, [0.35, 0.55, 0.85, 1], [startY, layout.aboutStopY, layout.aboutStopY, endY]);

  // ABOUT opacity: begin fading slightly after poem area, finish by stop (0.45 -> 0.55)
  const aboutOpacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);

  // background crossfade
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length), 16000);
    return () => clearInterval(id);
  }, []);

  // prepare ABOUT lines using splitting logic
  const aboutLines = splitIntoLines(ABOUT_TEXT);

  return (
    <section ref={sectionRef} className="relative min-h-[460vh] bg-black text-base-ivory">
      {/* sticky 1画面 */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* 背景 */}
        <div className="absolute inset-0">
          {HERO_IMAGES.map((src, idx) => (
            <motion.div key={src} className="absolute inset-0" animate={{ opacity: idx === currentIndex ? 1 : 0 }} transition={{ duration: 4 }}>
              <Image src={src} alt={`SHININGresort hero ${idx + 1}`} fill priority={idx === 0} className="h-full w-full object-cover" sizes="100vw" />
              <div className="absolute inset-0" style={{ backgroundColor: `rgba(0,0,0,${OVERLAY_OPACITY[idx]})` }} />
            </motion.div>
          ))}
        </div>

        {/* 下グラデ */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* 詩：左下（日本語＋英字） */}
        <div className="pointer-events-none absolute left-4 bottom-24 max-w-xs md:left-10 md:bottom-16 md:max-w-md flex flex-col">
          <p className="font-serif font-semibold text-base md:text-2xl leading-snug text-base-ivory drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
            2026年春、一期一会のリゾート、ここに。
          </p>
          <p className="mt-0.5 font-heading font-semibold text-[13px] md:text-sm tracking-[0.16em] uppercase text-base-ivory/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
            Grand Opening Spring 2026
          </p>
        </div>

        {/* コンテンツ：ロゴ + ABOUT */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-6">
            {/* ロゴ */}
            <motion.div style={{ y: logoY, scale: logoScale, opacity: logoOpacity }} className="relative h-52 w-[32rem] max-w-full md:h-[22rem] md:w-[64rem]">
              <Image src="/images/logo/shiningresort-logo.png" alt="SHININGresort ロゴ" fill className="object-contain" priority />
            </motion.div>

            {/* ABOUT（1行1文表示。MBでは少し大きめ。trackingでゆったり） */}
            <motion.div
              ref={aboutRef}
              style={{ y: aboutY, opacity: aboutOpacity }}
              className="max-w-md md:max-w-2xl font-body text-[16px] md:text-[18px] leading-relaxed text-base-ivory/90 tracking-[0.02em]"
            >
              {aboutLines.map((line, i) => (
                <p key={i} className="mb-2">
                  {line}
                </p>
              ))}

              {/* 余白行 + 3行のサンプル文（バランスのため、必要で差し替え可） */}
              <div className="mt-4" />
              <p className="mt-6">静かなギャラリーで作品と向き合うひととき。</p>
              <p>朝の森で淹れる一杯のコーヒー。</p>
              <p>夜は星空と音に身をゆだねて。</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroAboutScene;
