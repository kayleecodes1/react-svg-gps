import { default as React } from '../../node_modules/react';
import { Point } from '../typings/dataStructures';

interface UseBeaconRefConfig {
    id: string;
    anchor?: Point;
    offset?: Point;
}
declare const useBeaconRef: ({ id, anchor, offset, }: UseBeaconRefConfig) => React.RefObject<SVGGraphicsElement>;
export default useBeaconRef;
