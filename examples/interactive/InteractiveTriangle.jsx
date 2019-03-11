import React from 'react';
import Container from '../common/Container';
import DraggablePoint from '../common/DraggablePoint';
import Line from '../common/Line';

const InteractiveTriangle = () => (
    <Container>
        <Line fromId="A" toId="B" />
        <Line fromId="B" toId="C" />
        <Line fromId="C" toId="A" />
        <DraggablePoint id="A" initialX={200} initialY={50} />
        <DraggablePoint id="B" initialX={350} initialY={350} />
        <DraggablePoint id="C" initialX={50} initialY={350} />
    </Container>
);

export default InteractiveTriangle;
