"use client";

import { motion } from "framer-motion";

const galleryContainer = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, duration: 0.4 },
  },
};

const galleryItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function GallerySection() {
  return (
    <section id="experience" className="bg-gallery-warm py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs tracking-[0.3em] text-brand-green uppercase">
          GALLERY
        </p>
        <h2 className="mt-3 text-xl text-ink">アートと出会う。</h2>

        <p className="mt-4 text-xs leading-relaxed text-ink-subtle md:text-sm">
          館内の各所に、季節やテーマにあわせた作品を展示しています。
          滞在のあいだ、ふとした瞬間にアートと目が合うような時間をお楽しみください。
        </p>

        <motion.div
          className="mt-8 grid gap-4 md:grid-cols-3"
          variants={galleryContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              variants={galleryItem}
              whileHover={{
                y: -4,
                boxShadow: "0 16px 30px rgba(0,0,0,0.08)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="h-40 rounded-lg bg-base-ivorySoft"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
