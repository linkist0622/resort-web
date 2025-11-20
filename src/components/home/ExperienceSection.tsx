"use client";

import React from "react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 bg-black text-base-ivory">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-6">
          <p className="font-heading text-[11px] tracking-[0.35em] uppercase text-base-ivory/70">
            Experience
          </p>
          <h2 className="mt-3 font-serif text-2xl md:text-3xl">体験プログラム</h2>
        </header>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
          {/* placeholder cards — 後で画像・詳細を追加 */}
          <article className="rounded-2xl border border-white/5 p-6">
            <h3 className="font-serif text-lg">アートギャラリー</h3>
            <p className="mt-2 font-body text-sm text-base-ivory/85">
              地元アーティストの作品展示と解説セッション。
            </p>
          </article>

          <article className="rounded-2xl border border-white/5 p-6">
            <h3 className="font-serif text-lg">茶室 ENCOUNTER</h3>
            <p className="mt-2 font-body text-sm text-base-ivory/85">
              茶の作法を楽しむ、静かなひととき。
            </p>
          </article>

          <article className="rounded-2xl border border-white/5 p-6">
            <h3 className="font-serif text-lg">星空ツアー</h3>
            <p className="mt-2 font-body text-sm text-base-ivory/85">
              夜の散歩と天体観測。ガイド付きでご案内します。
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
