import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import Container from '../common/Container';
import Line from '../common/Line';
import Point from '../common/Point';

export const BasicTriangle: StoryFn = () => (
    <Container>
        <Line fromId="A" toId="B" />
        <Line fromId="B" toId="C" />
        <Line fromId="C" toId="A" />
        <Point id="A" x={200} y={50} />
        <Point id="B" x={350} y={350} />
        <Point id="C" x={50} y={350} />
    </Container>
);

const meta: Meta = {
    title: 'Basic/Basic Triangle',
};

export default meta;
