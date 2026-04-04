import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Термосы на заказ с принтом, фото и логотипом | Studio 696",
  description: "Заказать термос с принтом, надписями, логотипом или фотографией. Детские и подарочные термосы. Доставка по всей России от Studio 696.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Studio 696",
    "alternateName": "Студия 696",
    "url": "https://studio696.ru/",
    "logo": "https://studio696.ru/favicon-120.png",
    "sameAs": [
      "https://t.me/studio696_thermos",
      "https://wa.me/79013658929"
    ]
  };

  return (
    <div className="flex flex-col items-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="w-full max-w-[1200px] px-4 md:px-6 lg:px-20 pt-8 md:pt-12 pb-2 md:pb-32 text-center relative -mb-[70px] md:mb-0">
        <div
          className="hidden md:block absolute top-[-10%] right-[-60px] -z-10 w-[460px] h-[920px] pointer-events-none mix-blend-multiply opacity-90"
          style={{
            maskImage: "linear-gradient(to top right, transparent 0%, black 15%)",
            WebkitMaskImage: "linear-gradient(to top right, transparent 0%, black 15%)"
          }}
        >
          <Image
            src="/images/thermos_eyes2.png"
            alt="Термос с принтом"
            fill
            sizes="(max-width: 768px) 460px, 920px"
            className="object-contain object-center"
            priority
          />
        </div>
        <Reveal className="relative z-30 w-full">
          <div className="relative w-[100vw] ml-[calc(-50vw+50%)] px-4 min-w-[390px] md:inline-block md:w-auto md:min-w-0 md:ml-0 md:px-0 mx-auto max-w-4xl text-left mb-6 md:mb-8 z-30">
            {/* Desktop Hero Title */}
            <h1 className="hidden md:block text-6xl md:text-7xl lg:text-8xl font-normal tracking-normal text-text-primary font-[family-name:var(--font-script)] leading-[1.1] whitespace-pre-wrap relative z-10">
              {"Тер"}<span className="text-[#FF4500]">мо</span>{"сы      \n        с  э"}<span className="text-[#FF4500]">мо</span>{"циями"}<span className="text-[#FF4500]">!</span>
            </h1>

            {/* Mobile Hero Title */}
            <h1 className="md:hidden flex flex-col w-full text-6xl font-normal tracking-normal text-text-primary font-[family-name:var(--font-script)] leading-[1.1] relative z-10">
              <span className="line-left">{"Тер"}<span className="text-[#FF4500]">мо</span>{"сы"}</span>
              <span className="line-right">{"с э"}<span className="text-[#FF4500]">мо</span>{"циями"}<span className="text-[#FF4500]">!</span></span>
            </h1>
          </div>
        </Reveal>
        <Reveal delay={100} className="relative z-20">
          <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto mb-[10px] md:mb-12">
            Отличные термосы с оригинальными принтами. Сохраняют тепло и дарят эмоции каждый день. Доставка по всей России.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <div className="md:hidden relative w-[100vw] ml-[calc(-50vw+50%)] h-auto mb-8 mix-blend-multiply flex justify-center items-center -z-10">
            <Image
              src="/images/thermos_eyes2.png"
              alt="Термос с принтом"
              width={800}
              height={1000}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </Reveal>
        <Reveal delay={200} className="relative z-30">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 transform -translate-y-[110px] md:translate-y-0">
            <Button variant="primary" size="lg" href="https://t.me/studio696_thermos" target="_blank">
              Заказать в Telegram
            </Button>
            <Button variant="secondary" size="lg" href="https://wa.me/79013658929" target="_blank">
              Написать в WhatsApp
            </Button>
          </div>
        </Reveal>

        {/* Hero Render */}
        <Reveal delay={300}>
          <div className="hidden mt-16 md:mt-24 relative w-full aspect-[4/3] md:aspect-[21/9] bg-light-gray rounded-3xl overflow-hidden md:flex flex-col items-center justify-end px-4 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500 group">
            <div className="absolute inset-0 bg-black/5 z-10 transition-opacity group-hover:bg-black/0"></div>
            <Image src="/images/hero-main.png" alt="Термосы Studio 696" fill className="object-cover object-center z-0" priority />
          </div>
        </Reveal>
      </section>

      {/* Highlights / Features Row */}
      <section className="w-full bg-light-gray py-20 px-4 md:px-6 lg:px-20">
        <div className="max-w-[1200px] mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Преимущества без компромиссов.</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Reveal delay={100}>
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-sm bg-white flex items-center justify-center">
                <Image src="/images/advantage_1.jpeg" alt="Тепло и Холод" width={800} height={800} className="w-full h-auto object-contain" />
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-sm bg-white flex items-center justify-center">
                <Image src="/images/advantage_2.jpeg" alt="Стойкие принты" width={800} height={800} className="w-full h-auto object-contain" />
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-sm bg-white flex items-center justify-center">
                <Image src="/images/advantage_12_8.png" alt="Сохранение температуры: Тепло 12ч, Холод 8ч" width={800} height={800} className="w-full h-auto object-contain" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Product Lineup Preview */}
      <section className="w-full max-w-[1200px] mx-auto py-24 px-4 md:px-6 lg:px-20">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Выберите формат.</h2>
              <p className="text-xl text-text-secondary">Для любых задач и напитков.</p>
            </div>
            <Button variant="ghost" href="/models">Сравнить модели &rarr;</Button>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Reveal delay={100}>
            <Link href="/models" className="group block">
              <div className="bg-light-gray rounded-3xl relative overflow-hidden mb-6 flex items-center justify-center">
                <Image src="/images/Thermos600_poilnik.png" alt="Термос/термокружка с поильником и трубочкой 600 мл" width={800} height={800} className="w-full h-auto object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-1">Термос/термокружка с поильником и трубочкой</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Объем 600 мл<br />
                Держит тепло до 12 часов<br />
                Держит холод до 8 часов<br />
                Материал: нержавеющая сталь
              </p>
            </Link>
          </Reveal>

          <Reveal delay={200}>
            <Link href="/models" className="group block">
              <div className="bg-light-gray rounded-3xl relative overflow-hidden mb-6 flex items-center justify-center">
                <Image src="/images/Thermos360_poilnik_new.png" alt="Термос/термокружка на каждый день с удобным поильником 360 мл" width={800} height={800} className="w-full h-auto object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-1">Термос/термокружка на каждый день с удобным поильником</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Объем 360 мл<br />
                Держит тепло до 12 часов<br />
                Держит холод до 8 часов<br />
                Материал: нержавеющая сталь
              </p>
            </Link>
          </Reveal>

          <Reveal delay={300}>
            <Link href="/models" className="group block">
              <div className="bg-light-gray rounded-3xl relative overflow-hidden mb-6 flex items-center justify-center">
                <Image src="/images/Thermos360Kids_colors_new.jpg" alt="Термос/термокружка с цветной крышкой и трубочкой 360 мл" width={800} height={800} className="w-full h-auto object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-1">Термос/термокружка с цветной крышкой и трубочкой</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Объем 360 мл<br />
                Держит тепло до 12 часов<br />
                Держит холод до 8 часов<br />
                Материал: нержавеющая сталь
              </p>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Category Preview */}
      <section className="w-full bg-light-gray py-24 px-4 md:px-6 lg:px-20 text-center border-t border-gray-200">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Искусство на термосе.</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-12">От актуальных мемов до персональных фотоколлажей. Более 100 готовых вариантов.</p>
          <Button variant="outline" size="lg" href="/prints" className="bg-white">Изучить коллекции</Button>
        </Reveal>
      </section>
    </div>
  );
}
