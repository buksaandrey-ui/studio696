import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export default function ContactPage() {
    const faqItems = [
        {
            question: "Можно ли напечатать свой принт?",
            answer: "Да, мы принимаем ваши изображения в высоком качестве (JPEG/PNG) и бесплатно адаптируем их под размеры термоса перед печатью."
        },
        {
            question: "Как ухаживать за термосом?",
            answer: "Рекомендуем ручную мойку. Использование посудомоечной машины нежелательно, чтобы внешнее покрытие сохраняло безупречный вид долгие годы."
        },
        {
            question: "Действительно ли он держит тепло 12 часов?",
            answer: "Благодаря двойным стенкам из нержавеющей стали и вакуумной изоляции, температура напитка сохраняется на протяжении большей части дня."
        },
        {
            question: "Какие сроки изготовления?",
            answer: "Изготовление и отправка занимают 1-2 рабочих дня после утверждения макета."
        }
    ];

    return (
        <div className="flex flex-col items-center overflow-hidden">
            {/* Header */}
            <section className="w-full max-w-[1200px] px-4 md:px-6 lg:px-20 pt-16 md:pt-24 pb-16 text-center">
                <Reveal>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-normal mb-6 font-[family-name:var(--font-script)]">
                        На связи. Всегда.
                    </h1>
                </Reveal>
                <Reveal delay={100}>
                    <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto">
                        Мы отказались от долгих форм. Просто напишите нам в удобный мессенджер — мы поможем выбрать модель, принт и быстро оформим заказ.
                    </p>
                </Reveal>
            </section>

            {/* How to order & CTAs */}
            <section className="w-full max-w-[1200px] px-4 md:px-6 lg:px-20 pb-20">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-20 justify-center">
                    {/* Steps */}
                    <div className="flex-1 md:max-w-md">
                        <Reveal>
                            <h2 className="text-2xl font-bold mb-8">Как это работает:</h2>
                        </Reveal>
                        <ol className="flex flex-col gap-6 relative before:absolute before:inset-0 before:ml-[11px] before:w-[2px] before:-z-10 before:bg-gray-100">
                            <Reveal delay={100}>
                                <li className="flex gap-6 items-start bg-white z-10 py-1">
                                    <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold shrink-0 mt-1">1</div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Выберите модель</h3>
                                        <p className="text-text-secondary">Определитесь с объемом на странице моделей.</p>
                                    </div>
                                </li>
                            </Reveal>
                            <Reveal delay={200}>
                                <li className="flex gap-6 items-start bg-white z-10 py-1">
                                    <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold shrink-0 mt-1">2</div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Напишите нам</h3>
                                        <p className="text-text-secondary">Отправьте сообщение в Telegram или WhatsApp с пожеланиями по принту.</p>
                                    </div>
                                </li>
                            </Reveal>
                            <Reveal delay={300}>
                                <li className="flex gap-6 items-start bg-white z-10 py-1">
                                    <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold shrink-0 mt-1">3</div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Утвердите макет</h3>
                                        <p className="text-text-secondary">Мы подготовим макет, покажем вам, и после одобрения отправим в печать.</p>
                                    </div>
                                </li>
                            </Reveal>
                        </ol>
                    </div>

                    {/* Contact Box */}
                    <div className="flex-1 max-w-sm">
                        <Reveal delay={200}>
                            <div className="bg-light-gray rounded-3xl p-8 md:sticky md:top-24 shadow-sm border border-gray-100/50">
                                <h3 className="text-2xl font-bold mb-6">Оформить заказ</h3>
                                <div className="flex flex-col gap-4">
                                    <Button variant="primary" size="lg" href="https://t.me/oksivit03" target="_blank" className="w-full text-lg">
                                        Написать в Telegram
                                    </Button>
                                    <Button variant="outline" size="lg" href="https://wa.me/79067365392" target="_blank" className="w-full mb-4 text-lg bg-white">
                                        WhatsApp (+7 906...)
                                    </Button>
                                </div>
                                <p className="text-sm text-text-secondary text-center mt-4 border-t border-gray-200 pt-4">
                                    Изготовление за 1-2 рабочих дня. Доставка по всей РФ.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="w-full bg-light-gray py-24 px-4 md:px-6 lg:px-20 border-t border-gray-200">
                <Reveal>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">Частые вопросы</h2>
                </Reveal>
                <Reveal delay={100}>
                    <div className="bg-white rounded-3xl max-w-3xl mx-auto p-6 md:p-10 shadow-sm border border-gray-100">
                        <Accordion items={faqItems} />
                    </div>
                </Reveal>
            </section>
        </div>
    );
}
