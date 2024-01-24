/**
 * Move all 0's to the end of the array without using sort(),  iterate through the array and reorder the elements accordingly. 
 * @param {*} numbers number array to operate on.
 * @returns {Array<number>} which contains zeros at last.
 */

function moveZerosToEnd(numbers: Array<number>): Array<number> {
    let nonZeros = numbers.filter(num => num !== 0);
    let zeros = Array(numbers.length - nonZeros.length).fill(0);

    // Concatenate non-zero numbers and zeros
    let resultArray = nonZeros.concat(zeros);

    // Update the original array with the result
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = resultArray[i] || 0;
    }
    return resultArray;
}

// Usage
const numbers = [4,9,1,0,1,0,1,7,0,0,0,9,5];
console.log(moveZerosToEnd(numbers));