import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import Container from '../common/Container';
import Line from '../common/Line';
import Point from '../common/Point';
import useAnimatedPosition from '../common/useAnimatedPosition';

export const DynamicLine: StoryFn = () => {
    const { x: xA, y: yA } = useAnimatedPosition(50, 50, 350, 50, 5000);
    const { x: xB, y: yB } = useAnimatedPosition(350, 350, 50, 350, 5000);
    return (
        <Container>
            <Line fromId="A" toId="B" />
            <Point id="A" x={xA} y={yA} />
            <Point id="B" x={xB} y={yB} />
        </Container>
    );
}

const meta: Meta = {
    title: 'Dynamic/Dynamic Line',
};

export default meta;
