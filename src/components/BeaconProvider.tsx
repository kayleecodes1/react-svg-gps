import React from 'react';
import BeaconStore from '../models/BeaconStore';

export const BeaconContext = React.createContext(new BeaconStore());

interface BeaconProviderProps {
    children ? : React.ReactNode;
}

const BeaconProvider : React.SFC<BeaconProviderProps> = ({ children }) : JSX.Element => {
    const [beaconStore] = React.useState(new BeaconStore());
    return (
        <BeaconContext.Provider value={beaconStore}>
            {children}
        </BeaconContext.Provider>
    );
};

export default BeaconProvider;
