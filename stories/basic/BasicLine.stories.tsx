import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import Container from '../common/Container';
import Line from '../common/Line';
import Point from '../common/Point';

export const BasicLine: StoryFn = () => (
    <Container>
        <Line fromId="A" toId="B" />
        <Point id="A" x={50} y={50} />
        <Point id="B" x={350} y={350} />
    </Container>
);

const meta: Meta = {
    title: 'Basic/Basic Line',
};

export default meta;
