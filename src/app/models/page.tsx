import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Подарочные термосы: детские, 360 мл и 600 мл | Studio 696",
  description: "Выберите идеальный термос: компактный на 360 мл, вместительный на 600 мл или детский термос для школы. Сравнение моделей и характеристик.",
  alternates: {
    canonical: "/models",
  },
};

export default function ModelsPage() {
    return (
        <div className="flex flex-col items-center overflow-hidden">
            {/* Header */}
            <section className="w-full max-w-[1200px] px-4 md:px-6 lg:px-20 pt-16 md:pt-24 pb-16 text-center">
                <Reveal>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal tracking-normal mb-6 font-[family-name:var(--font-script)]">
                        По<span className="text-[#FF4500]">да</span>рочные тер<span className="text-[#FF4500]">мо</span>сы: <br className="hidden md:block"/> <span className="text-[#FF4500]">дет</span>ские, 360 мл и 600 мл
                    </h1>
                </Reveal>
                <Reveal delay={100}>
                    <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto">
                        Выбери свой идеальный объем. От компактной кружки для утреннего кофе до вместительного термоса для долгих прогулок.
                    </p>
                </Reveal>
            </section>

            {/* Lineup */}
            <section className="w-full max-w-[1200px] px-4 md:px-6 lg:px-20 pb-24">
                <div className="flex flex-col gap-16 md:gap-24">
                    {/* SKU 1 */}
                    <Reveal>
                        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                            <div className="w-full md:w-1/2 rounded-3xl relative overflow-hidden flex items-center justify-center bg-light-gray">
                                <Image src="/images/Thermos600_new.png" alt="Термос 600 мл" width={800} height={800} className="w-full h-auto object-cover" />
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col items-start text-left">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Термос 600 мл</h2>
                                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                                    Оптимальный размер для прогулок и путешествий.
                                </p>
                                <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                                    <Button variant="primary" href="https://t.me/studio696_thermos" target="_blank" className="w-full sm:w-auto">Заказать в Telegram</Button>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* SKU 2 */}
                    <Reveal delay={100}>
                        <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
                            <div className="w-full md:w-1/2 rounded-3xl relative overflow-hidden flex items-center justify-center bg-light-gray">
                                <Image src="/images/Thermos360_new.png" alt="Термос 360 мл" width={800} height={800} className="w-full h-auto object-cover" />
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col items-start text-left">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Термос 360 мл</h2>
                                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                                    Идеальный размер для автомобиля и на работу
                                </p>
                                <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                                    <Button variant="primary" href="https://t.me/studio696_thermos" target="_blank" className="w-full sm:w-auto">Заказать в Telegram</Button>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* SKU 3 */}
                    <Reveal delay={200}>
                        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                            <div className="w-full md:w-1/2 rounded-3xl relative overflow-hidden flex items-center justify-center bg-light-gray">
                                <Image src="/images/Thermos360Kids_new.png" alt="Термос 360 мл Kids" width={800} height={800} className="w-full h-auto object-cover" />
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col items-start text-left">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Термос 360 мл Kids</h2>
                                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                                    Яркий термос с любимыми персонажами для школы и парка
                                </p>
                                <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                                    <Button variant="primary" href="https://t.me/studio696_thermos" target="_blank" className="w-full sm:w-auto">Заказать в Telegram</Button>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Comparison / Included */}
            <section className="w-full bg-light-gray py-20 px-4 md:px-6 lg:px-20 text-center">
                <Reveal>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Приятно дарить, приятно получать!</h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-12">
                        Каждый готовый термос мы бережно упаковываем в фирменную подарочную упаковку. Готовое решение для идеального подарка.
                    </p>
                </Reveal>
                <Reveal delay={100}>
                    <div className="w-full max-w-[600px] bg-white rounded-3xl mx-auto flex items-center justify-center border border-gray-100 shadow-sm transition-transform duration-300 hover:scale-105 overflow-hidden">
                        <Image src="/images/gift_packaging_new.png" alt="Подарочная упаковка" width={800} height={1000} className="w-full h-auto object-cover" />
                    </div>
                </Reveal>
            </section>
        </div>
    );
}
