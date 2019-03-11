import React from 'react';
import { BeaconProvider } from 'react-svg-gps';

const Container = ({ children, ...other }) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <svg width="400" height="400" style={{ border: '1px solid #EFEFEF' }} {...other}>
            <BeaconProvider>
                {children}
            </BeaconProvider>
        </svg>
    </div>
);

export default Container;
