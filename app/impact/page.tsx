"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import GradientBackground from "@/components/effects/GradientBackground";
import TypewriterText from "@/components/effects/TypewriterText";
import ButtonPrimary from "@/components/ui/ButtonPrimary";

const impactStatements = [
    "Before you, I didn't know conversations could feel like coming home.",
    "You made me believe that genuine connections still exist.",
    "The way you see the world changed how I see mine.",
    "You taught me that vulnerability isn't weakness — it's courage.",
    "Because of you, I laugh more, dream more, hope more.",
    "You showed me what it means to truly be seen.",
];

export default function ImpactPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    const handleComplete = () => {
        setIsTyping(false);
    };

    const handleNext = () => {
        if (currentIndex < impactStatements.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setIsTyping(true);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setIsTyping(true);
        }
    };

    return (
        <GradientBackground variant="romantic">
            <Navbar />

            {/* Blur overlay */}
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-0" />

            <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-16"
                    >
                        <span className="text-5xl mb-4 block">💫</span>
                        <h1 className="font-display text-3xl md:text-4xl font-bold text-white/90">
                            What You Changed
                        </h1>
                    </motion.div>

                    {/* Typewriter Statement */}
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="min-h-[200px] flex items-center justify-center mb-12"
                    >
                        <p className="font-display text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed">
                            <TypewriterText
                                text={impactStatements[currentIndex]}
                                speed={40}
                                onComplete={handleComplete}
                            />
                        </p>
                    </motion.div>

                    {/* Progress indicator */}
                    <div className="flex justify-center gap-2 mb-8">
                        {impactStatements.map((_, index) => (
                            <motion.div
                                key={index}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? "bg-pink-400 w-8"
                                        : index < currentIndex
                                            ? "bg-pink-400/50"
                                            : "bg-white/20"
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Navigation */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex justify-center gap-4"
                    >
                        <button
                            onClick={handlePrevious}
                            disabled={currentIndex === 0}
                            className="px-6 py-2 font-accent text-sm text-white/60 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                        >
                            ← Previous
                        </button>

                        {currentIndex < impactStatements.length - 1 ? (
                            <button
                                onClick={handleNext}
                                disabled={isTyping}
                                className="px-6 py-2 font-accent text-sm text-pink-400 hover:text-pink-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                            >
                                Next →
                            </button>
                        ) : (
                            <ButtonPrimary href="/game">
                                Play a Game 🎮
                            </ButtonPrimary>
                        )}
                    </motion.div>
                </div>
            </main>

            <Footer />
        </GradientBackground>
    );
}
