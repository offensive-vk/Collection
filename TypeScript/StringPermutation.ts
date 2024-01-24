/**
 * Write a function that generates all possible permutations of a given string.
 * 
 * @param input - The input string for which permutations need to be generated.
 * @returns An array containing all possible permutations of the input string.
 * @example
 * const input = "abc";
 * const permutations = generatePermutations(input);
 * console.log(permutations);
 * // Output: ["abc", "acb", "bac", "bca", "cab", "cba"]
 */
function generatePermutations(input: string): string[] {
    const result: string[] = [];

    function permute(str: string, prefix: string = ''): void {
        const n = str.length;

        if (n === 0) {
            result.push(prefix);
        } else {
            for (let i = 0; i < n; i++) {
                permute(str.slice(0, i) + str.slice(i + 1), prefix + str[i]);
            }
        }
    }

    permute(input);

    return result;
}

// Example usage:
const inputString = "xyz";
const permutations = generatePermutations(inputString);
console.log(permutations);