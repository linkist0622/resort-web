"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "#news", label: "News" },
  { href: "#rooms", label: "Rooms" },
  { href: "#experience", label: "Experience" },
  { href: "#access", label: "Access" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <header
      className="
        fixed inset-x-0 top-0 z-50
        bg-transparent
        text-base-ivory
      "
    >
      <div
        className="
          mx-auto flex h-16 max-w-6xl items-center justify-between
          pl-4 pr-6 md:h-20 md:px-6
        "
      >
        {/* 左：ロゴテキスト（PCのみ表示） */}
        <div className="hidden md:block">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.35em] uppercase"
          >
            SHINING RESORT
          </Link>
        </div>

        {/* モバイルではロゴ非表示の代わりにスペース埋め */}
        <div className="block md:hidden" />

        {/* 右：PCナビ＋言語ボタン */}
        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-6 text-xs tracking-wide">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-base-ivory/70"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* 言語ボタン（プレースホルダー） */}
          <button
            type="button"
            className="
              rounded-full border border-base-ivory/40
              px-3 py-1 text-[11px] uppercase tracking-[0.2em]
              hover:border-base-ivory hover:bg-base-ivory hover:text-black
              transition
            "
          >
            EN / JP
          </button>
        </div>

        {/* モバイル：右上に言語ボタン＋ハンバーガー */}
        <div className="flex items-center gap-3 md:hidden">
          {/* 言語ボタン（簡易） */}
          <button
            type="button"
            className="
              rounded-full border border-base-ivory/40
              px-3 py-1 text-[10px] uppercase tracking-[0.2em]
              hover:border-base-ivory hover:bg-base-ivory hover:text-black
              transition
            "
          >
            EN
          </button>

          {/* ハンバーガーメニュー（丸背景なし・線長め・左右ずれ） */}
          <button
            type="button"
            onClick={toggleMenu}
            className="
              relative flex h-10 w-10 items-center justify-center
              bg-transparent rounded-none
            "
            aria-label="メニューを開く"
          >
            {/* 上の線（少し左にずらす） */}
            <span className="absolute h-[2px] w-10 -translate-y-1.5 -translate-x-1 bg-base-ivory" />
            {/* 下の線（少し右にずらす） */}
            <span className="absolute h-[2px] w-10 translate-y-1.5 translate-x-1 bg-base-ivory" />
          </button>
        </div>
      </div>

      {/* モバイルメニュー（シンプルなドロワー） */}
      {open && (
        <div className="md:hidden">
          <div className="bg-black/90 pb-6 pt-2">
            <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="py-1 text-base-ivory/90"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
