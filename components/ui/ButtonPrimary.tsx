"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonPrimaryProps {
    children: ReactNode;
    onClick?: () => void;
    href?: string;
    className?: string;
    delay?: number;
}

export default function ButtonPrimary({
    children,
    onClick,
    href,
    className = "",
    delay = 0,
}: ButtonPrimaryProps) {
    const buttonContent = (
        <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`btn-primary font-accent text-base inline-flex items-center gap-2 ${className}`}
        >
            {children}
        </motion.button>
    );

    if (href) {
        return (
            <motion.a
                href={href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`btn-primary font-accent text-base inline-flex items-center gap-2 no-underline ${className}`}
            >
                {children}
            </motion.a>
        );
    }

    return buttonContent;
}
