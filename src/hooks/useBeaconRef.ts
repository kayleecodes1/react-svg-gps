import React from 'react';
import getGlobalPoint from '../utils/getGlobalPoint';
import { BeaconContext } from '../components/BeaconProvider';

interface UseBeaconRefConfig {
    id : string;
    anchor ?: Point;
    offset ?: Point;
}

const useBeaconRef = ({
    id,
    anchor = { x: 0.5, y: 0.5 },
    offset = { x: 0, y: 0 },
} : UseBeaconRefConfig) : React.RefObject<SVGGraphicsElement> => {
    const beaconStore = React.useContext(BeaconContext);
    const ref = React.useRef<SVGGraphicsElement>(null);

    React.useLayoutEffect(() => {
        beaconStore.registerBeacon(id);
        return () => {
            beaconStore.unregisterBeacon(id);
        };
    }, []);

    React.useLayoutEffect(() => {
        if (!ref.current) {
            beaconStore.reportBeaconPoint(id, null);
            return;
        }
        const globalPoint = getGlobalPoint(ref.current, anchor, offset);
        beaconStore.reportBeaconPoint(id, globalPoint);
    });

    return ref;
};

export default useBeaconRef;
