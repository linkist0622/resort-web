// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

export const metadata: Metadata = {
  title: "SHININGresort",
  description:
    "北軽井沢の静寂に佇む、アートギャラリーのようなリトリートホテル。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className="bg-gallery-wall text-ink antialiased">
        <div className="flex min-h-screen flex-col">
          {/* ★ 常に表示するが、Header 側で背景透明 */}
          <Header />

          <main className="flex-1">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
