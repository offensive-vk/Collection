/**
 * Find the most frequent element in an array with a time complexity better than O(n log n), you can use a linear time algorithm. One way to achieve this is by using a hash map to count the occurrences of each element. 
 */
/**
 * Find the most frequent element in an array.
 *
 * @param {Array} numbers  The array of numbers to search.
 * @returns {number|null}  The most frequent element in the array, or null if the array is empty.
 * @example
 * mostFrequentElement([1, 2, 2, 3, 4, 2]);
 *
 */
function mostFrequentElement(numbers) {
    if (numbers.length === 0) {
        return null; // Return null for an empty array
    }

    // Use a hash map to count the occurrences of each element
    const elementCounts = new Map();

    // Iterate through the array and count occurrences
    let maxCount = 0;
    let mostFrequent;

    for (const number of numbers) {
        const count = (elementCounts.get(number) || 0) + 1;
        elementCounts.set(number, count);

        // Update mostFrequent if the current element is more frequent
        if (count > maxCount) {
            maxCount = count;
            mostFrequent = number;
        }
    }

    return mostFrequent;
}

const numbersArray = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const result = mostFrequentElement(numbersArray);

console.log(`Most frequent element: ${result}`);
