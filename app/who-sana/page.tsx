"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import GradientBackground from "@/components/effects/GradientBackground";
import StickerFloat from "@/components/effects/StickerFloat";
import TraitCard from "@/components/cards/TraitCard";
import AnimatedText from "@/components/effects/AnimatedText";
import ButtonPrimary from "@/components/ui/ButtonPrimary";

const traits = [
    {
        trait: "The Light in Every Room",
        description: "There's something about the way you enter a space — suddenly, everything feels warmer, brighter, more alive.",
        emoji: "✨",
    },
    {
        trait: "Effortlessly Funny",
        description: "You don't even try, and yet you manage to make everyone around you laugh. It's a gift, truly.",
        emoji: "😄",
    },
    {
        trait: "A Gentle Soul",
        description: "The way you care about others, the way you listen, the way you understand — it's rare and beautiful.",
        emoji: "🌸",
    },
    {
        trait: "Stronger Than She Knows",
        description: "You've faced challenges with grace that most people couldn't imagine. That strength? It's inspiring.",
        emoji: "💪",
    },
    {
        trait: "A Walking Aesthetic",
        description: "Your style, your presence, the way you carry yourself — it's art. Pure, effortless art.",
        emoji: "🦋",
    },
    {
        trait: "The Best Kind of Stubborn",
        description: "When you believe in something, you stand by it. That determination? It's one of your superpowers.",
        emoji: "⭐",
    },
    {
        trait: "Secretly a Softie",
        description: "Beneath that cool exterior is someone with the biggest heart. The ones lucky enough to know you, know this.",
        emoji: "💝",
    },
    {
        trait: "Simply Irreplaceable",
        description: "There's no one quite like you. Not even close. The world needed exactly one Sana, and here you are.",
        emoji: "👑",
    },
];

export default function WhoSanaIsPage() {
    return (
        <GradientBackground variant="romantic">
            <Navbar />
            <StickerFloat stickers={["🌸", "⭐", "💫", "✨"]} count={12} />

            <main className="min-h-screen py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", delay: 0.2 }}
                            className="text-6xl mb-6"
                        >
                            🌟
                        </motion.div>
                        <AnimatedText
                            as="h1"
                            delay={0.3}
                            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                        >
                            Who Sana Is
                        </AnimatedText>
                        <AnimatedText
                            delay={0.5}
                            className="font-display text-xl text-white/60 italic max-w-2xl mx-auto"
                        >
                            A collection of truths that anyone who knows you would agree with...
                        </AnimatedText>
                    </div>

                    {/* Trait Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {traits.map((trait, index) => (
                            <TraitCard
                                key={trait.trait}
                                trait={trait.trait}
                                description={trait.description}
                                emoji={trait.emoji}
                                index={index}
                            />
                        ))}
                    </div>

                    {/* Call to action */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <p className="font-display text-lg text-white/60 mb-6">
                            But that&apos;s just the beginning...
                        </p>
                        <ButtonPrimary href="/memories">
                            See Our Memories 📸
                        </ButtonPrimary>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </GradientBackground>
    );
}
