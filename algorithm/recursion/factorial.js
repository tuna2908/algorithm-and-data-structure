
export const findFactorial = (targetVal) => {
    if (targetVal === 1) {
        return 1;
    }

    if (targetVal < 1) {
        return 'INVALID NUMBER';
    }

    const nextValue = findFactorial(targetVal - 1)

    return nextValue * targetVal;
}

export const findFactorialIteratively = (targetVal) => {
    if (targetVal < 1) {
        return 'INVALID NUMBER';
    }

    let stoppingValue = targetVal - 1;
    let resultVal = targetVal;
    while (stoppingValue > 1) {
        resultVal *= stoppingValue;
        stoppingValue--;

    }

    return resultVal;
}