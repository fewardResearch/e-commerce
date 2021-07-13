import { sumValues, findItemInArrayById } from "utils/array";

test('array values sum', () => expect(sumValues([1, 2])).toBe(3));

test('find item in array by id', () => expect(findItemInArrayById([{ id: 1 }, { id: 2 }], 1)).toEqual({ id: 1}));