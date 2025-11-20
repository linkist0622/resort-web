export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-slides">
        <div className="hero-slide">
          <img src="/hero-1.webp" alt="森と外観" />
        </div>
        <div className="hero-slide">
          <img src="/hero-2.webp" alt="室内のアートと光" />
        </div>
        <div className="hero-slide">
          <img src="/hero-3.webp" alt="星空と庭" />
        </div>
      </div>

      <div className="hero-fade" />

      <div className="hero-inner container">
        <h1 className="hero-title">
          <span className="font-en block text-[clamp(18px,2.4vw,22px)] opacity-90">
            Play. Create. Find your rhythm.
          </span>
          — Retreat together in art &amp; nature.
        </h1>
        <p className="hero-sub font-en">Kita-Karuizawa · SHININGresort</p>

        <div className="mt-6 flex items-center justify-center gap-10 flex-wrap">
          <a className="btn btn-primary" href="#" data-tripla-booking-widget="search">
            宿泊予約 <span className="font-en opacity-90">Reservation</span>
          </a>
          <a
            className="btn btn-outline"
            href="https://www.tablecheck.com/ja/kokon/reserve/message"
            target="_blank"
          >
            お食事予約 <span className="font-en opacity-90">Dining</span>
          </a>
        </div>
      </div>

      <div className="hero-scroll font-en">scroll</div>
    </section>
  );
}

