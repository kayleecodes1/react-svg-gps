<p align="center">
    <img src="./logo.png" alt="React SVG GPS" />
</p>

<h1 align="center">React SVG GPS</h1>

<p align="center">
    Utility for declarative coordination of SVG element positions.
</p>

---

[![build](https://img.shields.io/travis/com/kylepixel/react-svg-gps.svg)](https://travis-ci.com/kylepixel/react-svg-gps)
[![coverage](https://img.shields.io/coveralls/github/kylepixel/react-svg-gps.svg)](https://coveralls.io/github/kylepixel/react-svg-gps)
[![npm](https://img.shields.io/npm/v/react-svg-gps.svg?color=%230382f8)](https://www.npmjs.com/package/react-svg-gps)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/react-svg-gps.svg?color=%230382f8)](https://bundlephobia.com/result?p=react-svg-gps)
[![license](https://img.shields.io/npm/l/react-svg-gps.svg?color=%230382f8)](https://github.com/kylepixel/react-svg-gps/blob/master/LICENSE)

## The Problem

Calculating the relative positions of various SVG elements can get complicated quickly. Nested elements are often necessary, each potentially with their own transforms and local units. It becomes a chore to track these positions across successive renders, and to propagate them to other elements that need to know about them.

Furthermore, this is almost always merely a presentation concern. It feels excessive to manually implement application logic to solve this problem, and inappropriate to use an application data store to track this information.

## The Solution

React SVG GPS abstracts this problem away. It allows a developer to attach "beacons" to SVG elements and then access their global positions from other components via straightforward declarations. All of the complex math and communication are handled automatically.

It utilizes React Hooks for maximum composability.

## Installation

React SVG GPS requires **React 16.8 or later**.

```sh
npm install --save react-svg-gps
# or
yarn add react-svg-gps
```

## Basic Usage

```jsx
import React from 'react';
import { BeaconProvider, useBeaconRef, useBeaconPosition } from 'react-svg-gps';

const Point = ({ id, x, y }) => {
    const ref = useBeaconRef({ id });
    return (
        <circle cx={x} cy={y} r="7" fill="#3E4751" stroke="#FFF" strokeWidth="3" ref={ref} />
    );
};

const Line = ({ fromId, toId }) => {
    const from = useBeaconPosition({ id: fromId });
    const to = useBeaconPosition({ id: toId });
    return from && to && (
        <path d={`M${from.x},${from.y}L${to.x},${to.y}`} fill="none" stroke="#447AB9" strokeWidth="4" />
    );
};

const App = () => (
    <svg width="400" height="400">
        <BeaconProvider>
            <Line fromId="A" toId="B" />
            <Point id="A" x={50} y={50} />
            <Point id="B" x={350} y={350} />
        </BeaconProvider>
    </svg>
);
```

## More Examples

[![storybook](https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg)](http://kylepixel.github.io/react-svg-gps/)

You can find several usage examples compiled as a Storybook by clicking the badge above. The source code for these examples can be found [here](https://github.com/kylepixel/react-svg-gps/tree/master/examples).

If you want to run and modify these examples locally, just clone this repository and run `yarn storybook`.

## API

### `<BeaconProvider />`

A wrapper component that facilitates beacon communication. All related beacons and beacon subscribers should be contained within a `<BeaconProvider />`.

### `useBeaconRef(config)`

A hook with which beacons are established. Registers itself with the closest `BeaconProvider` and reports the position of the element to which the ref is attached on each render.

#### Arguments

- `config` (`object`)
  - `id` (`string`) - The unique identifier for the beacon.
  - `anchor` (`{ x: number, y: number }`) *[optional]* - The relative position on the element from which the beacon originates. Default value: `{ x: 0.5, y: 0.5 }`.
  - `offset` (`{ x: number, y: number }`) *[optional]* - The amount to offset the beacon origin in units local to the element. Default value: `{ x: 0, y: 0 }`.

#### Return value

Returns a ref that should be attached to an [`SVGGraphicsElement`](https://developer.mozilla.org/en-US/docs/Web/API/SVGGraphicsElement).

### `useBeaconPosition(config)`

A hook with which components can subscribe to a beacon's global position.

#### Arguments

- `config` (`object`)
  - `id` (`string`) - The beacon ID for which to receive position data.

#### Return value

Returns the global position of the beacon with the given ID in the form `{ x: number, y: number }`. Returns `null` if the beacon cannot be found.

## FAQs

### Why aren't my nested beacons reporting their positions when a parent updates?

A beacon reports its position each time it is rendered. If nested elements are being rendered and then and passed to another component (either through `props.children` or otherwise), they will not be re-rendered when that enclosing element re-renders. Therefore, it is important to either render nested beacons explicitly within parent components, provide them as render props, or take some other approach to ensure they re-render with their parent (such as iterating over them and cloning them — see the `InteractiveNodeGraph` example for a demonstration of this).
