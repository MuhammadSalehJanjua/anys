"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import GradientBackground from "@/components/effects/GradientBackground";
import MemoryCard from "@/components/cards/MemoryCard";
import AnimatedText from "@/components/effects/AnimatedText";
import ButtonPrimary from "@/components/ui/ButtonPrimary";

const memories = [
    {
        title: "The First Conversation",
        description: "It wasn't anything grand — just words exchanged across a screen. But something clicked. A spark that refused to fade.",
        date: "The Beginning",
    },
    {
        title: "When You Made Me Laugh",
        description: "That unexpected joke, that perfectly timed response. I remember thinking: this person is special.",
        date: "Early Days",
    },
    {
        title: "The Late Night Talks",
        description: "When the world was quiet and it was just us. Those conversations that stretched into the early hours — they meant everything.",
        date: "Growing Closer",
    },
    {
        title: "When Everything Felt Heavy",
        description: "You were there. Not with grand gestures, but with your presence. Sometimes that's all anyone needs.",
        date: "Through the Storms",
    },
    {
        title: "The Inside Jokes",
        description: "Those little things that only we understand. A word, a phrase, a reference — and suddenly we're both laughing.",
        date: "Building Our World",
    },
    {
        title: "Every Moment in Between",
        description: "The ordinary days that weren't really ordinary at all. Because having you in them made them extraordinary.",
        date: "Always",
    },
];

export default function MemoriesPage() {
    return (
        <GradientBackground variant="night">
            <Navbar />

            <main className="min-h-screen py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", delay: 0.2 }}
                            className="text-6xl mb-6"
                        >
                            📸
                        </motion.div>
                        <AnimatedText
                            as="h1"
                            delay={0.3}
                            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                        >
                            Moments That Stayed With Me
                        </AnimatedText>
                        <AnimatedText
                            delay={0.5}
                            className="font-display text-xl text-white/60 italic max-w-2xl mx-auto"
                        >
                            A timeline of memories that I&apos;ll carry with me forever...
                        </AnimatedText>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500/50 via-purple-500/50 to-transparent transform -translate-x-1/2" />

                        {/* Memory Cards */}
                        {memories.map((memory, index) => (
                            <MemoryCard
                                key={memory.title}
                                title={memory.title}
                                description={memory.description}
                                date={memory.date}
                                align={index % 2 === 0 ? "left" : "right"}
                                index={index}
                            />
                        ))}
                    </div>

                    {/* Call to action */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-20"
                    >
                        <p className="font-display text-lg text-white/60 mb-6">
                            These moments changed me...
                        </p>
                        <ButtonPrimary href="/impact">
                            See the Impact 💫
                        </ButtonPrimary>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </GradientBackground>
    );
}
