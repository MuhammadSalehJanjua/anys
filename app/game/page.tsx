"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import GradientBackground from "@/components/effects/GradientBackground";
import StickerFloat from "@/components/effects/StickerFloat";
import ConfettiBurst, { HeartsBurst } from "@/components/effects/ConfettiBurst";
import ButtonPrimary from "@/components/ui/ButtonPrimary";

interface Statement {
    text: string;
    response: string;
}

const statements: Statement[] = [
    {
        text: "Sana makes everything better",
        response: "Obviously. That's just science.",
    },
    {
        text: "Sana pretending she's not special",
        response: "The audacity. The delusion. The lies.",
    },
    {
        text: "The world is brighter because of Sana",
        response: "Literally and metaphorically. Facts.",
    },
    {
        text: "Sana has the best laugh",
        response: "If you've heard it, you know. If you haven't, I'm sorry.",
    },
    {
        text: "Everyone who meets Sana is lucky",
        response: "They just don't know how lucky yet.",
    },
];

type GameState = "start" | "playing" | "result";

export default function GamePage() {
    const [gameState, setGameState] = useState<GameState>("start");
    const [currentStatement, setCurrentStatement] = useState(0);
    const [showResponse, setShowResponse] = useState(false);
    const [lastAnswer, setLastAnswer] = useState<"true" | "lies" | null>(null);

    const handleStart = () => {
        setGameState("playing");
        setCurrentStatement(0);
        setShowResponse(false);
        setLastAnswer(null);
    };

    const handleAnswer = (answer: "true" | "lies") => {
        setLastAnswer(answer);
        setShowResponse(true);

        setTimeout(() => {
            if (currentStatement < statements.length - 1) {
                setCurrentStatement(currentStatement + 1);
                setShowResponse(false);
                setLastAnswer(null);
            } else {
                setGameState("result");
            }
        }, 2000);
    };

    return (
        <GradientBackground>
            <Navbar />
            {gameState === "result" && <StickerFloat stickers={["💖", "💝", "💕"]} count={25} />}

            <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
                <AnimatePresence mode="wait">
                    {/* Start Screen */}
                    {gameState === "start" && (
                        <motion.div
                            key="start"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="text-center"
                        >
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-7xl mb-8"
                            >
                                🎮
                            </motion.div>
                            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                                Sana Says
                            </h1>
                            <p className="font-display text-xl text-white/60 mb-8 max-w-md mx-auto">
                                A playful game where the truth is... well, obvious.
                            </p>
                            <ButtonPrimary onClick={handleStart}>
                                Let&apos;s Play! ✨
                            </ButtonPrimary>
                        </motion.div>
                    )}

                    {/* Game Screen */}
                    {gameState === "playing" && (
                        <motion.div
                            key="playing"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-center max-w-2xl"
                        >
                            {/* Progress */}
                            <div className="flex justify-center gap-2 mb-8">
                                {statements.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentStatement
                                                ? "bg-pink-400 scale-125"
                                                : index < currentStatement
                                                    ? "bg-pink-400/50"
                                                    : "bg-white/20"
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Statement */}
                            <motion.div
                                key={currentStatement}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="glass-card p-8 mb-8"
                            >
                                <p className="font-display text-2xl md:text-3xl text-white">
                                    &ldquo;{statements[currentStatement].text}&rdquo;
                                </p>
                            </motion.div>

                            {/* Response animation */}
                            <AnimatePresence>
                                {showResponse && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="mb-8"
                                    >
                                        <p className="font-accent text-lg text-pink-300">
                                            {lastAnswer === "lies" ? "Nice try, but... " : ""}
                                            {statements[currentStatement].response}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Answer Buttons */}
                            {!showResponse && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex justify-center gap-4"
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => handleAnswer("true")}
                                        className="glass-card px-8 py-4 text-xl hover:bg-green-500/20 hover:border-green-400/40 transition-all"
                                    >
                                        😌 True
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => handleAnswer("lies")}
                                        className="glass-card px-8 py-4 text-xl hover:bg-red-500/20 hover:border-red-400/40 transition-all"
                                    >
                                        🙄 Lies
                                    </motion.button>
                                </motion.div>
                            )}
                        </motion.div>
                    )}

                    {/* Result Screen */}
                    {gameState === "result" && (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center"
                        >
                            <ConfettiBurst trigger={true} duration={4000} />
                            <HeartsBurst trigger={true} />

                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", delay: 0.2 }}
                                className="text-7xl mb-8"
                            >
                                🏆
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="font-display text-3xl md:text-4xl font-bold text-gradient-love mb-6"
                            >
                                Game Complete!
                            </motion.h2>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="glass-card p-8 max-w-lg mx-auto mb-8"
                            >
                                <p className="font-display text-xl md:text-2xl text-white italic">
                                    &ldquo;Even the game couldn&apos;t deny it — Sana is something else.&rdquo;
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                                className="flex flex-col sm:flex-row justify-center gap-4"
                            >
                                <button
                                    onClick={handleStart}
                                    className="px-6 py-3 font-accent text-white/60 hover:text-white transition-colors"
                                >
                                    Play Again
                                </button>
                                <ButtonPrimary href="/final-note">
                                    One Last Thing 💝
                                </ButtonPrimary>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

            <Footer />
        </GradientBackground>
    );
}
