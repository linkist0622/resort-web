// src/components/home/NewsSection.tsx
"use client";

import { motion } from "framer-motion";
import { newsItems } from "@/data/news";
import type { NewsItem } from "@/types/news";

export function NewsSection() {
  return (
    <section className="border-t border-white/10 bg-black px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* KOKON風 2カラムレイアウト：左タイトル / 右リスト */}
        <div className="md:grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] md:gap-12 lg:gap-20">
          {/* 左カラム：セクションタイトル */}
          <div className="mb-8 md:mb-0">
            <p className="mb-3 text-[10px] tracking-[0.35em] uppercase text-neutral-400">
              NEWS
            </p>
            <h2 className="font-serif text-xl tracking-[0.16em] md:text-2xl">
              お知らせ
            </h2>
          </div>

          {/* 右カラム：ニュース一覧（行ごとに hover でタイルが浮かぶ） */}
          <div className="divide-y divide-white/8 border-t border-white/10">
            {newsItems.map((item: NewsItem, index: number) => (
              <motion.article
                key={item.id}
                className="
                  -mx-3 md:-mx-4
                  flex flex-col gap-2
                  py-4 md:py-5
                  rounded-xl
                  px-3 md:px-4
                  transition-colors
                  duration-200
                  md:hover:bg-white/[0.06]
                  md:hover:cursor-pointer
                "
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* 上段：日付＋カテゴリ */}
                <div className="flex flex-wrap items-center gap-3 text-[11px] text-neutral-300">
                  <span>{item.date}</span>
                  <span className="h-[1px] w-6 bg-neutral-500" />
                  <span className="rounded-full border border-white/20 px-2 py-[2px] text-[10px] tracking-[0.16em] uppercase">
                    {item.category}
                  </span>
                </div>

                {/* 下段：タイトル行 */}
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-sm leading-relaxed md:text-base">
                    {item.title}
                  </h3>

                  {item.href && (
                    <a
                      href={item.href}
                      className="hidden text-[11px] tracking-[0.18em] text-neutral-400 underline-offset-4 hover:text-neutral-100 hover:underline md:inline"
                    >
                      MORE
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
