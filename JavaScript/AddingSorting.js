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
console.log("Joined and sorted array:", result);
