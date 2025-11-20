"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  const top = {
    closed: { rotate: 0, y: -6 },
    open: { rotate: 45, y: 0 },
  };
  const middle = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };
  const bottom = {
    closed: { rotate: 0, y: 6 },
    open: { rotate: -45, y: 0 },
  };

  const lineProps = { className: "block h-0.5 w-5 bg-white rounded-sm" };

  return (
    <header className="sticky top-0 z-50 bg-black/40 backdrop-blur-sm border-b border-white/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center">
            <Image
              src="/images/logo/shiningresort-logo.PNG"
              alt="SHININGresort"
              width={180}
              height={48}
              className="h-auto w-[150px] md:w-[180px]"
              priority
            />
          </a>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#rooms" className="text-sm text-neutral-300 hover:text-white transition-colors">ROOMS</a>
          <a href="#experience" className="text-sm text-neutral-300 hover:text-white transition-colors">EXPERIENCE</a>
          <a href="#access" className="text-sm text-neutral-300 hover:text-white transition-colors">ACCESS</a>
          <a href="#reserve" className="rounded-md bg-white/6 px-3 py-2 text-sm text-white hover:bg-white/10 transition-colors">RESERVE</a>
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="relative flex h-10 w-10 items-center justify-center rounded-md bg-white/6 p-2 text-white transition-all ring-0 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            <span className="sr-only">Menu</span>
            <motion.span
              aria-hidden
              variants={top}
              initial="closed"
              animate={open ? "open" : "closed"}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              {...lineProps}
              style={{ display: "block" }}
            />
            <motion.span
              aria-hidden
              variants={middle}
              initial="closed"
              animate={open ? "open" : "closed"}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="block h-0.5 w-5 bg-white my-1"
            />
            <motion.span
              aria-hidden
              variants={bottom}
              initial="closed"
              animate={open ? "open" : "closed"}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              {...lineProps}
              style={{ display: "block" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu (animated via Framer Motion) */}
      <motion.div
        className="md:hidden overflow-hidden bg-black/95 border-t border-white/5"
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={{
          closed: { maxHeight: 0, opacity: 0, transition: { when: "afterChildren" } },
          open: { maxHeight: 420, opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.04 } },
        }}
      >
        <div className="px-6 py-4">
          <motion.a
            href="#rooms"
            className="block text-sm text-neutral-300 py-2"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0, y: 8 }}
            animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.28 }}
          >
            ROOMS
          </motion.a>

          <motion.a
            href="#experience"
            className="block text-sm text-neutral-300 py-2"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0, y: 8 }}
            animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.28, delay: 0.04 }}
          >
            EXPERIENCE
          </motion.a>

          <motion.a
            href="#access"
            className="block text-sm text-neutral-300 py-2"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0, y: 8 }}
            animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.28, delay: 0.08 }}
          >
            ACCESS
          </motion.a>

          <motion.a
            href="#reserve"
            className="mt-2 inline-block rounded-md bg-white/6 px-3 py-2 text-sm text-white text-left"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0, y: 8 }}
            animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.28, delay: 0.12 }}
          >
            RESERVE
          </motion.a>
        </div>
      </motion.div>
    </header>
  );
}
