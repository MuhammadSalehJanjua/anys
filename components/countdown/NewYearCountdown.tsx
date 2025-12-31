"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import ConfettiBurst, { HeartsBurst } from "../effects/ConfettiBurst";

interface CountdownState {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isNewYear: boolean;
}

interface NewYearCountdownProps {
    targetDate?: Date;
    specialMessage?: string;
    onCountdownComplete?: () => void;
}

const defaultMessage = `Sana, as the clock strikes midnight and a new year begins, know this — every moment I've shared with you has been a gift. Here's to more laughter, more memories, and more of everything that makes you... you. Happy New Year 💖`;

export default function NewYearCountdown({
    targetDate = new Date("2025-01-01T00:00:00"),
    specialMessage = defaultMessage,
    onCountdownComplete,
}: NewYearCountdownProps) {
    const [countdown, setCountdown] = useState<CountdownState>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isNewYear: false,
    });
    const [showMessage, setShowMessage] = useState(false);

    const calculateTimeLeft = useCallback(() => {
        const now = new Date().getTime();
        const target = targetDate.getTime();
        const difference = target - now;

        if (difference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
                isNewYear: true,
            };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
            isNewYear: false,
        };
    }, [targetDate]);

    useEffect(() => {
        // Initial calculation
        setCountdown(calculateTimeLeft());

        const timer = setInterval(() => {
            const newCountdown = calculateTimeLeft();
            setCountdown(newCountdown);

            if (newCountdown.isNewYear && !countdown.isNewYear) {
                onCountdownComplete?.();
                setTimeout(() => setShowMessage(true), 1500);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [calculateTimeLeft, countdown.isNewYear, onCountdownComplete]);

    const formatNumber = (num: number) => String(num).padStart(2, "0");

    if (countdown.isNewYear) {
        return (
            <div className="text-center">
                <ConfettiBurst trigger={true} duration={5000} />
                <HeartsBurst trigger={true} />

                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: 0.2,
                    }}
                    className="mb-8"
                >
                    <motion.h2
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, -2, 2, 0],
                        }}
                        transition={{
                            duration: 0.6,
                            repeat: 3,
                        }}
                        className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-gradient-love mb-4"
                    >
                        🎉 Happy New Year! 🎉
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="font-display text-2xl md:text-3xl text-white/90"
                    >
                        2025
                    </motion.p>
                </motion.div>

                <AnimatePresence>
                    {showMessage && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="glass-card max-w-2xl mx-auto p-8"
                        >
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="font-display text-lg md:text-xl text-white/90 leading-relaxed italic"
                            >
                                &ldquo;{specialMessage}&rdquo;
                            </motion.p>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.8, type: "spring" }}
                                className="mt-6 text-4xl"
                            >
                                💝
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    }

    return (
        <div className="text-center">
            <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-accent text-sm text-white/60 uppercase tracking-widest mb-6"
            >
                Counting down to something special...
            </motion.p>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {[
                    { value: countdown.days, label: "Days" },
                    { value: countdown.hours, label: "Hours" },
                    { value: countdown.minutes, label: "Minutes" },
                    { value: countdown.seconds, label: "Seconds" },
                ].map((item, index) => (
                    <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="countdown-box"
                    >
                        <motion.div
                            key={item.value}
                            initial={{ scale: 1.2, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="countdown-number"
                        >
                            {formatNumber(item.value)}
                        </motion.div>
                        <div className="countdown-label">{item.label}</div>
                    </motion.div>
                ))}
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 font-display text-xl text-white/70"
            >
                Until midnight... ✨
            </motion.p>
        </div>
    );
}
