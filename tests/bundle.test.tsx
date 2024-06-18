import React from 'react';
import { render } from '@testing-library/react';
import { BeaconProvider, useBeaconRef, useBeaconPosition } from '..';

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
