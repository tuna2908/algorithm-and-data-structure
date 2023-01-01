import { swapping } from "./utils";

export const bubbleSort = (array: any[]): any[] => {
    const len = array.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i; j++) {
            if (array[j] > array[j + 1]) {
                swapping(array, j, j + 1);
            }
        }

    }
    return array;
}