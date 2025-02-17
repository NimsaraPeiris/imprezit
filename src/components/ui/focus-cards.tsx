import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

type CardProps = {
    card: {
        title: string;
        src: string;
    };
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    className?: string;
};

const Card = React.memo(({ card, index, hovered, setHovered, className = "" }: CardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
            "relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-80 md:h-[500px] rounded-lg transition-all duration-300 ease-out",
            hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
            className
        )}
    >
        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${card.src})` }}
        />
        <div
            className={cn(
                "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
                hovered === index ? "opacity-100" : "opacity-0"
            )}
        >
            <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
                {card.title}
            </div>
        </div>
    </motion.div>
));

Card.displayName = "Card";

type Card = {
    title: string;
    src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-7xl mx-auto md:px-8 w-full">
            {cards.map((card, index) => (
                <Card
                    key={card.title}
                    card={card}
                    index={index}
                    hovered={hovered}
                    setHovered={setHovered}
                    className={index === cards.length - 1 && cards.length % 3 !== 0 ? 
                        "md:col-start-2" : ""}
                />
            ))}
        </div>
    );
}
