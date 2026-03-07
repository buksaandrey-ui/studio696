"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    delay?: number;
}

export function Reveal({ children, className = "", delay = 0, ...props }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        if (ref.current) {
            if (prefersReducedMotion) {
                // Just show immediately if reduced motion is preferred
                setIsVisible(true);
            } else {
                observer.observe(ref.current);
            }
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3"
                } motion-reduce:transition-opacity motion-reduce:translate-y-0 motion-reduce:duration-500 ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
            {...props}
        >
            {children}
        </div>
    );
}
