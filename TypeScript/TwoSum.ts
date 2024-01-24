/**
 * The Two Sum problem is a classic coding interview question that goes like this:
 *
 * Problem Statement: Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to the target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.
 *
 * @param nums - An array of integers
 * @param target - The target sum
 * @returns The indices of the two numbers that add up to the target sum
 *
 * @example
 * // Input: nums = [2, 7, 11, 15], target = 9
 * // Output: [0, 1]
 * // Explanation: nums[0] + nums[1] equals 9, so the answer is [0, 1].
 *
 * @remarks
 * This function uses a hash map to store the indices of the numbers in the input array. It iterates through the array and for each number, it calculates the complement (target minus the current number). If the complement exists in the hash map, it means that the current number and the complement add up to the target. In this case, it returns the indices of the current number and the complement. If no solution is found, an empty array is returned.
 */
function twoSum(nums: number[], target: number): number[] {
    const numIndicesMap: { [key: number]: number | undefined } = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (complement in numIndicesMap) {
            const complementIndex = numIndicesMap[complement];
            if (complementIndex !== undefined) {
                return [complementIndex, i];
            }
        }

        numIndicesMap[nums[i]] = i;
    }

    // If no solution is found
    return [];
}


// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);

console.log(result);
export {};