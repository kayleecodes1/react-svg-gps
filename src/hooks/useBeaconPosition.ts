import { useContext, useLayoutEffect, useState } from 'react';
import { BeaconContext } from '@/components/BeaconProvider';
import { Point } from '@/typings/dataStructures';

interface UseBeaconPositionConfig {
    id: string;
}

const useBeaconPosition = ({ id }: UseBeaconPositionConfig): Point | null => {
    const beaconStore = useContext(BeaconContext);
    const [point, setPoint] = useState(null);

    useLayoutEffect(() => {
        beaconStore.subscribe(id, setPoint);
        return () => {
            beaconStore.unsubscribe(id, setPoint);
        };
    }, []);

    return point;
};

export default useBeaconPosition;
