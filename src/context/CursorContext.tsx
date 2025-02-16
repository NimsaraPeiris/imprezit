import React, { createContext, useContext, useState, useEffect } from 'react';

type CursorPosition = {
    x: number;
    y: number;
};

const CursorContext = createContext<CursorPosition>({ x: 0, y: 0 });

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', onMouseMove);
        return () => window.removeEventListener('mousemove', onMouseMove);
    }, []);

    return (
        <CursorContext.Provider value={position}>
            {children}
        </CursorContext.Provider>
    );
};

export const useCursor = () => useContext(CursorContext);
