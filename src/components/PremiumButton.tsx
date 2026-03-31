"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface PremiumButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
    href?: string;
    variant?: "primary" | "secondary";
    icon?: React.ReactNode;
}

export function PremiumButton({ children, href, variant = "primary", className, icon, ...props }: PremiumButtonProps) {
    const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-tight rounded-full transition-colors overflow-hidden";
    const variants = {
        primary: "bg-foreground text-background hover:bg-foreground/90 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)]",
        secondary: "bg-transparent text-foreground border border-foreground/10 hover:bg-foreground/5",
    };

    const buttonContent = (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className={cn(baseStyles, variants[variant], className)}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">
                {children}
                {icon && <span className="flex items-center justify-center">{icon}</span>}
            </span>
            {variant === "primary" && (
                <motion.div
                    className="absolute inset-0 z-0 bg-accent/10 opacity-0 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                />
            )}
        </motion.button>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
                {buttonContent}
            </a>
        );
    }

    return buttonContent;
}
