import { Point } from '../typings/dataStructures';

interface UseBeaconPositionConfig {
    id: string;
}
declare const useBeaconPosition: ({ id }: UseBeaconPositionConfig) => Point | null;
export default useBeaconPosition;
