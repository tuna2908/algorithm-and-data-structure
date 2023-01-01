import { swapping } from "./utils";


export const selectionSort = (array: any[]): any[] => {
    const len = array.length;
    for (let i = 0; i < len; i++) {
        let smallestInd = i;
        for (let j = i; j < len; j++) {
            if (array[j] < array[smallestInd]) {
                smallestInd = j;
            }
        }
        swapping(array, i, smallestInd);
    }
    return array;
}