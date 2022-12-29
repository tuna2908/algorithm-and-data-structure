
// The Fibonacci sequence is a set of integers (the Fibonacci numbers) that starts with a zero, followed by a one, then by another one, and then by a series of steadily increasing numbers. 
// The sequence follows the rule that each number is equal to the sum of the preceding two numbers.
// The Fibonacci sequence begins with the following 14 integers:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ...

// Each number, starting with the third, adheres to the prescribed formula. For example, the seventh number, 8, is preceded by 3 and 5, which add up to 8.

// n =5
/*
res = findFi(4) + findFi(3) =  (a) + findFi(3) = 3 + 2 = 5

(a): res = findFi(3) + findFi(2) = (b) + findFi(2) = 2 + 1 = 3

(b): res = findFi(2) + findFi(1) = (c) + findFi(1) = 1 + 1 = 2

(c): res = findFi(1) + findFi(0) = 1

*/

export const findFibonancci = (n) => {  //O(n)
    if (n === 0 || n === 1)
        return n;
    const resultVal = findFibonancci(n - 1) + findFibonancci(n - 2);
    return resultVal;
}

export const findFibonancciIteratively = (n) => {   //O(2^n)
    const fiboSequence = [0, 1];

    for (let i = 2; i <= n; i++) {
        fiboSequence.push(fiboSequence[i - 1] + fiboSequence[i - 2])
    }

    return fiboSequence[n];
}