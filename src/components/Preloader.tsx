import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const [currentWord, setCurrentWord] = useState<number>(-1);
    const words = ["INNOVATE", "TRANSFORM", "DISRUPT"];
    const letters = "imprezit.com".split("");

    useEffect(() => {
        let timeoutIds: NodeJS.Timeout[] = [];
        
        // Start first word after a short delay
        timeoutIds.push(setTimeout(() => setCurrentWord(0), 500));

        // Schedule each word change
        words.forEach((_, index) => {
            if (index < words.length - 1) {
                timeoutIds.push(setTimeout(() => {
                    setCurrentWord(index + 1);
                }, (index + 1) * 2500)); // 2.5 seconds between words
            }
        });

        // Show company name
        timeoutIds.push(setTimeout(() => {
            setCurrentWord(words.length);
            setTimeout(onComplete, 3000);
        }, words.length * 2500));

        return () => timeoutIds.forEach(clearTimeout);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 bg-black flex items-center justify-center z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="relative flex flex-col items-center justify-center h-screen w-full">
                {/* Enhanced animated background */}
                <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20"
                    animate={{
                        opacity: [0, 0.9, 0],
                        scale: [0.8, 1.5, 0.8],
                        rotateZ: [0, 180, 360],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Enhanced Words Animation */}
                <div className="relative h-48 w-full flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        {currentWord >= 0 && currentWord < words.length && (
                            <motion.div
                                key={currentWord}
                                initial={{ 
                                    y: 50,
                                    opacity: 0,
                                    scale: 0.5,
                                }}
                                animate={{ 
                                    y: 0,
                                    opacity: 1,
                                    scale: 1,
                                }}
                                exit={{ 
                                    y: -50,
                                    opacity: 0,
                                    scale: 0.5,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 20,
                                    duration: 1
                                }}
                                className="absolute inset-x-0 flex items-center justify-center z-50"
                            >
                                <motion.div 
                                    className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight flex justify-center items-center w-full"
                                >
                                    {words[currentWord].split('').map((letter, idx) => (
                                        <motion.span
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.3,
                                                delay: idx * 0.05,
                                                ease: "easeOut"
                                            }}
                                            className="inline-block text-glow text-white mx-[0.5px] sm:mx-[1px]"
                                            style={{
                                                display: 'inline-block',
                                                textShadow: `
                                                    0 0 20px rgba(255,255,255,0.8),
                                                    0 0 40px rgba(14,165,233,0.6),
                                                    0 0 60px rgba(217,70,239,0.4)
                                                `
                                            }}
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Enhanced Company Name */}
                {currentWord === words.length && (
                    <motion.div 
                        className="mt-8 sm:mt-12 md:mt-16 relative flex justify-center w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <motion.div
                            className="absolute inset-x-0 mx-auto -inset-y-4 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 opacity-75 blur-xl max-w-3xl"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0.8, 0.5]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <div className="relative flex justify-center items-center space-x-[0.5px] sm:space-x-1">
                            {letters.map((letter, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ y: 40, opacity: 0, scale: 0.5 }}
                                    animate={{ y: 0, opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.05,
                                        type: "spring",
                                        stiffness: 200,
                                    }}
                                    className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-white text-glow"
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Animated circles */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute left-1/2 top-1/2 rounded-full bg-white/10"
                            initial={{ scale: 0, x: "-50%", y: "-50%" }}
                            animate={{
                                scale: [1, 2, 1],
                                opacity: [0, 0.2, 0],
                            }}
                            transition={{
                                duration: 2,
                                delay: i * 0.4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            style={{
                                width: `${(i + 1) * 100}px`,
                                height: `${(i + 1) * 100}px`,
                            }}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};
