"use client";

import { motion } from "framer-motion";

type NewsItem = {
  date: string;
  category: string;
  title: string;
};

const NEWS: NewsItem[] = [
  {
    date: "2025.11.01",
    category: "NEWS",
    title: "SHININGresort テストオープンのお知らせ",
  },
  {
    date: "2025.10.15",
    category: "STAY PLAN",
    title: "浅間山ビュー確約プラン（素泊まり）",
  },
  {
    date: "2025.10.01",
    category: "EXPERIENCE",
    title: "茶室 ENCOUNTER プレオープン",
  },
];

const listVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.06,
      duration: 0.4,
      // ease は削除
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function NewsSection() {
  return (
    <section
      id="news"
      className="bg-base-ivorySoft border-y border-border-neutral py-16 md:py-20"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:gap-16">
        {/* 左カラム：見出し */}
        <div className="md:w-[32%]">
          <p className="text-xs tracking-[0.35em] text-brand-green uppercase">
            NEWS
          </p>
          <h2 className="mt-3 text-xl text-ink">お知らせ</h2>
          <p className="mt-4 text-xs leading-relaxed text-ink-subtle md:text-sm">
            営業日や宿泊プラン、季節の体験コンテンツなど、
            SHININGresort からのお知らせをこちらにまとめていきます。
          </p>
        </div>

        {/* 右カラム：ニュース一覧 */}
        <div className="md:w-[68%]">
          <motion.ul
            className="divide-y divide-border-neutral/80 border-t border-border-neutral"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {NEWS.map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                whileHover={{
                  backgroundColor: "rgba(255,255,255,0.7)",
                  y: -2,
                }}
                transition={{ duration: 0.18 }}
              >
                <a
                  href="#"
                  className="flex flex-col gap-1 py-4 md:flex-row md:items-center md:gap-6 md:py-5"
                >
                  <div className="flex items-center gap-3 text-[11px] text-ink-subtle md:w-48 md:flex-shrink-0">
                    <span>{item.date}</span>
                    <span className="rounded-full border border-border-neutral px-2 py-[2px] text-[10px] tracking-[0.18em] text-brand-green uppercase">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-ink md:text-sm">{item.title}</p>
                </a>
              </motion.li>
            ))}
          </motion.ul>

          <div className="mt-4 text-right">
            <button className="text-[11px] tracking-[0.2em] text-ink-subtle underline underline-offset-4 hover:text-ink">
              すべてのお知らせを見る
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
