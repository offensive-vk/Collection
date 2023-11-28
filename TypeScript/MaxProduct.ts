/**
 * Write a TypeScript function that takes an array of numbers and finds the maximum product of any two distinct numbers in the array. If no such product exists, the function should return 0.
 */

function maxProduct(arr: number[]): number {
    if (arr.length < 2) {
        return 0; // Not enough elements to find a product
    }

    let maxProductResult = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const product = arr[i] * arr[j];
            maxProductResult = Math.max(maxProductResult, product);
        }
    }

    return maxProductResult <= 0 ? 0 : maxProductResult;
}

// Example usage:
const numbers1 = [2, 5, 3, 1, 7]; // The maximum product is 7 * 5 = 35
const numbers2 = [-2, -5, 3, 1, -7]; // The maximum product is -7 * -5 = 35
const numbers3 = [0, 2, 3, 4]; // The maximum product is 4 * 3 = 12
const numbers4 = [1]; // Not enough elements to find a product

console.log("Max Product 1:", maxProduct(numbers1));
console.log("Max Product 2:", maxProduct(numbers2));
console.log("Max Product 3:", maxProduct(numbers3));
console.log("Max Product 4:", maxProduct(numbers4));