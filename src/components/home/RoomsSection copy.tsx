"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      duration: 0.4,
      // ease は型エラーになるので入れない
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const ROOMS = [
  {
    id: "vintage",
    labelEn: "VINTAGE SUITE",
    titleJa: "ヴィンテージ スイート",
    description:
      "古材やアンティーク家具に囲まれた、落ち着きのあるスイートルーム。静かな時間をゆったりと過ごしたい方に。",
    imageSrc: "/images/rooms/room-1.webp", // ← ここだけ修正
  },
  {
    id: "japanese",
    labelEn: "JAPANESE DELUXE",
    titleJa: "和 Japanese Deluxe",
    description:
      "畳と木の質感を活かした、やわらかな和の客室。庭の緑とともに、素足でくつろぐ心地よさを。",
    imageSrc: "/images/rooms/room-2.webp", // ← ここも
  },
  {
    id: "western",
    labelEn: "WESTERN DELUXE",
    titleJa: "洋 Western Deluxe",
    description:
      "シンプルでスタイリッシュな洋室。ワーケーションや、二人での滞在にも使いやすいレイアウトです。",
    imageSrc: "/images/rooms/room-3.webp", // ← ここも
  },
];

export function RoomsSection() {
  return (
    <section id="rooms" className="bg-base-ivorySoft py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs tracking-[0.3em] text-brand-green uppercase">
          ROOMS
        </p>
        <h2 className="mt-3 text-xl text-ink">客室</h2>

        <motion.div
          className="mt-10 grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {ROOMS.map((room) => (
            <motion.article
              key={room.id}
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: "0 18px 40px rgba(0,0,0,0.08)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="overflow-hidden rounded-lg border border-border-neutral bg-white/80"
            >
              {/* 画像エリア */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gallery-warm">
                <Image
                  src={room.imageSrc}
                  alt={room.titleJa}
                  fill
                  className="h-full w-full object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>

              {/* テキストエリア */}
              <div className="p-4">
                <p className="text-xs tracking-[0.25em] text-brand-green uppercase">
                  {room.labelEn}
                </p>
                <h3 className="mt-2 text-base text-ink">{room.titleJa}</h3>
                <p className="mt-3 text-xs leading-relaxed text-ink-subtle">
                  {room.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
