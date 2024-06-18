import React, { useMemo } from 'react';
import BeaconStore from '@/models/BeaconStore';

export const BeaconContext = React.createContext(new BeaconStore());

interface BeaconProviderProps {
    children?: React.ReactNode;
}

const BeaconProvider: React.FC<BeaconProviderProps> = ({ children }) => {
    const beaconStore = useMemo(() => new BeaconStore(), []);

    return (
        <BeaconContext.Provider value={beaconStore}>
            {children}
        </BeaconContext.Provider>
    );
};

export default BeaconProvider;
