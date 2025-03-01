import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useCursor } from '../context/CursorContext';

const colors = [
    'rgb(255, 255, 255)',
    'rgb(57, 248, 255)',
    'rgb(65, 169, 253)',
    'rgb(255, 120, 242)',
];

const getRandomColors = () => {
    const shuffled = [...colors].sort(() => Math.random() - 0.5);
    return shuffled;
};

export const Particles = () => {
    const cursor = useCursor();
    const particlesRef = useRef<Array<{ x: number; y: number; colors: string[]; angle: number; speed: number }>>([]);
    const [positions, setPositions] = useState<Array<{ x: number; y: number }>>([]);
    const timeRef = useRef(0);

    useEffect(() => {
        particlesRef.current = [...Array(20)].map(() => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            colors: getRandomColors(),
            angle: Math.random() * Math.PI * 2,
            speed: Math.random() * 2 + 1,
        }));
        setPositions(particlesRef.current);
    }, []);

    useEffect(() => {
        let animationFrameId: number;
        const update = () => {
            timeRef.current += 0.016;
            const heroHovered = document.elementFromPoint(cursor.x, cursor.y)?.closest('.hero-section');

            const newPositions = particlesRef.current.map((particle) => {
                // If hero is hovered, keep current particle values
                if (heroHovered) return particle;

                // Reduce base moving speed
                const baseSpeed = particle.speed * 0.3;
                const nextX = particle.x + Math.cos(particle.angle) * baseSpeed;
                const nextY = particle.y + Math.sin(particle.angle) * baseSpeed;
                const dx = cursor.x - nextX;
                const dy = cursor.y - nextY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                let newX = nextX;
                let newY = nextY;
                let newAngle = particle.angle;
                
                if (distance < 250) {
                    newAngle = Math.atan2(dy, dx) + Math.PI;
                    // Increase the throwing repulsion speed
                    const throwingSpeed = particle.speed * 1;
                    newX = particle.x + Math.cos(newAngle) * throwingSpeed;
                    newY = particle.y + Math.sin(newAngle) * throwingSpeed;
                }
                
                // Wrap around screen
                if (newX < 0) newX = window.innerWidth;
                else if (newX > window.innerWidth) newX = 0;
                if (newY < 0) newY = window.innerHeight;
                else if (newY > window.innerHeight) newY = 0;

                return { ...particle, x: newX, y: newY, angle: newAngle };
            });

            particlesRef.current = newPositions;
            setPositions(newPositions);
            animationFrameId = requestAnimationFrame(update);
        };
        animationFrameId = requestAnimationFrame(update);
        return () => cancelAnimationFrame(animationFrameId);
    }, [cursor]);

    return (
        <div className="absolute inset-0">
            {positions.map((pos, i) => (
                <motion.div
                    key={i}
                    className="absolute h-16 w-16 rounded-full"
                    style={{
                        x: pos.x,
                        y: pos.y,
                        backgroundColor: particlesRef.current[i]?.colors[0],
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        backgroundColor: particlesRef.current[i]?.colors,
                    }}
                    transition={{
                        opacity: { duration: 0.5 },
                        scale: { duration: 0.5 },
                        backgroundColor: {
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "anticipate"
                        }
                    }}
                />
            ))}
        </div>
    );
};
