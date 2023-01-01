import { swapping } from "./utils";

const partition = (items: any[], left: number, right: number): number => {
    let pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swapping(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

export const quickSort = (items: any[], left: number, right: number): any[] => {
    let index = 0;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}