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
};

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.05 } }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="h-4 w-4 text-black"
        >
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
    );
};

export function ExpandableCards({ cards }: { cards: Card[] }) {
    const [active, setActive] = useState<Card | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    useEffect(() => {
        if (active) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

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
                {active ? (
                    <div className="fixed inset-0 grid place-items-center z-[100]">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.05 } }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                        >
                            <motion.div layoutId={`icon-${active.title}-${id}`} className="w-full h-80 flex items-center justify-center text-8xl text-gray-500">
                                {active.icon}
                            </motion.div>

                            <div className="p-4">
                                <motion.h3
                                    layoutId={`title-${active.title}-${id}`}
                                    className="text-2xl font-bold mb-2 text-gray-500"
                                >
                                    {active.title}
                                </motion.h3>
                                <motion.div
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-gray-600 dark:text-gray-300"
                                >
                                    {typeof active.content === "function" ? active.content() : active.content}
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>

            <ul className="max-w-2xl mx-auto w-full gap-4">
                {cards.map((card) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={card.title}
                        onClick={() => setActive(card)}
                        className="p-6 flex items-center gap-6 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
                    >
                        <motion.div
                            layoutId={`icon-${card.title}-${id}`}
                            className="text-4xl"
                        >
                            {card.icon}
                        </motion.div>
                        <div>
                            <motion.h3
                                layoutId={`title-${card.title}-${id}`}
                                className="font-bold text-xl mb-1 text-gray-500"
                            >
                                {card.title}
                            </motion.h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                {card.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}
