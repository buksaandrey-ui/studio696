"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "../ui/Button";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-20">
                <div className="flex items-center justify-between h-14 md:h-16 lg:h-[72px] relative">
                    {/* Logo */}
                    <Link href="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex items-center focus:outline-none shrink-0">
                        <img src="/images/logo1.png" alt="Studio 696" className="h-6 md:h-8 w-auto object-contain" />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
                        <Link href="/models" className="hover:text-text-primary transition-colors">
                            Модели
                        </Link>
                        <Link href="/prints" className="hover:text-text-primary transition-colors">
                            Принты
                        </Link>
                        <Link href="/contact" className="hover:text-text-primary transition-colors">
                            Контакты
                        </Link>
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button variant="primary-red" size="sm" href="https://t.me/oksivit03" target="_blank">
                            Заказать в Telegram
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-text-primary ml-auto"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            {mobileMenuOpen ? (
                                <>
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </>
                            ) : (
                                <>
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                </>
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-sm md:hidden p-4 flex flex-col gap-4">
                    <Link
                        href="/models"
                        className="text-lg font-medium py-2 border-b border-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Модели
                    </Link>
                    <Link
                        href="/prints"
                        className="text-lg font-medium py-2 border-b border-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Принты
                    </Link>
                    <Link
                        href="/contact"
                        className="text-lg font-medium py-2 border-b border-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Контакты
                    </Link>
                    <div className="pt-2 flex flex-col gap-2">
                        <Button variant="primary-red" size="md" href="https://t.me/oksivit03" className="w-full">
                            Заказать в Telegram
                        </Button>
                        <Button variant="secondary" size="md" href="https://wa.me/79067365392" className="w-full">
                            WhatsApp
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
