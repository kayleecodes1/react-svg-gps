import React from 'react';
import { renderHook, act, cleanup } from 'react-hooks-testing-library';
import BeaconStore from '../models/BeaconStore';
import { BeaconContext } from '../components/BeaconProvider';
import useBeaconPosition from './useBeaconPosition';

jest.mock('../models/BeaconStore');
jest.mock('../components/BeaconProvider');

const renderUseBeaconPosition = (callback : (props : {}) => any, beaconStore : BeaconStore) => (
    renderHook(callback, {
        wrapper: ({ children }) => (
            <BeaconContext.Provider value={beaconStore}>
                {children}
            </BeaconContext.Provider>
        ),
    })
);

afterEach(() => {
    cleanup();
});

it('subscribes on mount and unscubscribes on unmount', () => {
    const beaconStore = new BeaconStore();
    const { unmount } = renderUseBeaconPosition(() => useBeaconPosition({ id: 'A' }), beaconStore);
    expect(beaconStore.subscribe).toHaveBeenCalledTimes(1);
    expect(beaconStore.subscribe).toHaveBeenNthCalledWith(1, 'A', expect.any(Function));
    const callback = (beaconStore.subscribe as jest.Mock).mock.calls[0][1];
    unmount();
    expect(beaconStore.unsubscribe).toHaveBeenCalledTimes(1);
    expect(beaconStore.unsubscribe).toHaveBeenNthCalledWith(1, 'A', callback);
});

it('updates with the provided position when it is notified', () => {
    const beaconStore = new BeaconStore();
    const { result } = renderUseBeaconPosition(() => useBeaconPosition({ id: 'A' }), beaconStore);
    const callback = (beaconStore.subscribe as jest.Mock).mock.calls[0][1];
    expect(result.current).toBeNull();
    act(() => { callback({ x: 50, y: 100 }); });
    expect(result.current).toEqual({ x: 50, y: 100 });
    act(() => { callback({ x: 150, y: 200 }); });
    expect(result.current).toEqual({ x: 150, y: 200 });
    act(() => { callback(null); });
    expect(result.current).toEqual(null);
});
