import React from 'react';
import { useBeaconRef } from 'react-svg-gps';

const Point = ({
    id, x, y, style,
}, ref) => {
    const beaconRef = useBeaconRef({ id });
    React.useImperativeHandle(ref, () => beaconRef.current);
    return (
        <circle cx={x} cy={y} r={7} fill="#3E4751" stroke="#FFF" strokeWidth={3} ref={beaconRef} style={style} />
    );
};

export default React.forwardRef(Point);
