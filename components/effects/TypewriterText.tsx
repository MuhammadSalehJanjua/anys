"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterTextProps {
    text: string;
    className?: string;
    delay?: number;
    speed?: number;
    onComplete?: () => void;
}

export default function TypewriterText({
    text,
    className = "",
    delay = 0,
    speed = 50,
    onComplete,
}: TypewriterTextProps) {
    const [displayText, setDisplayText] = useState("");
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const startTyping = () => {
            let currentIndex = 0;

            const typeNextChar = () => {
                if (currentIndex < text.length) {
                    setDisplayText(text.slice(0, currentIndex + 1));
                    currentIndex++;
                    timeoutId = setTimeout(typeNextChar, speed);
                } else {
                    setIsComplete(true);
                    onComplete?.();
                }
            };

            timeoutId = setTimeout(typeNextChar, delay);
        };

        startTyping();

        return () => clearTimeout(timeoutId);
    }, [text, delay, speed, onComplete]);

    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={className}
        >
            {displayText}
            {!isComplete && (
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-0.5 h-[1em] bg-current ml-1 align-middle"
                />
            )}
        </motion.span>
    );
}
