import { HeroAboutScene } from "@/components/home/HeroAboutScene";
import { NewsSection } from "@/components/home/NewsSection";
// HeroSection は一旦テスト用なのでコメントアウトでOK
// import { HeroSection } from "@/components/home/HeroSection";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <HeroAboutScene />
      <NewsSection />
    </main>
  );
}
