"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GradientBackgroundProps {
    children: ReactNode;
    className?: string;
    variant?: "default" | "romantic" | "night";
}

export default function GradientBackground({
    children,
    className = "",
    variant = "default",
}: GradientBackgroundProps) {
    const gradients = {
        default: "animated-bg",
        romantic: "bg-gradient-to-br from-[#0D0D1A] via-[#4a1942] to-[#191970]",
        night: "bg-gradient-to-br from-[#0D0D1A] via-[#191970] to-[#0D0D1A]",
    };

    return (
        <div className={`min-h-screen relative overflow-hidden ${gradients[variant]} ${className}`}>
            {/* Animated gradient orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    x: [0, -100, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"
            />

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </div>
    );
}
