import React, { useState } from 'react';
import Point from './Point';
import useDraggable from './useDraggable';

interface DraggablePointProps {
    id: string;
    initialX: number;
    initialY: number;
}

const DraggablePoint: React.FC<DraggablePointProps> = ({ id, initialX, initialY }) => {
    const [dragHandleElement, setDragHandleElement] = useState<HTMLElement | null>(null);
    const [isDragging, { x, y }] = useDraggable(dragHandleElement, initialX, initialY);
    return (
        <Point id={id} x={x} y={y} style={{ cursor: isDragging ? '-webkit-grabbing' : '-webkit-grab' }} ref={setDragHandleElement} />
    );
};

export default DraggablePoint;
