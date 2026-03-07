import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export default function ModelsPage() {
    return (
        <div className="flex flex-col items-center overflow-hidden">
            {/* Header */}
            <section className="w-full max-w-[1200px] px-4 md:px-6 lg:px-20 pt-16 md:pt-24 pb-16 text-center">
                <Reveal>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-normal mb-6 font-[family-name:var(--font-script)]">
                        Три формата. Для любых задач.
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
                            <div className="w-full md:w-1/2 aspect-square bg-light-gray rounded-3xl relative flex items-center justify-center p-8">
                                <p className="text-text-secondary/50 font-medium z-10 text-center">product-600.webp</p>
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col items-start text-left">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Термос 600 мл</h2>
                                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                                    Максимум объема. Выбор путешественников и тех, кто весь день на ногах. Двойные стенки из стали сохраняют температуру до 12 часов.
                                </p>
                                <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                                    <Button variant="primary" href="https://t.me/oksivit03" target="_blank" className="w-full sm:w-auto">Заказать в Telegram</Button>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* SKU 2 */}
                    <Reveal delay={100}>
                        <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
                            <div className="w-full md:w-1/2 aspect-square bg-light-gray rounded-3xl relative flex items-center justify-center p-8">
                                <p className="text-text-secondary/50 font-medium z-10 text-center">product-380.webp</p>
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col items-start text-left">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Термос 380 мл</h2>
                                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                                    Золотая середина. Идеально ложится в руку, легко помещается в рюкзак или сумку. Оптимальный объем на каждый день.
                                </p>
                                <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                                    <Button variant="primary" href="https://t.me/oksivit03" target="_blank" className="w-full sm:w-auto">Заказать в Telegram</Button>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* SKU 3 */}
                    <Reveal delay={200}>
                        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                            <div className="w-full md:w-1/2 aspect-square bg-light-gray rounded-3xl relative flex items-center justify-center p-8">
                                <p className="text-text-secondary/50 font-medium z-10 text-center">product-370.webp</p>
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col items-start text-left">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Кружка 370 мл</h2>
                                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                                    Для рабочего стола и уютных вечеров. Стильная крышка защитит напиток от остывания и случайного проливания.
                                </p>
                                <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                                    <Button variant="primary" href="https://t.me/oksivit03" target="_blank" className="w-full sm:w-auto">Заказать в Telegram</Button>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Comparison / Included */}
            <section className="w-full bg-light-gray py-20 px-4 md:px-6 lg:px-20 text-center">
                <Reveal>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Что в комплекте?</h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-12">
                        Каждая модель поставляется в фирменной подарочной коробке. Готовое решение для идеального подарка.
                    </p>
                </Reveal>
                <Reveal delay={100}>
                    <div className="w-[200px] h-[200px] bg-white rounded-3xl mx-auto flex items-center justify-center border border-gray-100 shadow-sm transition-transform duration-300 hover:scale-105">
                        <span className="text-6xl">🎁</span>
                    </div>
                </Reveal>
            </section>
        </div>
    );
}
