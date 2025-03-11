import { useEffect, useState, useRef } from 'react';

export function AnimatedCursor() {
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [trailingPosition, setTrailingPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const animationFrameRef = useRef<number | null>(null);

    useEffect(() => {
        // Check if device is mobile
        const checkMobile = () => {
            // const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            const isCoarseMouse = window.matchMedia('(pointer: coarse)').matches;
            const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            
            setIsMobile(isCoarseMouse || isMobileUA);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseover', onMouseOver);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseover', onMouseOver);
        };
    }, []);

    useEffect(() => {
        const followMouse = () => {
            setTrailingPosition(prev => {
                const dx = position.x - prev.x;
                const dy = position.y - prev.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 0.1) return prev;

                return {
                    x: prev.x + dx * 0.15,
                    y: prev.y + dy * 0.15
                };
            });
            animationFrameRef.current = requestAnimationFrame(followMouse);
        };

        animationFrameRef.current = requestAnimationFrame(followMouse);
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [position]);

    // Don't render cursor on mobile devices
    if (isMobile) return null;

    return (
        <>
            <div
                className="fixed pointer-events-none z-50 transition-transform duration-100 ease-out"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: 'translate(-50%, -50%)'
                }}
            >
                <div className={`
                    rounded-full bg-white/50
                    ${isPointer ? 'w-8 h-8' : 'w-16 h-16'}
                    border-2
                    transition-all duration-200
                    ${isPointer ? 'bg-gray' : 'bg-gray-200'}
                `} />
            </div>
            <div
                className="fixed pointer-events-none z-50 mix-blend-difference"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: 'translate(-50%, -50%)'
                }}
            >
                <div className={`
                    rounded-full
                    ${isPointer ? 'w-2 h-2' : 'w-1 h-1'}
                    bg-black
                    transition-all duration-200
                `} />
            </div>
            <div
                className="fixed pointer-events-none z-50"
                style={{
                    left: `${trailingPosition.x}px`,
                    top: `${trailingPosition.y}px`,
                    transform: 'translate(-50%, -50%)'
                }}
            >
                <div className={`
                    rounded-full w-3 h-3
                    bg-black/50
                    transition-all duration-200
                    ${isPointer ? 'scale-150' : 'scale-100'}
                `} />
            </div>
        </>
    );
}
