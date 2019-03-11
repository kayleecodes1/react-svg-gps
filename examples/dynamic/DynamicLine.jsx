import React from 'react';
import Container from '../common/Container';
import Point from '../common/Point';
import Line from '../common/Line';
import useAnimatedPosition from '../common/useAnimatedPosition';

const DynamicLine = () => {
    const { x: xA, y: yA } = useAnimatedPosition(50, 50, 350, 50, 5000);
    const { x: xB, y: yB } = useAnimatedPosition(350, 350, 50, 350, 5000);
    return (
        <Container>
            <Line fromId="A" toId="B" />
            <Point id="A" x={xA} y={yA} />
            <Point id="B" x={xB} y={yB} />
        </Container>
    );
};

export default DynamicLine;
