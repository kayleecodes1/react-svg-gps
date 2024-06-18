import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import Container from '../common/Container';
import Point from '../common/Point';
import Circle from '../common/Circle';

export const BasicCircle: StoryFn = () => (
    <Container>
        <Circle centerId="A" targetId="B" />
        <Point id="A" x={200} y={200} />
        <Point id="B" x={350} y={200} />
    </Container>
);

const meta: Meta = {
    title: 'Basic/Basic Circle',
};

export default meta;
