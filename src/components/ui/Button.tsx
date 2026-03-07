import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "primary-red";
    size?: "sm" | "md" | "lg";
    href?: string;
    target?: string;
    rel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className = "",
            variant = "primary",
            size = "md",
            href,
            target,
            rel,
            children,
            ...props
        },
        ref
    ) => {
        const baseStyles =
            "inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out hover:-translate-y-[1px]";

        const variants = {
            primary: "bg-black text-white hover:bg-[#FF4500] hover:shadow-[0_8px_24px_rgba(255,69,0,0.25)]",
            secondary: "bg-light-gray text-text-primary hover:bg-[#FF4500] hover:text-white",
            outline: "border border-black text-black hover:bg-[#FF4500] hover:text-white hover:border-[#FF4500]",
            ghost: "text-text-primary hover:text-[#FF4500] hover:bg-[#FF4500]/10",
            "primary-red": "bg-[#FF4500] text-white hover:bg-black hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm rounded-xl",
            md: "px-6 py-3 text-base rounded-xl",
            lg: "px-8 py-4 text-lg rounded-2xl",
        };

        const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

        if (href) {
            return (
                <Link href={href} className={classes} target={target} rel={rel}>
                    {children}
                </Link>
            );
        }

        return (
            <button ref={ref} className={classes} {...props}>
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";
