import React from 'react';
import { render } from '@testing-library/react';
import BeaconStore from '@/models/BeaconStore';
import BeaconProvider, { BeaconContext } from './BeaconProvider';

jest.mock('../models/BeaconStore');

it('renders children if they are provided', () => {
    const { container, getByTestId } = render(
        <BeaconProvider>
            <svg data-testid="child-1" />
            <svg data-testid="child-2" />
        </BeaconProvider>,
    );
    expect(container.children.length).toBe(2);
    expect(getByTestId('child-1')).toBeDefined();
    expect(getByTestId('child-2')).toBeDefined();
});

it('maintains a consistent BeaconStore instance', () => {
    let lastBeaconStore: BeaconStore | undefined;
    let currentBeaconStore: BeaconStore | undefined;
    const ui = () => (
        <BeaconProvider>
            <BeaconContext.Consumer>
                {(beaconStore) => {
                    lastBeaconStore = currentBeaconStore;
                    currentBeaconStore = beaconStore;
                    return null;
                }}
            </BeaconContext.Consumer>
        </BeaconProvider>
    );
    const { rerender } = render(ui());
    for (let i = 0; i < 10; i++) {
        rerender(ui());
        expect(currentBeaconStore).toBe(lastBeaconStore);
    }
});
