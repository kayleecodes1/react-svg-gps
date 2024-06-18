import React from 'react';
import BeaconProvider from '@/components/BeaconProvider';

interface ContainerProps extends React.SVGProps<SVGSVGElement> {
    children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children, ...other }) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <svg width="400" height="400" style={{ border: '1px solid #EFEFEF' }} {...other}>
            <BeaconProvider>
                {children}
            </BeaconProvider>
        </svg>
    </div>
);

export default Container;
