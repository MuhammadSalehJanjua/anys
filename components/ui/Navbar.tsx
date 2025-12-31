"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Who Sana Is", href: "/who-sana" },
    { name: "Memories", href: "/memories" },
    { name: "Impact", href: "/impact" },
    { name: "Play Game", href: "/game" },
    { name: "Final Note", href: "/final-note" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        >
            <div className="max-w-6xl mx-auto">
                <div className="glass-card px-6 py-3 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-2xl">💝</span>
                        <span className="font-display text-lg font-semibold text-gradient hidden sm:inline">
                            For Sana
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                            >
                                <Link
                                    href={item.href}
                                    className="font-accent text-sm text-white/80 hover:text-white transition-colors relative group"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden mt-2 glass-card p-4"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-3 px-4 font-accent text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
}
