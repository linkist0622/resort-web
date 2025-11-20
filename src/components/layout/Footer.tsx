import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 text-xs text-ink-subtle">
      {/* メインフッター */}
      <div className="bg-gallery-warm border-t border-border-neutral px-4 py-14 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl space-y-10 md:space-y-14">
          {/* 上段：ロゴ＋コピー＋言語 */}
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-[11px] tracking-[0.35em] uppercase text-ink-subtle">
                  SHINING
                </span>
                <span className="text-sm font-medium tracking-[0.18em] uppercase text-ink">
                  RESORT
                </span>
              </div>
              <p className="max-w-md text-[11px] leading-relaxed">
                北軽井沢の静けさと、アートと、茶の時間。
                <br />
                自分本来の輝きにそっと還っていくための、小さなギャラリーホテル。
              </p>
            </div>

            <div className="flex items-center gap-4 text-[11px] tracking-[0.25em] uppercase text-ink-subtle">
              <button className="border-b border-ink-subtle pb-[2px]">
                JA
              </button>
              <span>/</span>
              <button className="pb-[2px] text-ink-subtle/60 hover:text-ink-subtle">
                EN
              </button>
            </div>
          </div>

          {/* 中段：ナビ + 住所 */}
          <div className="grid gap-10 text-[12px] text-ink md:grid-cols-[1.6fr,1.2fr]">
            {/* 左：ナビ */}
            <nav className="grid gap-x-16 gap-y-2 md:grid-cols-2">
              <div className="space-y-2">
                <Link href="#about" className="block hover:text-ink-subtle">
                  宿について
                </Link>
                <Link href="#rooms" className="block hover:text-ink-subtle">
                  ご宿泊
                </Link>
                <Link href="#gallery" className="block hover:text-ink-subtle">
                  ギャラリー
                </Link>
                <Link href="#experience" className="block hover:text-ink-subtle">
                  体験・過ごし方
                </Link>
              </div>
              <div className="mt-4 space-y-2 md:mt-0">
                <Link href="#news" className="block hover:text-ink-subtle">
                  お知らせ
                </Link>
                <Link href="#access" className="block hover:text-ink-subtle">
                  アクセス
                </Link>
                <Link
                  href="#contact"
                  className="block underline underline-offset-4 hover:text-ink-subtle"
                >
                  お問い合わせ
                </Link>
              </div>
            </nav>

            {/* 右：住所 / Map / SNS */}
            <div className="space-y-2 text-[11px] leading-relaxed text-ink-subtle">
              <p className="text-ink">SHININGresort</p>
              <p>〒XXXX-XXXX</p>
              <p>群馬県吾妻郡嬬恋村◯◯◯◯</p>
              <div className="mt-2">
                <a
                  href="#access"
                  className="text-ink underline underline-offset-4 hover:text-brand-gold"
                >
                  Google Map
                </a>
              </div>
              <div className="mt-3">
                <a href="#" className="hover:text-brand-gold">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 下の細い帯 */}
      <div className="bg-gallery-stone px-4 py-4">
        <div className="mx-auto max-w-5xl text-[10px] text-base-ivory/80">
          © {year} SHINING Co., Ltd.
        </div>
      </div>
    </footer>
  );
}
