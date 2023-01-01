import { findFactorial, findFactorialIteratively } from "./algorithm/recursion/factorial";
import { findFibonancci, findFibonancciIteratively } from "./algorithm/recursion/fibonancci";
import { bubbleSort } from "./algorithm/sorting/bubble";
import { insertionSort } from "./algorithm/sorting/insertion";
import { mergeSort } from "./algorithm/sorting/merge";
import { quickSort } from "./algorithm/sorting/quick";
import { selectionSort } from "./algorithm/sorting/selection";


const FACTORIAL_VALUE = 5;
const FIBONANCII_INDEX = 8;

const factorialResult = findFactorial(FACTORIAL_VALUE);
const factorialResultByIteration = findFactorialIteratively(FACTORIAL_VALUE);

const fibonancciResult = findFibonancci(FIBONANCII_INDEX);
const fibonancciResultByIteration = findFibonancciIteratively(FIBONANCII_INDEX);


console.log({ factorialResult, factorialResultByIteration });
console.log({ fibonancciResult, fibonancciResultByIteration });


const inputs = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// const inputs = [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283];
const sortResUsingSelection = selectionSort([...inputs]);
const sortResUsingBubble = bubbleSort([...inputs]);
const sortResUsingInsertion = insertionSort([...inputs]);
const sortResUsingMerging = mergeSort([...inputs]);
const sortResUsingQuickSort = quickSort([...inputs], 0, inputs.length - 1);
console.log({ inputs, sortResUsingSelection, sortResUsingBubble, sortResUsingInsertion, sortResUsingMerging, sortResUsingQuickSort });