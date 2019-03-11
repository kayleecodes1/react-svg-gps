import React from 'react';

const lerp = (a, b, t) => a + (b - a) * t;

const useAnimationFrame = (callback) => {
    const callbackRef = React.useRef(callback);
    React.useLayoutEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    const frameRef = React.useRef();
    const previousTimeRef = React.useRef(Date.now());
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

const useAnimatedPosition = (startX, startY, endX, endY, duration) => {
    const [progress, setProgress] = React.useState(0);
    const update = React.useCallback((deltaTime) => {
        setProgress((progress + deltaTime / duration) % 2);
    }, [duration, progress]);
    useAnimationFrame(update);
    return React.useMemo(() => ({
        x: lerp(startX, endX, progress <= 1 ? progress : 2 - progress),
        y: lerp(startY, endY, progress <= 1 ? progress : 2 - progress),
    }), [startX, startY, endX, endY, duration, progress]);
};

export default useAnimatedPosition;
