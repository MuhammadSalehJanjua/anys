"use client";

import { useEffect, useRef, useCallback } from "react";
import confetti from "canvas-confetti";

interface ConfettiBurstProps {
    trigger?: boolean;
    duration?: number;
    colors?: string[];
}

export default function ConfettiBurst({
    trigger = false,
    duration = 3000,
    colors = ["#ff6b9d", "#FFB6C1", "#E6E6FA", "#FFD700", "#f093fb"],
}: ConfettiBurstProps) {
    const hasTriggered = useRef(false);

    const fireConfetti = useCallback(() => {
        const end = Date.now() + duration;

        const frame = () => {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0, y: 0.8 },
                colors,
            });
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1, y: 0.8 },
                colors,
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };

        // Initial burst
        confetti({
            particleCount: 100,
            spread: 100,
            origin: { y: 0.6 },
            colors,
        });

        frame();
    }, [duration, colors]);

    useEffect(() => {
        if (trigger && !hasTriggered.current) {
            hasTriggered.current = true;
            fireConfetti();
        }
    }, [trigger, fireConfetti]);

    return null;
}

// Hearts explosion variant
export function HeartsBurst({ trigger = false }: { trigger?: boolean }) {
    const hasTriggered = useRef(false);

    useEffect(() => {
        if (trigger && !hasTriggered.current) {
            hasTriggered.current = true;

            const defaults = {
                spread: 360,
                ticks: 100,
                gravity: 0,
                decay: 0.94,
                startVelocity: 30,
                colors: ["#ff6b9d", "#FFB6C1", "#ff4081"],
            };

            const shoot = () => {
                confetti({
                    ...defaults,
                    particleCount: 30,
                    scalar: 1.2,
                    shapes: ["circle"],
                    origin: { x: Math.random(), y: Math.random() - 0.2 },
                });

                confetti({
                    ...defaults,
                    particleCount: 20,
                    scalar: 0.75,
                    shapes: ["circle"],
                    origin: { x: Math.random(), y: Math.random() - 0.2 },
                });
            };

            setTimeout(shoot, 0);
            setTimeout(shoot, 100);
            setTimeout(shoot, 200);
        }
    }, [trigger]);

    return null;
}
