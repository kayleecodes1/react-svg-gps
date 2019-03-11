import React from 'react';
import Container from '../common/Container';
import Point from '../common/Point';
import Line from '../common/Line';

const BasicTriangle = () => (
    <Container>
        <Line fromId="A" toId="B" />
        <Line fromId="B" toId="C" />
        <Line fromId="C" toId="A" />
        <Point id="A" x={200} y={50} />
        <Point id="B" x={350} y={350} />
        <Point id="C" x={50} y={350} />
    </Container>
);

export default BasicTriangle;
