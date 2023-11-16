// a function that takes an array as param and removes duplicates and returns a new array.
function removeDuplicates(arr) {
    const uniqueArray = [];

    for (let element of arr) {
        if (!uniqueArray.includes(element)) {
            uniqueArray.push(element);
        }
    }

    return uniqueArray;
}

// Example usage
const inputArray = [1, 2, 3, 4, 2, 5, 6, 1];
const resultArray = removeDuplicates(inputArray);

// Output the result
console.log("Original Array: \n", inputArray);
console.log("Array with Duplicates Removed: \n", resultArray);
