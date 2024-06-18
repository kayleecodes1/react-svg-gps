import React from 'react';
import useBeaconPosition from '@/hooks/useBeaconPosition';

interface CircleProps {
    centerId: string;
    targetId: string;
}

const Circle: React.FC<CircleProps> = ({ centerId, targetId }) => {
    const center = useBeaconPosition({ id: centerId });
    const target = useBeaconPosition({ id: targetId });
    if (!center || !target) {
        return null;
    }
    const r = Math.sqrt(
        (target.x - center.x) ** 2 + (target.y - center.y) ** 2,
    );
    return (
        <circle
            cx={center.x}
            cy={center.y}
            r={r}
            fill="none"
            stroke="#3B6DF0"
            strokeWidth={4}
        />
    );
};

export default Circle;
