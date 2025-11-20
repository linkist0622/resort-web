"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

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
            <span className={`block h-0.5 w-5 origin-center bg-white transition-transform ${open ? "translate-y-[0.2rem] rotate-45" : "-translate-y-1.5"}`} />
            <span className={`block h-0.5 w-5 bg-white transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`block h-0.5 w-5 origin-center bg-white transition-transform ${open ? "-translate-y-[0.2rem] -rotate-45" : "translate-y-1.5"}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-max-h overflow-hidden bg-black/95 border-t border-white/5 ${open ? "max-h-96" : "max-h-0"}`}>
        <div className="flex flex-col gap-3 px-6 py-4">
          <a href="#rooms" className="text-sm text-neutral-300" onClick={() => setOpen(false)}>ROOMS</a>
          <a href="#experience" className="text-sm text-neutral-300" onClick={() => setOpen(false)}>EXPERIENCE</a>
          <a href="#access" className="text-sm text-neutral-300" onClick={() => setOpen(false)}>ACCESS</a>
          <a href="#reserve" className="rounded-md bg-white/6 px-3 py-2 text-sm text-white text-left" onClick={() => setOpen(false)}>RESERVE</a>
        </div>
      </div>
    </header>
  );
}
