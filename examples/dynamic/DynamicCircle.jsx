import React from 'react';
import Container from '../common/Container';
import Point from '../common/Point';
import Circle from '../common/Circle';
import useAnimatedPosition from '../common/useAnimatedPosition';

const DynamicCircle = () => {
    const { x: xA, y: yA } = useAnimatedPosition(150, 150, 250, 250, 5000);
    const { x: xB, y: yB } = useAnimatedPosition(50, 200, 350, 200, 5000);
    return (
        <Container>
            <Circle centerId="A" targetId="B" />
            <Point id="A" x={xA} y={yA} />
            <Point id="B" x={xB} y={yB} />
        </Container>
    );
};

export default DynamicCircle;
