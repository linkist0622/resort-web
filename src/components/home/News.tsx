type NewsItem = { date: string; title: string; href?: string };

const NEWS: NewsItem[] = [
  { date: "2025.11.02", title: "【数量限定】年末のお食事コースご予約開始" },
  { date: "2025.10.19", title: "ギャラリー企画展「光と土」開催のお知らせ" },
  { date: "2025.06.01", title: "雑誌掲載のご案内" },
];

export default function News() {
  return (
    <section className="section">
      <div className="container">
        <div className="mb-6">
          <h2>お知らせ</h2>
          <div className="deco font-en">News</div>
        </div>

        <ul className="grid gap-5 md:grid-cols-3">
          {NEWS.map((n, i) => (
            <li key={i}>
              <a className="card block hover:opacity-90 transition-opacity" href={n.href || "#"}>
                <div className="text-sm text-[color:var(--muted)]">{n.date}</div>
                <div className="mt-1">{n.title}</div>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <a className="btn btn-outline" href="#">
            一覧を見る <span className="font-en">All News</span>
          </a>
        </div>
      </div>
    </section>
  );
}
