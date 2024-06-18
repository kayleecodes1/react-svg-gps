import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import Container from '../common/Container';
import Line from '../common/Line';
import Point from '../common/Point';
import useAnimatedPosition from '../common/useAnimatedPosition';

export const DynamicTriangle: StoryFn = () => {
    const { x: xA, y: yA } = useAnimatedPosition(200, 50, 200, 350, 5000);
    const { x: xB, y: yB } = useAnimatedPosition(50, 350, 350, 350, 5000);
    const { x: xC, y: yC } = useAnimatedPosition(350, 350, 350, 50, 5000);
    return (
        <Container>
            <Line fromId="A" toId="B" />
            <Line fromId="B" toId="C" />
            <Line fromId="C" toId="A" />
            <Point id="A" x={xA} y={yA} />
            <Point id="B" x={xB} y={yB} />
            <Point id="C" x={xC} y={yC} />
        </Container>
    );
}

const meta: Meta = {
    title: 'Dynamic/Dynamic Triangle',
};

export default meta;
