"use client";

import React, { useState } from "react";

interface AccordionItem {
    question: string;
    answer: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col gap-4">
            {items.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                    <div
                        key={index}
                        className="border-b border-gray-200 overflow-hidden"
                    >
                        <button
                            className="w-full py-4 flex items-center justify-between text-left font-medium text-lg text-text-primary focus:outline-none"
                            onClick={() => toggle(index)}
                            aria-expanded={isOpen}
                        >
                            <span className="pr-4">{item.question}</span>
                            <span
                                className={`transform transition-transform duration-300 ease-in-out text-2xl font-light text-text-secondary ${isOpen ? "rotate-45" : "rotate-0"
                                    }`}
                            >
                                +
                            </span>
                        </button>
                        <div
                            className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                }`}
                        >
                            <div className="overflow-hidden">
                                <p className="pb-4 pt-1 text-text-secondary leading-relaxed">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
