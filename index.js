import { findFactorial, findFactorialIteratively } from "./algorithm/recursion/factorial";
import { findFibonancci, findFibonancciIteratively } from "./algorithm/recursion/fibonancci";


const FACTORIAL_VALUE = 5;
const FIBONANCII_INDEX = 8;

const factorialResult = findFactorial(FACTORIAL_VALUE);
const factorialResultByIteration = findFactorialIteratively(FACTORIAL_VALUE);

const fibonancciResult = findFibonancci(FIBONANCII_INDEX);
const fibonancciResultByIteration = findFibonancciIteratively(FIBONANCII_INDEX);


console.log({ factorialResult, factorialResultByIteration });
console.log({ fibonancciResult, fibonancciResultByIteration });
