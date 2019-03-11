import React from 'react';
import Container from '../common/Container';
import Point from '../common/Point';
import DraggablePoint from '../common/DraggablePoint';
import Circle from '../common/Circle';
import useDraggable from '../common/useDraggable';

const Foo = () => {
    const [dragHandleRef, isDragging, { x, y }] = useDraggable(200, 200);
    return (
        <g transform={`translate(${x},${y})`}>
            <Point id="A" x={0} y={0} style={{ cursor: isDragging ? '-webkit-grabbing' : '-webkit-grab' }} ref={dragHandleRef} />
            <DraggablePoint id="B" initialX={150} initialY={0} />
        </g>
    );
};

const InteractiveCircle = () => (
    <Container>
        <Circle centerId="A" targetId="B" />
        <Foo />
    </Container>
);

export default InteractiveCircle;
