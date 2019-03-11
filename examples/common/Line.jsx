import React from 'react';
import { useBeaconPosition } from 'react-svg-gps';

const Line = ({ fromId, toId }) => {
    const from = useBeaconPosition({ id: fromId });
    const to = useBeaconPosition({ id: toId });
    return from && to && (
        <path d={`M${from.x} ${from.y}L${to.x} ${to.y}`} stroke="#3B6DF0" strokeWidth={4} />
    );
};

export default Line;
