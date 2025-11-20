export default function Rooms() {
  return (
    <section id="rooms" className="section">
      <div className="container">
        <div className="mb-6">
          <h2>
            ご宿泊 <span className="deco font-en">Rooms</span>
          </h2>
        </div>

        <div className="rooms-grid">
          {/* Room 1 */}
          <article className="room-card">
            <img src="/room/room-1.webp" alt="ヴィンテージ Vintage Suite" className="room-img" />
            <div className="room-body">
              <h3>「ヴィンテージ Vintage Suite」</h3>
              <p className="text-[color:var(--muted)]">
                時間に、品格を。ギャラリーの趣とクラシックな調度、窓辺の光が滞在を美しく照らすスイート。
              </p>
            </div>
          </article>

          {/* Room 2 */}
          <article className="room-card">
            <img src="/room/room-2.webp" alt="和 Japanese Deluxe" className="room-img" />
            <div className="room-body">
              <h3>「和 Japanese Deluxe」</h3>
              <p className="text-[color:var(--muted)]">
                美しく、静かに。和のしつらいにアートが映える、静かなギャラリーデラックス。
              </p>
            </div>
          </article>

          {/* Room 3 */}
          <article className="room-card">
            <img src="/room/room-3.webp" alt="洋 Western Deluxe" className="room-img" />
            <div className="room-body">
              <h3>「洋 Western Deluxe」</h3>
              <p className="text-[color:var(--muted)]">
                火と光のハーモニー。柔らかなトーンにアートが映える、上質なリビングデラックス。
              </p>
            </div>
          </article>
        </div>

        <div className="mt-8">
          <a className="btn btn-outline" href="#">
            部屋の一覧 <span className="font-en">All Rooms</span>
          </a>
        </div>
      </div>
    </section>
  );
}
