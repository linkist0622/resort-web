"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ROOMS = [
  {
    id: 1,
    title: "ヴィンテージ — Vintage Suite",
    img: "/images/rooms/room-1.webp",
    desc: "古き良き趣と現代の快適さを併せ持つスイート。",
  },
  {
    id: 2,
    title: "和 — Japanese Deluxe",
    img: "/images/rooms/room-2.webp",
    desc: "畳と木のぬくもり。静けさを味わう上質な和の空間。",
  },
  {
    id: 3,
    title: "洋 — Western Deluxe",
    img: "/images/rooms/room-3.webp",
    desc: "開放的で寛げる洋のテイストを取り入れたお部屋。",
  },
];

export function RoomsSection() {
  return (
    <section id="rooms" className="py-16 bg-black text-base-ivory">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-8">
          <p className="font-heading text-[11px] tracking-[0.35em] uppercase text-base-ivory/70">
            Rooms
          </p>
          <h2 className="mt-3 font-serif text-2xl md:text-3xl">客室のご案内</h2>
        </header>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
          {ROOMS.map((room, i) => (
            <motion.article
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative overflow-hidden rounded-2xl bg-black/20"
            >
              <div className="relative h-64 md:h-72">
                <Image
                  src={room.img}
                  alt={room.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>

              <div className="p-5">
                <h3 className="font-serif text-lg md:text-xl">{room.title}</h3>
                <p className="mt-2 font-body text-sm text-base-ivory/85">
                  {room.desc}
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="inline-block border border-base-ivory/30 px-4 py-2 text-sm font-body hover:bg-base-ivory/5"
                  >
                    詳細を見る
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoomsSection;
