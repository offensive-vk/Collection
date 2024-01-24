/**
 * Joins and sorts two arrays in ascending order.
 *
 * @param {Array} array1 - The first array to be joined and sorted.
 * @param {Array} array2 - The second array to be joined and sorted.
 * @returns {Array} - The sorted array resulting from joining array1 and array2.
 */
function joinAndSortArrays(array1, array2) {
    // Concatenate the two arrays
    const combinedArray = array1.concat(array2);

    // Sort the combined array in ascending order
    const sortedArray = combinedArray.sort((a, b) => a - b);

    return sortedArray;
}

// Example usage
const array1 = [3, 1, 4];
const array2 = [1, 5, 9];
const result = joinAndSortArrays(array1, array2);

// Output the result
console.log("Joined and sorted array:\n", result);