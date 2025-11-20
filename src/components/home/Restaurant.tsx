export default function Restaurant() {
  return (
    <section className="section">
      <div className="container split-2">
        <div className="picture-card">
          <img src="/restaurant-1.webp" alt="レストラン" className="picture" />
        </div>
        <div>
          <h2>
            お食事 <span className="deco font-en">Restaurant</span>
          </h2>
          <p className="mt-3">
            薬膳の知恵を取り入れた、からだにやさしい日本料理のコースをご用意しました。
            季節の香りを添えた味わいが、五感をほどき、内側からめぐりをととのえます。
          </p>
          <div className="mt-6">
            <a className="btn btn-outline" href="#">
              くわしく見る <span className="font-en">Details</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
