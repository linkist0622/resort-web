// src/components/home/HeroSection.tsx

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-neutral-900 text-white">
      <div className="max-w-4xl px-6 text-center">
        {/* サブタイトル的な小さなテキスト */}
        <p className="text-xs tracking-[0.25em] uppercase mb-4">
          SHININGresort
        </p>

        {/* メインのキャッチコピー（あとでKOKONを参考に整える） */}
        <h1 className="text-3xl md:text-5xl leading-snug mb-4">
          ここにキャッチコピーが入ります。
        </h1>

        {/* 短い説明文（仮テキスト） */}
        <p className="text-sm md:text-base text-neutral-200">
          KOKONのトップページを参考にしながら、あとで文章や余白を整えていくための仮テキストです。
        </p>
      </div>
    </section>
  );
}
