export default function Reserve() {
  return (
    <aside className="reserve container">
      <h2 className="ttl">
        ご予約 <span className="deco font-en">Reservation</span>
      </h2>
      <div className="row mt-4">
        <a className="btn btn-primary" href="#" data-tripla-booking-widget="search">
          宿泊予約 <span className="font-en">Reservation</span>
        </a>
        <a
          className="btn btn-outline"
          href="https://www.tablecheck.com/ja/kokon/reserve/message"
          target="_blank"
        >
          お食事予約 <span className="font-en">Dining</span>
        </a>
      </div>
      <div className="mt-4 text-[color:var(--muted)]">
        <div>
          お電話でのご予約：<a href="tel:000-000-0000">000-000-0000</a>（9:00–18:00）
        </div>
      </div>
    </aside>
  );
}
