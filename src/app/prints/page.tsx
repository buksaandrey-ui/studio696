import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export default function PrintsPage() {
    const categories = [
        { title: "Мемы", text: "Актуальный юмор, который всегда с тобой.", icon: "🤡" },
        { title: "Тематические", text: "Игры, фильмы, хобби. Подчеркни увлечения.", icon: "🎮" },
        { title: "Поздравительные", text: "Скажи главное без лишних слов.", icon: "🎉" },
        { title: "Именные", text: "Только твой дизайн.", icon: "✍️" },
        { title: "Детские", text: "Радость для самых маленьких.", icon: "🦄" },
        { title: "Фотоколлаж", text: "Ваши воспоминания всегда под рукой.", icon: "🖼️" },
    ];

    return (
        <div className="flex flex-col items-center overflow-hidden">
            {/* Header */}
            <section className="w-full max-w-[1200px] px-4 md:px-6 lg:px-20 pt-16 md:pt-24 pb-16 text-center">
                <Reveal>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-normal mb-6 font-[family-name:var(--font-script)]">
                        Искусство на вашем термосе.
                    </h1>
                </Reveal>
                <Reveal delay={100}>
                    <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto">
                        Собрали коллекции, в которых каждый найдет что-то свое. Выберите из сотен готовых дизайнов или предложите свой.
                    </p>
                </Reveal>
            </section>

            {/* Categories Grid */}
            <section className="w-full max-w-[1200px] px-4 md:px-6 lg:px-20 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((c, i) => (
                        <Reveal key={i} delay={i * 100}>
                            <Card className="hover:-translate-y-1 h-full">
                                <CardContent className="p-8 h-full">
                                    <div className="w-14 h-14 rounded-full bg-light-gray flex items-center justify-center mb-6 text-2xl">
                                        {c.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
                                    <p className="text-text-secondary">{c.text}</p>
                                </CardContent>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Guidelines / Custom Print */}
            <section className="w-full bg-light-gray py-20 px-4 md:px-6 lg:px-20 text-center border-t border-gray-200 relative overflow-hidden">
                <Reveal>
                    <div className="max-w-[800px] mx-auto bg-white rounded-3xl p-10 md:p-16 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 z-10 relative">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Свой собственный дизайн</h2>
                        <p className="text-lg text-text-secondary mb-8">
                            Принимаем JPEG и PNG в высоком качестве. Наш дизайнер бесплатно поможет с подготовкой макета перед печатью, чтобы результат был идеальным.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button variant="primary" href="https://t.me/oksivit03" target="_blank" className="w-full sm:w-auto">Отправить макет в Telegram</Button>
                        </div>
                    </div>
                </Reveal>
            </section>
        </div>
    );
}
