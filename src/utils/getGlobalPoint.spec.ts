import getGlobalPoint from './getGlobalPoint';

const window = require('svgdom'); // eslint-disable-line @typescript-eslint/no-var-requires
const { SVG, registerWindow } = require('@svgdotjs/svg.js'); // eslint-disable-line @typescript-eslint/no-var-requires

registerWindow(window, window.document);

interface StepConfig {
    translateX : number;
    translateY : number;
    scale : number;
}

const renderNestedCircleElement = (levels : number, step : StepConfig) => {
    const root = SVG(window.document.documentElement);
    let currentNode = root;
    const currentPosition = { x: 0, y: 0 };
    let currentScale = 1;
    for (let i = 0; i < levels; i++) {
        const group = root.group().attr({ transform: `translate(${step.translateX},${step.translateY}) scale(${step.scale})` });
        currentNode.add(group);
        currentNode = group;
        currentPosition.x += step.translateX * currentScale;
        currentPosition.y += step.translateY * currentScale;
        currentScale *= step.scale;
    }
    const circle = root.circle().attr({ cx: step.translateX, cy: step.translateY, r: 1 });
    currentNode.add(circle);
    currentPosition.x += step.translateX * currentScale;
    currentPosition.y += step.translateY * currentScale;
    return {
        svgCircle: circle.node,
        globalPosition: currentPosition,
        globalScale: currentScale,
    };
};

const testAnchors : { x : number; y : number }[] = [];
const testOffsets : { x : number; y : number }[] = [];
for (let i = 0; i < 9; i++) {
    testAnchors.push({
        x: (i % 3) / 2,
        y: Math.floor(i / 3) / 2,
    });
    testOffsets.push({
        x: (i % 3) - 1,
        y: Math.floor(i / 3) - 1,
    });
}

it('calculates the correct global point', () => {
    const result = renderNestedCircleElement(5, { translateX: 10, translateY: 10, scale: 2 });
    const { svgCircle, globalPosition, globalScale } = result;
    testAnchors.forEach((anchor) => {
        testOffsets.forEach((offset) => {
            const point = getGlobalPoint(svgCircle, anchor, offset);
            expect(point).toEqual({
                x: globalPosition.x + (2 * anchor.x - 1) * globalScale + offset.x * globalScale,
                y: globalPosition.y + (2 * anchor.y - 1) * globalScale + offset.y * globalScale,
            });
        });
    });
});

it('handles unavailable CTM', () => {
    const result = renderNestedCircleElement(5, { translateX: 10, translateY: 10, scale: 2 });
    const { svgCircle } = result;
    svgCircle.getCTM = jest.fn().mockImplementation(() => null);
    const point = getGlobalPoint(svgCircle, { x: 0.5, y: 0.5 }, { x: 0, y: 0 });
    expect(point).toEqual({ x: 10, y: 10 });
});
