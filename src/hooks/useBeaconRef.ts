import React, { useContext, useLayoutEffect, useRef } from 'react';
import { BeaconContext } from '@/components/BeaconProvider';
import { Point } from '@/typings/dataStructures';
import getGlobalPoint from '@/utilities/getGlobalPoint';

interface UseBeaconRefConfig {
    id: string;
    anchor?: Point;
    offset?: Point;
}

const useBeaconRef = <T extends SVGGraphicsElement>({
    id,
    anchor = { x: 0.5, y: 0.5 },
    offset = { x: 0, y: 0 },
}: UseBeaconRefConfig): React.RefObject<T> => {
    const beaconStore = useContext(BeaconContext);
    const ref = useRef<T | null>(null);

    useLayoutEffect(() => {
        beaconStore.registerBeacon(id);
        return () => {
            beaconStore.unregisterBeacon(id);
        };
    }, []);

    useLayoutEffect(() => {
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
