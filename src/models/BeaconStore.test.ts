import BeaconStore from './BeaconStore';

const mockWarn = jest.spyOn(console, 'warn').mockImplementation(() => {});

let beaconStore: BeaconStore;
beforeEach(() => {
    beaconStore = new BeaconStore();
    mockWarn.mockClear();
});

it('registers beacons', () => {
    beaconStore.registerBeacon('A');
    beaconStore.registerBeacon('B');
    beaconStore.registerBeacon('C');
    expect(console.warn).not.toHaveBeenCalled();
});

it('warns if a duplicate beacon ID is registered', () => {
    beaconStore.registerBeacon('A');
    beaconStore.registerBeacon('A');
    expect(console.warn).toHaveBeenCalled();
});

it('unregisters beacons', () => {
    beaconStore.registerBeacon('A');
    beaconStore.registerBeacon('B');
    beaconStore.registerBeacon('C');
    beaconStore.unregisterBeacon('A');
    beaconStore.unregisterBeacon('B');
    beaconStore.unregisterBeacon('C');
    expect(console.warn).not.toHaveBeenCalled();
});

it('warns if an unregistered beacon ID is unregistered', () => {
    beaconStore.unregisterBeacon('Z');
    expect(console.warn).toHaveBeenCalled();
});

it('receives beacon points', () => {
    beaconStore.registerBeacon('A');
    beaconStore.reportBeaconPoint('A', { x: 50, y: 100 });
    beaconStore.registerBeacon('B');
    beaconStore.reportBeaconPoint('B', { x: 150, y: 200 });
    beaconStore.registerBeacon('C');
    beaconStore.reportBeaconPoint('C', { x: 250, y: 300 });
    expect(console.warn).not.toHaveBeenCalled();
});

it('warns if a point for an unregistered beacon ID is reported', () => {
    beaconStore.reportBeaconPoint('Z', { x: 50, y: 100 });
    expect(console.warn).toHaveBeenCalled();
});

it('notifies subscribers when beacon point is reported', () => {
    const callbacks = [jest.fn(), jest.fn(), jest.fn()];
    beaconStore.registerBeacon('A');
    callbacks.forEach((callback) => {
        beaconStore.subscribe('A', callback);
    });
    beaconStore.reportBeaconPoint('A', { x: 50, y: 100 });
    beaconStore.reportBeaconPoint('A', { x: 150, y: 200 });
    callbacks.forEach((callback) => {
        expect(callback).toHaveBeenCalledTimes(2);
        expect(callback).toHaveBeenNthCalledWith(1, { x: 50, y: 100 });
        expect(callback).toHaveBeenNthCalledWith(2, { x: 150, y: 200 });
    });
});

it('notifies subscribers on subscription if the beacon exists and is non-null', () => {
    const callbacks = [jest.fn(), jest.fn(), jest.fn()];
    beaconStore.registerBeacon('B');
    beaconStore.reportBeaconPoint('B', null);
    beaconStore.registerBeacon('C');
    beaconStore.reportBeaconPoint('C', { x: 50, y: 150 });
    beaconStore.subscribe('A', callbacks[0] as jest.Mock);
    beaconStore.subscribe('B', callbacks[1] as jest.Mock);
    beaconStore.subscribe('C', callbacks[2] as jest.Mock);
    expect(callbacks[0]).not.toHaveBeenCalled();
    expect(callbacks[1]).not.toHaveBeenCalled();
    expect(callbacks[2]).toHaveBeenCalledWith({ x: 50, y: 150 });
});

it('unsubscribes', () => {
    const callback = jest.fn();
    beaconStore.registerBeacon('A');
    beaconStore.subscribe('A', callback);
    beaconStore.reportBeaconPoint('A', { x: 50, y: 100 });
    beaconStore.unsubscribe('A', callback);
    beaconStore.reportBeaconPoint('A', { x: 150, y: 200 });
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenNthCalledWith(1, { x: 50, y: 100 });
});

it('ignores invalid unsubscribes', () => {
    const callbacks = [jest.fn(), jest.fn()];
    beaconStore.unsubscribe('A', callbacks[1] as jest.Mock);
    beaconStore.subscribe('A', callbacks[0] as jest.Mock);
    beaconStore.unsubscribe('A', callbacks[1] as jest.Mock);
});
