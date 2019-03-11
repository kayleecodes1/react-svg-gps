import React from 'react';
import { BeaconContext } from '../components/BeaconProvider';

interface UseBeaconPositionConfig {
    id : string;
}

const useBeaconPosition = ({ id } : UseBeaconPositionConfig) : Point | null => {
    const beaconStore = React.useContext(BeaconContext);
    const [point, setPoint] = React.useState(null);

    React.useLayoutEffect(() => {
        beaconStore.subscribe(id, setPoint);
        return () => {
            beaconStore.unsubscribe(id, setPoint);
        };
    }, []);

    return point;
};

export default useBeaconPosition;
