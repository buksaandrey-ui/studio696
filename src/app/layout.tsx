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
  metadataBase: new URL("https://studio696.ru"),
  title: "Термосы с оригинальным принтом | Studio 696",
  description: "Отличные термосы с оригинальными принтами. Сохраняют тепло и дарят эмоции каждый день. Доставка по всей России.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-embedded.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" }
    ],
  },
  manifest: "/manifest.json",
  verification: {
    google: "CLxfQhVIRoIjvk_y_sqzzkCPCgIPAZxUK1_VKOAkBoo",
    yandex: "bb33f6afde8c773a",
  },
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
      <head>
        <link
          rel="preload"
          href="/images/thermos_eyes2.png"
          as="image"
        />
      </head>
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
