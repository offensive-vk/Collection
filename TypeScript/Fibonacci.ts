/**
 * Write a function to generate the nth Fibonacci number.
 */

function fibonacci(n: number): number {
    if (n <= 0) {
        throw new Error("Input must be a positive integer.");
    }

    if (n === 1 || n === 2) {
        return 1;
    }

    let prev = 1;
    let current = 1;

    for (let i = 3; i <= n; i++) {
        const next = prev + current;
        prev = current;
        current = next;
    }

    return current;
}

// Example usage:
const n = 7;
const result = fibonacci(n);
console.log(`The ${n}th Fibonacci number is: ${result}`);
