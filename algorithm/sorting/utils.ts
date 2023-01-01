export const swapping = (array: any[], firstInd: number, secondInd: number): void => {
    const temp = array[firstInd];
    array[firstInd] = array[secondInd];
    array[secondInd] = temp;
}

