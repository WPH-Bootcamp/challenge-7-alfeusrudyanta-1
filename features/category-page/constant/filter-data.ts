import { DistanceFilter } from '../types/category';

const DISTANCE_FILTER: DistanceFilter[] = [
  { range: 0, text: 'Nearby' },
  { range: 1, text: 'Within 1 km' },
  { range: 3, text: 'Within 3 km' },
  { range: 5, text: 'Within 5 km' },
];

const RATING_FILTER: number[] = [1, 2, 3, 4, 5];

export { DISTANCE_FILTER, RATING_FILTER };
