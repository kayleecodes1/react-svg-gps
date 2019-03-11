import React from 'react';

const useDraggable = (initialX, initialY) => {
    const dragHandleRef = React.createRef(null);
    const [isDragging, setIsDragging] = React.useState(false);
    const [position, setPosition] = React.useState({ x: initialX, y: initialY });
    const handleMouseMove = React.useCallback((event) => {
        if (isDragging) {
            setPosition({ x: position.x + event.movementX, y: position.y + event.movementY });
        }
    }, [isDragging, position]);
    const handleMouseDown = React.useCallback((event) => {
        if (dragHandleRef.current && dragHandleRef.current.contains(event.target)) {
            setIsDragging(true);
        }
    }, [dragHandleRef]);
    const handleMouseUp = React.useCallback(() => {
        setIsDragging(false);
    }, []);
    React.useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [handleMouseMove, handleMouseDown, handleMouseUp]);
    return [dragHandleRef, isDragging, position];
};

export default useDraggable;
