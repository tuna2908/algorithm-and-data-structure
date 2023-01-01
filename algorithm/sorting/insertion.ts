
export const insertionSort = (array: any[]): any[] => {
    const len = array.length;
    for (let i = 0; i < len; i++) {
        const currentVal = array[i];
        console.log({ currentVal, equa: currentVal < array[0], zero: array[0] })
        if (currentVal < array[0]) {
            //put at first
            array.splice(i, 1);
            array.unshift(currentVal);
        }
        else {
            //starting from index 1
            //loop through the list of i elements and insert value in between
            for (let j = 1; j < i; j++) {
                if (currentVal > array[j - 1] && currentVal < array[j]) {
                    array.splice(i, 1);
                    array.splice(j, 0, currentVal);
                }
            }
        }

    }
    return array;
}