import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 mt-20 md:mt-32">
            <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-20 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                    {/* Brand Col */}
                    <div className="md:col-span-2 flex flex-row items-center justify-start gap-6">
                        <Link href="/" className="inline-block focus:outline-none shrink-0 w-full max-w-[180px]">
                            <img src="/images/logo.png" alt="Studio 696" className="w-full h-auto object-contain object-left" />
                        </Link>
                        <p className="text-xl md:text-3xl font-normal text-text-primary font-[family-name:var(--font-script)] leading-[1.1] whitespace-pre-wrap text-left inline-block mt-[-10px]">
                            {"По"}<span className="text-[#FF4500]">да</span>{"рки      \n        с  эмоциями"}<span className="text-[#FF4500]">!</span>
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Навигация</h4>
                        <ul className="flex flex-col gap-3 text-text-secondary">
                            <li>
                                <Link href="/models" className="hover:text-text-primary transition-colors">
                                    Модели
                                </Link>
                            </li>
                            <li>
                                <Link href="/prints" className="hover:text-text-primary transition-colors">
                                    Принты
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-text-primary transition-colors">
                                    FAQ & Контакты
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social / Contact */}
                    <div>
                        <h4 className="font-semibold mb-4">Связаться</h4>
                        <ul className="flex flex-col gap-3 text-text-secondary">
                            <li>
                                <a href="https://t.me/oksivit03" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">
                                    Telegram
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/79067365392" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">
                                    WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 md:mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-secondary">
                    <p>&copy; {new Date().getFullYear()} Studio 696. Все права защищены.</p>
                    <div className="flex gap-4">
                        <Link href="/contact" className="hover:text-text-primary transition-colors">
                            Политика конфиденциальности
                        </Link>
                        <Link href="/contact" className="hover:text-text-primary transition-colors">
                            Договор оферты
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
