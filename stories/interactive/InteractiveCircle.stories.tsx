import React, { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import Container from '../common/Container';
import Point from '../common/Point';
import DraggablePoint from '../common/DraggablePoint';
import Circle from '../common/Circle';
import useDraggable from '../common/useDraggable';

export const InteractiveCircle: StoryFn = () => {
    const [dragHandleElement, setDragHandleElement] = useState<HTMLElement | null>(null);
    const [isDragging, { x, y }] = useDraggable(dragHandleElement, 200, 200);

    return (
        <Container>
            <Circle centerId="A" targetId="B" />
        <g transform={`translate(${x},${y})`}>
            <Point
                id="A"
                x={0}
                y={0}
                style={{
                    cursor: isDragging ? '-webkit-grabbing' : '-webkit-grab',
                }}
                ref={setDragHandleElement}
            />
            <DraggablePoint id="B" initialX={150} initialY={0} />
        </g>
        </Container>
    );
};

const meta: Meta = {
    title: 'Interactive/Interactive Circle',
};

export default meta;
