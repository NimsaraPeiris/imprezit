import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hooks/use-outside-click";

type Card = {
    title: string;
    description: string;
    icon: string;
    content: string | (() => React.ReactNode);
    image: string;
    ctaText: string;
    ctaLink: string;
    gradient?: string; // Added gradient property
};

export function ExpandableCards({ cards }: { cards: Card[] }) {
    const [active, setActive] = useState<Card | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    // Define default gradients to use if not provided in the card
    const defaultGradients = [
        'from-purple-500 to-pink-500',
        'from-purple-500 to-pink-500',
        'from-pink-500 to-blue-500'
    ];

    // Map gradients to text gradient classes
    const textGradientMap: { [key: string]: string } = {
        'from-purple-500 to-pink-500': 'bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent',
        'from-blue-500 to-indigo-500': 'bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent',
        'from-pink-500 to-blue-500': 'bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent'
    };

    useEffect(() => {
        document.body.style.overflow = active ? "hidden" : "auto";

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setActive(null);
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {active && (
                    <div className="fixed inset-0 flex items-center justify-center z-[100] p-4">
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px] h-full md:h-auto rounded-3xl bg-white/50 backdrop-blur-lg overflow-hidden shadow-lg p-6 relative"
                        >
                            {/* Close Button for Mobile View */}
                            <button
                                className="absolute top-4 right-4 text-black text-2xl md:hidden"
                                onClick={() => setActive(null)}
                            >
                                ✖
                            </button>

                            <motion.div layoutId={`icon-${active.title}-${id}`} className="text-6xl text-center text-black mb-4">
                                {active.icon}
                            </motion.div>
                            <motion.h3
                                layoutId={`title-${active.title}-${id}`}
                                className={`text-2xl font-bold text-center mb-2 ${textGradientMap[active.gradient || defaultGradients[cards.findIndex(c => c.title === active.title) % defaultGradients.length]] || 'text-black'}`}
                            >
                                {active.title}
                            </motion.h3>
                            <motion.ul className="text-black text-left list-disc text-xl p-6">
                                {typeof active.content === "function"
                                    ? active.content()
                                    : active.content.split("\n").map((point, index) => (
                                        <p key={index}>{point}</p>
                                    ))}
                            </motion.ul>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <div className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto mt-8 px-4">
                {cards.map((card, index) => {
                    // Use the card's gradient if provided, otherwise use from the default gradients
                    const gradient = card.gradient || defaultGradients[index % defaultGradients.length];

                    // Get the matching text gradient class
                    const textGradientClass = textGradientMap[gradient] || '';

                    return (
                        <motion.div
                            layoutId={`card-${card.title}-${id}`}
                            key={card.title}
                            onClick={() => setActive(card)}
                            className={`p-6 flex flex-col items-center gap-4 bg-white rounded-xl cursor-pointer drop-shadow-lg w-full sm:w-[48%] md:w-[40%] transition-all duration-300 hover:bg-gradient-to-r ${gradient} group hover:scale-105`}
                        >
                            <motion.div layoutId={`icon-${card.title}-${id}`} className="text-6xl text-black group-hover:text-white transition-colors duration-300">
                                {card.icon}
                            </motion.div>
                            <motion.h3
                                layoutId={`title-${card.title}-${id}`}
                                className={`font-bold text-2xl text-center ${textGradientClass} group-hover:text-white transition-all duration-300`}
                            >
                                {card.title}
                            </motion.h3>
                            <p className="text-black text-center group-hover:text-white transition-colors duration-300">
                                {card.description}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </>
    );
}
