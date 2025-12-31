"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ButtonPrimary from "@/components/ui/ButtonPrimary";

export default function FinalNotePage() {
    return (
        <div className="min-h-screen bg-[#0D0D1A]">
            <Navbar />

            <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="max-w-2xl mx-auto text-center"
                >
                    {/* No animations, just elegant simplicity */}
                    <div className="text-5xl mb-12">💝</div>

                    <h1 className="font-display text-3xl md:text-4xl font-semibold text-white mb-8">
                        If I Could Say One Thing...
                    </h1>

                    <div className="space-y-6 mb-12">
                        <p className="font-display text-lg md:text-xl text-white/80 leading-relaxed">
                            This wasn&apos;t built to impress you with code or design.
                        </p>
                        <p className="font-display text-lg md:text-xl text-white/80 leading-relaxed">
                            It was built because some feelings deserve more than just words.
                        </p>
                        <p className="font-display text-lg md:text-xl text-white/80 leading-relaxed">
                            And you, Sana, deserve to know just how much you&apos;ve meant.
                        </p>
                    </div>

                    <div className="glass-card p-8 mb-12">
                        <p className="font-display text-xl md:text-2xl text-white italic leading-relaxed">
                            &ldquo;This page stays — just like the appreciation behind it.&rdquo;
                        </p>
                    </div>

                    <p className="font-accent text-sm text-white/50 mb-8">
                        With appreciation,
                    </p>
                    <p className="font-display text-2xl text-gradient-love font-semibold">
                        Saleh
                    </p>

                    {/* Back to home */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                        className="mt-16"
                    >
                        <ButtonPrimary href="/">
                            Back to Beginning ✨
                        </ButtonPrimary>
                    </motion.div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
