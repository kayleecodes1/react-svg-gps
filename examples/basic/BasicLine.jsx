import React from 'react';
import Container from '../common/Container';
import Point from '../common/Point';
import Line from '../common/Line';

const BasicLine = () => (
    <Container>
        <Line fromId="A" toId="B" />
        <Point id="A" x={50} y={50} />
        <Point id="B" x={350} y={350} />
    </Container>
);

export default BasicLine;
