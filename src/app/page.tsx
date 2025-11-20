// src/app/page.tsx
import React from "react";
import { HeroAboutScene } from "@/components/home/HeroAboutScene";
import { NewsSection } from "@/components/home/NewsSection";
import { RoomsSection } from "@/components/home/RoomsSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";

export default function HomePage() {
  return (
    <main className="bg-black text-base-ivory">
      {/* Hero */}
      <HeroAboutScene />

      {/* News */}
      <section id="news" className="bg-black">
        <NewsSection />
      </section>

      {/* Rooms */}
      <section id="rooms" className="bg-black">
        <RoomsSection />
      </section>
    </main>
  );
}
