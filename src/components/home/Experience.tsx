const EXPS = [
  { src: "/exp-1.webp", label: "茶" },
  { src: "/exp-2.webp", label: "星空" },
  { src: "/exp-3.webp", label: "森歩き" },
];

export default function Experience() {
  return (
    <section className="section">
      <div className="container">
        <div className="mb-6">
          <h2>
            体験・散策 <span className="deco font-en">Experience</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {EXPS.map((p, i) => (
            <figure key={i} className="picture-card">
              <img src={p.src} alt={p.label} className="picture" />
              <figcaption className="p-4 text-[color:var(--muted)]">{p.label}</figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-6">
          <a className="btn btn-outline" href="#">
            くわしく見る <span className="font-en">More</span>
          </a>
        </div>
      </div>
    </section>
  );
}
