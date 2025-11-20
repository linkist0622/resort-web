export function HeroCopySection() {
  return (
    <section className="bg-base-ivory py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-xs tracking-[0.35em] text-brand-green uppercase">
          SHININGRESORT
        </p>

        <h1 className="mt-4 text-3xl font-semibold text-ink md:text-4xl">
          北軽井沢、一期一会のギャラリーホテル
        </h1>

        <p className="mt-4 text-sm leading-relaxed text-ink-subtle md:text-base">
          浅間山の麓、森に抱かれた静かな土地に佇む SHININGresort。
          <br className="hidden md:block" />
          ひと部屋ごとにテーマを持つ客室と、小さなギャラリーのような共有空間で、
          日常からそっと離れる時間をお届けします。
        </p>

        <p className="mt-3 text-xs leading-relaxed text-ink-subtle md:text-sm">
          アート、茶の時間、星空。大切な人と過ごす一夜も、おひとりで整えるひとときも。
          北軽井沢ならではの空気とともに、ゆっくりお楽しみください。
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <button className="rounded-full bg-brand-gold px-6 py-2 text-sm font-medium text-ink transition hover:bg-brand-goldLight">
            宿泊プランを見る
          </button>
          <button className="rounded-full border border-brand-gold px-6 py-2 text-sm font-medium text-brand-gold transition hover:bg-brand-gold/10">
            ENCOUNTER を知る
          </button>
        </div>
      </div>
    </section>
  );
}
