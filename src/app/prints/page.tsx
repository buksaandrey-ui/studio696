"use client";

import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function PrintsPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Закрытие по клавише ESC
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedImage(null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);
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
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-normal mb-6 font-[family-name:var(--font-script)] leading-[1.1]">
                        Тер<span className="text-[#FF4500]">мо</span>сы с принтом, <br className="hidden md:block" />
                        надписями, <span className="text-[#FF4500]">фо</span>то и аниме-дизайном
                    </h1>
                </Reveal>
                <Reveal delay={100}>
                    <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto">
                        Создали коллекции, в которых каждый найдет что-то свое. Выберите из готовых вариантов дизайнов или предложите свой.
                    </p>
                </Reveal>
            </section>

            {/* Categories Grid */}
            <section className="w-full max-w-[1200px] px-4 md:px-6 lg:px-20 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {categories.map((c, i) => (
                        <Reveal key={i} delay={i * 100}>
                            <Card className="hover:-translate-y-1 h-full overflow-hidden flex flex-col">
                                <div 
                                    className="w-full aspect-[4/3] relative bg-light-gray cursor-pointer group"
                                    onClick={() => setSelectedImage(c.image)}
                                >
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 hidden md:block" />
                                    <Image src={c.image} alt="Принты" fill className="object-cover transition-transform duration-500 md:group-hover:scale-105" />
                                </div>
                                <CardContent className="p-6 md:p-8 flex-1 flex items-center justify-center text-center">
                                    <p className="text-lg md:text-xl text-text-primary font-medium">{c.text}</p>
                                </CardContent>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Additional categories */}
            <section className="w-full max-w-[1200px] px-4 md:px-6 lg:px-20 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    <Reveal>
                        <Card className="hover:-translate-y-1 h-full overflow-hidden flex flex-col">
                            <div 
                                className="w-full aspect-[4/3] relative bg-light-gray cursor-pointer group"
                                onClick={() => setSelectedImage("/images/Prints_detskie.jpg")}
                            >
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 hidden md:block" />
                                <Image src="/images/Prints_detskie.jpg" alt="Детские принты для термоса" fill className="object-cover transition-transform duration-500 md:group-hover:scale-105" />
                            </div>
                            <CardContent className="p-6 md:p-8 flex-1 flex items-center justify-center text-center">
                                <p className="text-lg md:text-xl text-text-primary font-medium">Детские — любимые персонажи на термосе.</p>
                            </CardContent>
                        </Card>
                    </Reveal>
                    <Reveal delay={100}>
                        <Card className="hover:-translate-y-1 h-full overflow-hidden flex flex-col">
                            <div 
                                className="w-full aspect-[4/3] relative bg-light-gray cursor-pointer group"
                                onClick={() => setSelectedImage("/images/Prints_logotipy.jpg")}
                            >
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 hidden md:block" />
                                <Image src="/images/Prints_logotipy.jpg" alt="Логотипы для печати на термосе" fill className="object-cover transition-transform duration-500 md:group-hover:scale-105" />
                            </div>
                            <CardContent className="p-6 md:p-8 flex-1 flex items-center justify-center text-center">
                                <p className="text-lg md:text-xl text-text-primary font-medium">Логотипы — ваш бренд на каждом термосе.</p>
                            </CardContent>
                        </Card>
                    </Reveal>
                    <Reveal delay={200}>
                        <Card className="hover:-translate-y-1 h-full overflow-hidden flex flex-col">
                            <div 
                                className="w-full aspect-[4/3] relative bg-light-gray cursor-pointer group"
                                onClick={() => setSelectedImage("/images/Prints_vashi_foto_new.jpg")}
                            >
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 hidden md:block" />
                                <Image src="/images/Prints_vashi_foto_new.jpg" alt="Ваши фотографии на термосе" fill className="object-cover transition-transform duration-500 md:group-hover:scale-105" />
                            </div>
                            <CardContent className="p-6 md:p-8 flex-1 flex items-center justify-center text-center">
                                <p className="text-lg md:text-xl text-text-primary font-medium">Ваши фотографии — на термосе.</p>
                            </CardContent>
                        </Card>
                    </Reveal>
                </div>
            </section>

            {/* Advantages Block */}
            <section className="w-full bg-white py-20 px-4 md:px-6 lg:px-20 text-center border-t border-gray-200">
                <div className="max-w-[1200px] mx-auto">
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
                                <Image src="/images/advantage_3.jpeg" alt="Идеальный подарок" width={800} height={800} className="w-full h-auto object-contain" />
                            </div>
                        </Reveal>
                    </div>
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
            {/* Lightbox Overlay */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-10 transition-opacity"
                    onClick={() => setSelectedImage(null)}
                >
                    <button 
                        className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors z-50 p-2"
                        onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                        aria-label="Закрыть"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>
                    <div 
                        className="relative w-full max-w-5xl h-full flex items-center justify-center" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image 
                            src={selectedImage} 
                            alt="Принт (увеличено)" 
                            fill 
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
