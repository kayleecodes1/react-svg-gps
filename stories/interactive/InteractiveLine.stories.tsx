import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import Container from '../common/Container';
import DraggablePoint from '../common/DraggablePoint';
import Line from '../common/Line';

export const InteractiveLine: StoryFn = () => {
    return (
        <Container>
            <Line fromId="A" toId="B" />
            <DraggablePoint id="A" initialX={50} initialY={50} />
            <DraggablePoint id="B" initialX={350} initialY={350} />
        </Container>
    );
};

const meta: Meta = {
    title: 'Interactive/Interactive Line',
};

export default meta;
