import React from 'react';
import Container from '../common/Container';
import Point from '../common/Point';
import Circle from '../common/Circle';

const BasicCircle = () => (
    <Container>
        <Circle centerId="A" targetId="B" />
        <Point id="A" x={200} y={200} />
        <Point id="B" x={350} y={200} />
    </Container>
);

export default BasicCircle;
