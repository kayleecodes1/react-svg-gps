import React from 'react';
import Container from '../common/Container';
import DraggablePoint from '../common/DraggablePoint';
import Line from '../common/Line';

const InteractiveLine = () => (
    <Container>
        <Line fromId="A" toId="B" />
        <DraggablePoint id="A" initialX={50} initialY={50} />
        <DraggablePoint id="B" initialX={350} initialY={350} />
    </Container>
);

export default InteractiveLine;
