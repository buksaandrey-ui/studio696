import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
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
        <Reveal className="relative z-30">
          <div className="relative inline-block mx-auto max-w-4xl text-left mb-6 md:mb-8 z-30">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-normal tracking-normal text-text-primary font-[family-name:var(--font-script)] leading-[1.1] whitespace-pre-wrap relative z-10">
              {"По"}<span className="text-[#FF4500]">да</span>{"рки      \n        с  эмоциями"}<span className="text-[#FF4500]">!</span>
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
            <Button variant="primary" size="lg" href="https://t.me/oksivit03" target="_blank">
              Заказать в Telegram
            </Button>
            <Button variant="secondary" size="lg" href="https://wa.me/79067365392" target="_blank">
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
              <Card className="bg-white border-0 h-full">
                <CardContent className="flex flex-col items-center text-center p-8 h-full">
                  <div className="w-12 h-12 rounded-full bg-light-gray flex items-center justify-center mb-6">
                    <span className="text-xl">🔥</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Тепло до 12 часов</h3>
                  <p className="text-text-secondary">Двойные стенки из пищевой нержавеющей стали сохраняют температуру.</p>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={200}>
              <Card className="bg-white border-0 h-full">
                <CardContent className="flex flex-col items-center text-center p-8 h-full">
                  <div className="w-12 h-12 rounded-full bg-light-gray flex items-center justify-center mb-6">
                    <span className="text-xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Стойкие принты</h3>
                  <p className="text-text-secondary">Изображение буквально &quot;впекается&quot; в покрытие. Не стирается и не выцветает.</p>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={300}>
              <Card className="bg-white border-0 h-full">
                <CardContent className="flex flex-col items-center text-center p-8 h-full">
                  <div className="w-12 h-12 rounded-full bg-light-gray flex items-center justify-center mb-6">
                    <span className="text-xl">🎁</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Идеальный подарок</h3>
                  <p className="text-text-secondary">Каждый заказ упакован в стильную коробку, готовую к вручению.</p>
                </CardContent>
              </Card>
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
              <div className="bg-light-gray rounded-3xl aspect-[4/5] relative overflow-hidden mb-6 flex items-center justify-center p-8">
                <p className="text-text-secondary/50 font-medium z-10 text-center">product-600.webp</p>
              </div>
              <h3 className="text-xl font-semibold mb-1">Термос 600 мл</h3>
              <p className="text-text-secondary">Максимум объема для путешествий</p>
            </Link>
          </Reveal>

          <Reveal delay={200}>
            <Link href="/models" className="group block">
              <div className="bg-light-gray rounded-3xl aspect-[4/5] relative overflow-hidden mb-6 flex items-center justify-center p-8">
                <p className="text-text-secondary/50 font-medium z-10 text-center">product-380.webp</p>
              </div>
              <h3 className="text-xl font-semibold mb-1">Термос 380 мл</h3>
              <p className="text-text-secondary">Золотая середина на каждый день</p>
            </Link>
          </Reveal>

          <Reveal delay={300}>
            <Link href="/models" className="group block">
              <div className="bg-light-gray rounded-3xl aspect-[4/5] relative overflow-hidden mb-6 flex items-center justify-center p-8">
                <p className="text-text-secondary/50 font-medium z-10 text-center">product-370.webp</p>
              </div>
              <h3 className="text-xl font-semibold mb-1">Кружка 370 мл</h3>
              <p className="text-text-secondary">Стильный спутник для рабочего стола</p>
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
