"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import GradientBackground from "@/components/effects/GradientBackground";
import StickerFloat from "@/components/effects/StickerFloat";
import NewYearCountdown from "@/components/countdown/NewYearCountdown";
import AnimatedText, { StaggerText } from "@/components/effects/AnimatedText";
import ButtonPrimary from "@/components/ui/ButtonPrimary";

export default function HomePage() {
  return (
    <GradientBackground>
      <Navbar />
      <StickerFloat count={20} />

      <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              <StaggerText text="Sana, This Is For You" delay={0.3} />
            </h1>
          </motion.div>

          {/* Subtext */}
          <AnimatedText
            delay={1.5}
            className="font-display text-xl md:text-2xl text-white/70 mb-12 italic"
          >
            A celebration of everything that makes you... you ✨
          </AnimatedText>

          {/* New Year Countdown */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="mb-12"
          >
            <NewYearCountdown />
          </motion.div>

          {/* CTA Button */}
          <ButtonPrimary href="/who-sana" delay={2.5}>
            Enter ✨
          </ButtonPrimary>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { delay: 3 },
              y: { delay: 3, duration: 1.5, repeat: Infinity },
            }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <p className="font-accent text-xs text-white/40 uppercase tracking-widest">
              Scroll to explore
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </GradientBackground>
  );
}
