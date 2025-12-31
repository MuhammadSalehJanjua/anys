"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    type?: "fade" | "slide" | "stagger";
    as?: "h1" | "h2" | "h3" | "p" | "span";
}

const fadeVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const slideVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
};

export default function AnimatedText({
    children,
    className = "",
    delay = 0,
    type = "fade",
    as = "p",
}: AnimatedTextProps) {
    const variants = type === "slide" ? slideVariants : fadeVariants;
    const Component = motion[as];

    return (
        <Component
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{
                duration: 0.6,
                delay,
                ease: "easeOut",
            }}
            className={className}
        >
            {children}
        </Component>
    );
}

// Stagger text for character-by-character animation
interface StaggerTextProps {
    text: string;
    className?: string;
    delay?: number;
    staggerDelay?: number;
}

export function StaggerText({
    text,
    className = "",
    delay = 0,
    staggerDelay = 0.03,
}: StaggerTextProps) {
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: delay,
            },
        },
    };

    const child = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", damping: 12 },
        },
    };

    return (
        <motion.span
            variants={container}
            initial="hidden"
            animate="visible"
            className={className}
        >
            {text.split("").map((char, index) => (
                <motion.span key={index} variants={child} className="inline-block">
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.span>
    );
}
