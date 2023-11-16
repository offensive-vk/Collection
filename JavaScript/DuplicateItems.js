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
console.log("Original Array:", inputArray);
console.log("Array with Duplicates Removed:", resultArray);
