import React from 'react';
import Point from './Point';
import useDraggable from './useDraggable';

const DraggablePoint = ({ id, initialX, initialY }) => {
    const [dragHandleRef, isDragging, { x, y }] = useDraggable(initialX, initialY);
    return (
        <Point id={id} x={x} y={y} style={{ cursor: isDragging ? '-webkit-grabbing' : '-webkit-grab' }} ref={dragHandleRef} />
    );
};

export default DraggablePoint;
