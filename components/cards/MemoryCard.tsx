"use client";

import { motion } from "framer-motion";

interface MemoryCardProps {
    title: string;
    description: string;
    date?: string;
    align?: "left" | "right";
    index?: number;
}

export default function MemoryCard({
    title,
    description,
    date,
    align = "left",
    index = 0,
}: MemoryCardProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                x: align === "left" ? -50 : 50,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
            }}
            className={`flex ${align === "right" ? "justify-end" : "justify-start"} mb-12`}
        >
            <div className="relative max-w-md">
                {/* Polaroid style card */}
                <motion.div
                    whileHover={{ rotate: align === "left" ? 2 : -2, scale: 1.02 }}
                    className="glass-card glass-card-hover p-6 bg-white/5"
                    style={{
                        transform: `rotate(${align === "left" ? "-2deg" : "2deg"})`,
                    }}
                >
                    {/* Tape decoration */}
                    <div
                        className={`absolute -top-3 ${align === "left" ? "left-6" : "right-6"
                            } w-12 h-6 bg-yellow-200/30 rotate-12 rounded-sm`}
                    />

                    {date && (
                        <p className="font-accent text-xs text-white/40 uppercase tracking-wider mb-3">
                            {date}
                        </p>
                    )}

                    <h3 className="font-display text-xl font-semibold text-gradient-love mb-3">
                        {title}
                    </h3>

                    <p className="font-sans text-white/70 leading-relaxed">{description}</p>

                    {/* Decorative corner */}
                    <div className="absolute bottom-3 right-3 text-xl opacity-50">
                        💝
                    </div>
                </motion.div>

                {/* Timeline connector */}
                <div
                    className={`absolute top-1/2 ${align === "left" ? "-right-8" : "-left-8"
                        } w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full transform -translate-y-1/2`}
                />
            </div>
        </motion.div>
    );
}
