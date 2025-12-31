"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Sticker {
    id: number;
    emoji: string;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
}

interface StickerFloatProps {
    stickers?: string[];
    count?: number;
}

const defaultStickers = ["💖", "✨", "🌸", "⭐", "💫", "🦋", "💝", "🌟"];

export default function StickerFloat({
    stickers = defaultStickers,
    count = 15,
}: StickerFloatProps) {
    const [floatingStickers, setFloatingStickers] = useState<Sticker[]>([]);

    useEffect(() => {
        const newStickers: Sticker[] = [];
        for (let i = 0; i < count; i++) {
            newStickers.push({
                id: i,
                emoji: stickers[Math.floor(Math.random() * stickers.length)],
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 1.5 + 0.5,
                duration: Math.random() * 4 + 4,
                delay: Math.random() * 2,
            });
        }
        setFloatingStickers(newStickers);
    }, [count, stickers]);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {floatingStickers.map((sticker) => (
                <motion.div
                    key={sticker.id}
                    initial={{
                        x: `${sticker.x}vw`,
                        y: `${sticker.y}vh`,
                        opacity: 0,
                        scale: 0,
                    }}
                    animate={{
                        y: [`${sticker.y}vh`, `${sticker.y - 20}vh`, `${sticker.y}vh`],
                        opacity: [0, 0.6, 0.6, 0],
                        scale: [0, sticker.size, sticker.size, 0],
                        rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                        duration: sticker.duration,
                        delay: sticker.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute text-2xl"
                    style={{
                        left: `${sticker.x}%`,
                        fontSize: `${sticker.size * 1.5}rem`,
                    }}
                >
                    {sticker.emoji}
                </motion.div>
            ))}
        </div>
    );
}
