import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import Container from '../common/Container';
import DraggablePoint from '../common/DraggablePoint';
import Line from '../common/Line';
import useAnimatedPosition from '../common/useAnimatedPosition';

export const InteractiveTriangle: StoryFn = () => {
    const { x: xA, y: yA } = useAnimatedPosition(200, 50, 200, 350, 5000);
    const { x: xB, y: yB } = useAnimatedPosition(50, 350, 350, 350, 5000);
    const { x: xC, y: yC } = useAnimatedPosition(350, 350, 350, 50, 5000);
    return (
        <Container>
            <Line fromId="A" toId="B" />
            <Line fromId="B" toId="C" />
            <Line fromId="C" toId="A" />
            <DraggablePoint id="A" initialX={200} initialY={50} />
            <DraggablePoint id="B" initialX={350} initialY={350} />
            <DraggablePoint id="C" initialX={50} initialY={350} />
        </Container>
    );
}

const meta: Meta = {
    title: 'Interactive/Interactive Triangle',
};

export default meta;
