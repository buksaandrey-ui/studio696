import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function Card({ className = "", children, ...props }: CardProps) {
    return (
        <div
            className={`bg-color-background rounded-2xl overflow-hidden border border-gray-100/50 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardContent({
    className = "",
    children,
    ...props
}: CardProps) {
    return (
        <div className={`p-6 ${className}`} {...props}>
            {children}
        </div>
    );
}
