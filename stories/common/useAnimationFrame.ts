import React, { useLayoutEffect, useRef } from 'react';

const useAnimationFrame = (callback: (deltaTime: number) => void) => {
    const callbackRef = useRef(callback);

    useLayoutEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    const frameRef = useRef(-1);
    const previousTimeRef = useRef(Date.now());

    const loop = () => {
        frameRef.current = requestAnimationFrame(loop);
        const cb = callbackRef.current;
        const currentTime = Date.now();
        const deltaTime = currentTime - previousTimeRef.current;
        previousTimeRef.current = currentTime;
        cb(deltaTime);
    };

    React.useLayoutEffect(() => {
        frameRef.current = requestAnimationFrame(loop);
        return () => {
            cancelAnimationFrame(frameRef.current);
        };
    }, []);
};

export default useAnimationFrame;
