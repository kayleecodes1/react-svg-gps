import { Point, Matrix } from '@/typings/dataStructures';

const IDENTITY_MATRIX = {
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    e: 0,
    f: 0,
};

const matrixTransform = (point: Point, matrix: Matrix): Point => ({
    x: matrix.a * point.x + matrix.c * point.y + matrix.e,
    y: matrix.b * point.x + matrix.d * point.y + matrix.f,
});

const getGlobalPoint = (
    element: SVGGraphicsElement,
    anchor: Point,
    offset: Point,
): Point => {
    const bBox = element.getBBox();
    const localPoint = {
        x: bBox.x + bBox.width * anchor.x + offset.x,
        y: bBox.y + bBox.height * anchor.y + offset.y,
    };
    const localToGlobalMatrix = element.getCTM() || IDENTITY_MATRIX;
    return matrixTransform(localPoint, localToGlobalMatrix);
};

export default getGlobalPoint;
