"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black px-6 py-8 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <a href="/">
              <Image
                src="/images/logo/shiningresort-logo.PNG"
                alt="SHININGresort"
                width={140}
                height={36}
                className="h-auto w-[120px] md:w-[140px]"
                priority
              />
            </a>
            <p className="text-sm text-neutral-400">© {new Date().getFullYear()} SHININGresort</p>
          </div>

          <div className="flex gap-6">
            <a href="#privacy" className="text-sm text-neutral-400 hover:text-white">
              Privacy
            </a>
            <a href="#contact" className="text-sm text-neutral-400 hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
