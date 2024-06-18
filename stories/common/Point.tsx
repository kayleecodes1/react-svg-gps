import React from 'react';
import useBeaconRef from '@/hooks/useBeaconRef';

interface PointProps {
    id: string;
    x: number;
    y: number;
    style?: React.CSSProperties;
}

const Point = React.forwardRef<unknown, PointProps>(({
    id, x, y, style,
}, ref) => {
    const beaconRef = useBeaconRef({ id });
    
    React.useImperativeHandle(ref, () => beaconRef.current);

    return (
        <circle cx={x} cy={y} r={7} fill="#3E4751" stroke="#FFF" strokeWidth={3} ref={beaconRef} style={style} />
    );
});

export default Point;
