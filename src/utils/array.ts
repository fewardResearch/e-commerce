/**
 * 
 * @param arr any array
 * @returns numbers of total values
 */
export const sumValues = (arr: number[]): number => arr.reduce((a, b) => a + b, 0);

/**
 * 
 * @param arr any array
 * @param id number id in array item
 * @returns found item in array or undefined
 */
export const findItemInArrayById = (arr: any[], id: number): Object | undefined => arr.filter((item) => item.id === id)[0];