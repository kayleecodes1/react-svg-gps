import React, { useCallback, useMemo, useState } from 'react';
import useAnimationFrame from './useAnimationFrame';

const lerp = (a: number, b: number, t: number) => {
    return a + (b - a) * t;
};

const useAnimatedPosition = (startX: number, startY: number, endX: number, endY: number, duration: number) => {
    const [progress, setProgress] = useState(0);
    const update = useCallback(
        (deltaTime) => {
            setProgress((progress + deltaTime / duration) % 2);
        },
        [duration, progress],
    );

    useAnimationFrame(update);

    return useMemo(
        () => ({
            x: lerp(startX, endX, progress <= 1 ? progress : 2 - progress),
            y: lerp(startY, endY, progress <= 1 ? progress : 2 - progress),
        }),
        [startX, startY, endX, endY, duration, progress],
    );
};

export default useAnimatedPosition;
