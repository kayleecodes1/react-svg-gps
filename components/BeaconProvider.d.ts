import { default as React } from '../../node_modules/react';
import { default as BeaconStore } from '../models/BeaconStore';

export declare const BeaconContext: React.Context<BeaconStore>;
interface BeaconProviderProps {
    children?: React.ReactNode;
}
declare const BeaconProvider: React.FC<BeaconProviderProps>;
export default BeaconProvider;
