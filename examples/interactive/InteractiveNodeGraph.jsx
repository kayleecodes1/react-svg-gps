import React from 'react';
import { useBeaconRef, useBeaconPosition } from 'react-svg-gps';
import Container from '../common/Container';
import useDraggable from '../common/useDraggable';

const Node = ({ initialX, initialY, children }) => {
    const [dragHandleRef, isDragging, { x, y }] = useDraggable(initialX, initialY);
    return (
        <g transform={`translate(${x},${y})`} style={{ cursor: isDragging ? '-webkit-grabbing' : '-webkit-grab' }} ref={dragHandleRef}>
            <rect x="-60" y="0" width="120" height="60" fill="#FFF" stroke="#3E4751" strokeWidth="4" rx="5" ry="5" />
            {React.Children.map(children, React.cloneElement)}
        </g>
    );
};

const Connector = ({ id, x, y }) => {
    const ref = useBeaconRef({ id });
    return (
        <circle cx={x} cy={y} r={7} fill="#3E4751" stroke="#FFF" strokeWidth={3} ref={ref} />
    );
};

const Connection = ({ fromId, toId }) => {
    const from = useBeaconPosition({ id: fromId });
    const to = useBeaconPosition({ id: toId });
    if (!from || !to) {
        return null;
    }
    const bezierLength = Math.max(Math.abs(to.y - from.y) * 0.4, 30);
    const pathCommand = `M${from.x} ${from.y} C ${from.x} ${from.y + bezierLength},${to.x} ${to.y - bezierLength},${to.x} ${to.y}`;
    return (
        <path d={pathCommand} fill="none" stroke="#3B6DF0" strokeWidth={4} />
    );
};

const NodeGraph = () => (
    <Container>
        <Connection fromId="A" toId="B" />
        <Connection fromId="A" toId="D" />
        <Connection fromId="C" toId="F" />
        <Connection fromId="E" toId="G" />
        <Node initialX={200} initialY={30}>
            <Connector id="A" x={0} y={60} />
        </Node>
        <Node initialX={90} initialY={170}>
            <Connector id="B" x={0} y={0} />
            <Connector id="C" x={0} y={60} />
        </Node>
        <Node initialX={310} initialY={170}>
            <Connector id="D" x={0} y={0} />
            <Connector id="E" x={0} y={60} />
        </Node>
        <Node initialX={200} initialY={310}>
            <Connector id="F" x={-24} y={0} />
            <Connector id="G" x={24} y={0} />
        </Node>
    </Container>
);

export default NodeGraph;
