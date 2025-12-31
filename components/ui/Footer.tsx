"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="py-8 px-6 border-t border-white/10"
        >
            <div className="max-w-4xl mx-auto text-center">
                <p className="font-accent text-sm text-white/50">
                    Made with 💖 for someone truly special
                </p>
                <p className="font-display text-xs text-white/30 mt-2">
                    A Year With Sana © 2025
                </p>
            </div>
        </motion.footer>
    );
}
