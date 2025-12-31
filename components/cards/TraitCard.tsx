"use client";

import { motion } from "framer-motion";

interface TraitCardProps {
    trait: string;
    description: string;
    emoji: string;
    index?: number;
}

export default function TraitCard({
    trait,
    description,
    emoji,
    index = 0,
}: TraitCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
            }}
            whileHover={{ y: -8 }}
            className="group"
        >
            <div className="glass-card glass-card-hover p-6 h-full relative overflow-hidden">
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                    <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="text-4xl mb-4"
                    >
                        {emoji}
                    </motion.div>

                    <h3 className="font-display text-xl font-semibold text-white mb-3 group-hover:text-gradient-love transition-all duration-300">
                        {trait}
                    </h3>

                    <p className="font-sans text-sm text-white/60 leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Decorative elements */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-8 -right-8 w-24 h-24 border border-white/5 rounded-full"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-4 -right-4 w-16 h-16 border border-white/5 rounded-full"
                />
            </div>
        </motion.div>
    );
}
