import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const mavkaScript = localFont({
  src: "../../public/fonts/Sweet-Mavka-Script.ttf",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Термосы с оригинальным принтом | Studio 696",
  description: "Отличные термосы с оригинальными принтами. Сохраняют тепло и дарят эмоции каждый день. Доставка по всей России.",
};

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`${inter.variable} ${mavkaScript.variable} antialiased text-text-primary selection:bg-black/10`}
      >
        <Header />
        <main className="min-h-screen pt-14 md:pt-16 lg:pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
