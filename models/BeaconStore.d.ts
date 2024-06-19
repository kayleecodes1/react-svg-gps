import { Point } from '../typings/dataStructures';

export default class BeaconStore {
    private points;
    private subscriptions;
    registerBeacon(id: string): void;
    unregisterBeacon(id: string): void;
    reportBeaconPoint(id: string, point: Point | null): void;
    subscribe(id: string, callback: Function): void;
    unsubscribe(id: string, callback: Function): void;
}
