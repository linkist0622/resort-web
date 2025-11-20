export default function Access() {
  const address = "〒377-1524 群馬県吾妻郡嬬恋村鎌原1053-8599";
  const mapsLink = "https://maps.app.goo.gl/R8iKt38kAwctMRKLA";

  return (
    <section id="access" className="section">
      <div className="container">
        <div className="mb-6">
          <h2>
            アクセス <span className="deco font-en">Access</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <iframe
            className="map-embed"
            src={"https://www.google.com/maps?q=" + encodeURIComponent(address) + "&z=15&output=embed"}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SHININGresort Access Map"
          />
          <div>
            <p className="font-semibold">SHININGresort</p>
            <p className="mt-2">
              {address}
              <br />
              <a className="underline" href={mapsLink} target="_blank">
                Google Maps
              </a>
            </p>
            <div className="mt-6 text-[color:var(--muted)]">
              <p>［電車の方］ 長野原草津口駅からレンタカー等</p>
              <p>［お車の方］ 上信越道 碓氷軽井沢IC → 北軽井沢方面</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
