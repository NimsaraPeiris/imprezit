import { motion } from 'framer-motion';

const colors = [
    'rgb(255, 255, 255)',
    'rgb(221, 126, 250)',
    'rgb(255, 255, 255)',
    'rgb(65, 169, 253)',
    'rgb(11, 140, 245)',
];

const getRandomColors = () => {
    const shuffled = [...colors].sort(() => Math.random() - 0.5);
    return shuffled;
};

export const Particles = () => {
    return (
        <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => {
                const particleColors = getRandomColors();
                return (
                    <motion.div
                        key={i}
                        className="absolute h-16 w-16 rounded-full cursor-pointer"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                        }}
                        animate={{
                            x: [
                                Math.random() * window.innerWidth,
                                Math.random() * window.innerWidth,
                                Math.random() * window.innerWidth,
                            ],
                            y: [
                                Math.random() * window.innerHeight,
                                Math.random() * window.innerHeight,
                                Math.random() * window.innerHeight,
                            ],
                            backgroundColor: particleColors,
                        }}
                        transition={{
                            x: {
                                duration: Math.random() * 20 + 15,
                                repeat: Infinity,
                                repeatType: "mirror",
                                ease: "anticipate"
                            },
                            y: {
                                duration: Math.random() * 20 + 15,
                                repeat: Infinity,
                                repeatType: "mirror",
                                ease: "anticipate"
                            },
                            backgroundColor: {
                                duration: 10,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }
                        }}
                        style={{
                            position: 'fixed',
                            backgroundColor: particleColors[0],
                        }}
                    />
                );
            })}
        </div>
    );
};
