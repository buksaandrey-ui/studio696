import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";


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
        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=108390342", "ym");

            ym(108390342, "init", {
                ssr:true, 
                webvisor:true, 
                clickmap:true, 
                ecommerce:"dataLayer", 
                referrer: document.referrer, 
                url: location.href, 
                accurateTrackBounce:true, 
                trackLinks:true
            });
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/108390342" style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}
        <Header />
        <main className="min-h-screen pt-14 md:pt-16 lg:pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
