"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-black/60 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:py-4">
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center">
            <Image
              src="/images/logo/shiningresort-logo.PNG"
              alt="SHININGresort"
              width={160}
              height={44}
              className="h-auto w-[140px] md:w-[160px]"
              priority
            />
          </a>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="#rooms" className="text-sm text-neutral-300 hover:text-white">
            ROOMS
          </a>
          <a href="#experience" className="text-sm text-neutral-300 hover:text-white">
            EXPERIENCE
          </a>
          <a href="#access" className="text-sm text-neutral-300 hover:text-white">
            ACCESS
          </a>
          <a href="#reserve" className="rounded-md bg-white/6 px-3 py-2 text-sm text-white hover:bg-white/10">
            RESERVE
          </a>
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            aria-label="Open menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/6 text-white"
            onClick={() => setOpen((s) => !s)}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d={open ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden">
          <div className="flex flex-col gap-3 border-t border-white/5 bg-black/95 px-6 py-4">
            <a href="#rooms" className="text-sm text-neutral-300" onClick={() => setOpen(false)}>
              ROOMS
            </a>
            <a href="#experience" className="text-sm text-neutral-300" onClick={() => setOpen(false)}>
              EXPERIENCE
            </a>
            <a href="#access" className="text-sm text-neutral-300" onClick={() => setOpen(false)}>
              ACCESS
            </a>
            <a href="#reserve" className="rounded-md bg-white/6 px-3 py-2 text-sm text-white text-left" onClick={() => setOpen(false)}>
              RESERVE
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
