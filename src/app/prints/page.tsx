import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";

export default function PrintsPage() {
    const categories = [
        { image: "/images/Prints_mem.jpeg", text: "Актуальный юмор, который всегда с тобой." },
        { image: "/images/Prints_theme.jpeg", text: "Игры, фильмы, хобби. Подчеркни увлечения." },
        { image: "/images/Prints_grats.jpeg", text: "Скажи главное без лишних слов." },
        { image: "/images/Prints_name.jpeg", text: "Только твой дизайн." },
    ];

    return (
        <div className="flex flex-col items-center overflow-hidden">
            {/* Header */}
            <section className="w-full max-w-[1200px] px-4 md:px-6 lg:px-20 pt-16 md:pt-24 pb-16 text-center">
                <Reveal>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-normal mb-6 font-[family-name:var(--font-script)]">
                        Тер<span className="text-[#FF4500]">мо</span>сы с прин<span className="text-[#FF4500]">там</span>и, <br />
                        которые <span className="text-[#FF4500]">рад</span>уют кажд<span className="text-[#FF4500]">ый</span> день.
                    </h1>
                </Reveal>
                <Reveal delay={100}>
                    <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto">
                        Создали коллекции, в которых каждый найдет что-то свое. Выберите из готовых вариантов дизайнов или предложите свой.
                    </p>
                </Reveal>
            </section>

            {/* Categories Grid */}
            <section className="w-full max-w-[1200px] px-4 md:px-6 lg:px-20 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {categories.map((c, i) => (
                        <Reveal key={i} delay={i * 100}>
                            <Card className="hover:-translate-y-1 h-full overflow-hidden flex flex-col">
                                <div className="w-full aspect-[4/3] relative bg-light-gray">
                                    <Image src={c.image} alt="Принты" fill className="object-cover" />
                                </div>
                                <CardContent className="p-6 md:p-8 flex-1 flex items-center justify-center text-center">
                                    <p className="text-lg md:text-xl text-text-primary font-medium">{c.text}</p>
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
                            <Button variant="primary" href="https://t.me/studio696_thermos" target="_blank" className="w-full sm:w-auto">Отправить макет в Telegram</Button>
                        </div>
                    </div>
                </Reveal>
            </section>
        </div>
    );
}
