import { Point } from '@/typings/dataStructures';

export default class BeaconStore {
    private points = new Map<string, Point | null>();

    private subscriptions = new Map<string, Set<Function>>();

    public registerBeacon(id: string): void {
        if (this.points.has(id)) {
            console.warn(
                'BeaconStore: Attempt to register duplicate beacon ID `%s`',
                id,
            );
            return;
        }
        this.points.set(id, null);
    }

    public unregisterBeacon(id: string): void {
        if (!this.points.has(id)) {
            console.warn(
                'BeaconStore: Attempt to unregister unregistered beacon ID `%s`',
                id,
            );
            return;
        }
        this.points.delete(id);
    }

    public reportBeaconPoint(id: string, point: Point | null): void {
        if (!this.points.has(id)) {
            console.warn(
                'BeaconStore: Attempt to report unregistered beacon ID `%s`',
                id,
            );
            return;
        }
        this.points.set(id, point);
        const callbacks = this.subscriptions.get(id);
        if (callbacks) {
            callbacks.forEach((callback) => {
                callback(point);
            });
        }
    }

    public subscribe(id: string, callback: Function): void {
        let callbacks = this.subscriptions.get(id);
        if (!callbacks) {
            this.subscriptions.set(id, (callbacks = new Set()));
        }
        callbacks.add(callback);
        if (this.points.has(id) && this.points.get(id)) {
            callback(this.points.get(id));
        }
    }

    public unsubscribe(id: string, callback: Function): void {
        const callbacks = this.subscriptions.get(id);
        if (!callbacks) {
            return;
        }
        callbacks.delete(callback);
        if (callbacks.size === 0) {
            this.subscriptions.delete(id);
        }
    }
}
