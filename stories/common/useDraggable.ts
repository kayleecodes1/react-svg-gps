import { useCallback, useEffect, useState } from 'react';
import { Point } from '@/typings/dataStructures';

const useDraggable = <T extends Node>(
    dragHandleElement: T | null,
    initialX: number,
    initialY: number,
) => {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState<Point>({
        x: initialX,
        y: initialY,
    });

    const handleMouseMove = useCallback(
        (event: MouseEvent) => {
            if (isDragging) {
                setPosition({
                    x: position.x + event.movementX,
                    y: position.y + event.movementY,
                });
            }
        },
        [isDragging, position],
    );

    const handleMouseDown = useCallback(
        (event: MouseEvent) => {
            if (
                dragHandleElement &&
                dragHandleElement.contains(event.target as HTMLElement)
            ) {
                setIsDragging(true);
            }
        },
        [dragHandleElement],
    );

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [handleMouseMove, handleMouseDown, handleMouseUp]);

    return [isDragging, position] as [boolean, Point];
};

export default useDraggable;
