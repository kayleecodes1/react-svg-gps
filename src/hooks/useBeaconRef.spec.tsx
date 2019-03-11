import React from 'react';
import { renderHook, cleanup } from 'react-hooks-testing-library';
import getGlobalPoint from '../utils/getGlobalPoint';
import BeaconStore from '../models/BeaconStore';
import { BeaconContext } from '../components/BeaconProvider';
import useBeaconRef from './useBeaconRef';

jest.mock('../utils/getGlobalPoint');
jest.mock('../models/BeaconStore');
jest.mock('../components/BeaconProvider');

const renderUseBeaconRef = (callback : (props : {}) => any, beaconStore : BeaconStore) => (
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

it('registers on mount and unregisters on unmount', () => {
    const beaconStore = new BeaconStore();
    const { unmount } = renderUseBeaconRef(() => useBeaconRef({ id: 'A' }), beaconStore);
    expect(beaconStore.registerBeacon).toHaveBeenCalledTimes(1);
    expect(beaconStore.registerBeacon).toHaveBeenNthCalledWith(1, 'A');
    unmount();
    expect(beaconStore.unregisterBeacon).toHaveBeenCalledTimes(1);
    expect(beaconStore.unregisterBeacon).toHaveBeenNthCalledWith(1, 'A');
});

it('reports its position on each render', () => {
    const beaconStore = new BeaconStore();
    const { rerender } = renderUseBeaconRef(() => useBeaconRef({ id: 'A' }), beaconStore);
    for (let i = 0; i < 9; i++) {
        rerender();
    }
    expect(beaconStore.reportBeaconPoint).toHaveBeenCalledTimes(10);
    for (let i = 0; i < 10; i++) {
        expect((beaconStore.reportBeaconPoint as jest.Mock).mock.calls[i][0]).toEqual('A');
    }
});

it('reports a null position if there is no ref', () => {
    const beaconStore = new BeaconStore();
    renderUseBeaconRef(() => useBeaconRef({ id: 'A' }), beaconStore);
    expect(beaconStore.reportBeaconPoint).toHaveBeenCalledWith('A', null);
});

it('reports a position if there is a ref', () => {
    const beaconStore = new BeaconStore();
    const { result, rerender } = renderUseBeaconRef(() => useBeaconRef({ id: 'A' }), beaconStore);
    const ref = result.current;
    expect(beaconStore.reportBeaconPoint).toHaveBeenNthCalledWith(1, 'A', null);
    ref.current = Symbol('SVGGraphicsElement');
    (getGlobalPoint as jest.Mock).mockReturnValue({ x: 50, y: 100 });
    rerender();
    expect(beaconStore.reportBeaconPoint).toHaveBeenNthCalledWith(2, 'A', { x: 50, y: 100 });
});

it('propagates `anchor` and `offset` values', () => {
    const beaconStore = new BeaconStore();
    const anchor = { x: 0.1, y: 0.2 };
    const offset = { x: -50, y: -100 };
    const { result, rerender } = renderUseBeaconRef(() => useBeaconRef({ id: 'A', anchor, offset }), beaconStore);
    const ref = result.current;
    ref.current = Symbol('SVGGraphicsElement');
    rerender();
    expect(getGlobalPoint).toHaveBeenCalledWith(ref.current, anchor, offset);
});
