import React from 'react';
import Container from '../common/Container';
import Point from '../common/Point';
import Line from '../common/Line';
import useAnimatedPosition from '../common/useAnimatedPosition';

const DynamicTriangle = () => {
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
};

export default DynamicTriangle;
