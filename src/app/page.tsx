import Hero from "../components/home/Hero";
import News from "../components/home/News";
import About from "../components/home/About";
import Rooms from "../components/home/Rooms";
import Restaurant from "../components/home/Restaurant";
import Experience from "../components/home/Experience";
import Access from "../components/home/Access";
import Reserve from "../components/home/Reserve";

export default function Home() {
  return (
    <main>
      <Hero />
      <News />
      <About />
      <Rooms />
      <Restaurant />
      <Experience />
      <Access />
      <Reserve />
    </main>
  );
}
