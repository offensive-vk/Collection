/**
 * Move all 0's to the end of the array without using sort(),  iterate through the array and reorder the elements accordingly. 
 * @param {*} numbers number array to operate on.
 */
function moveZerosToEnd(numbers) {
    let nonZeros = numbers.filter(num => num !== 0);
    let zeros = Array(numbers.length - nonZeros.length).fill(0);

    // Concatenate non-zero numbers and zeros
    let resultArray = nonZeros.concat(zeros);

    // Update the original array with the result
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = resultArray[i];
    }
}

const numbersArray = [0, 2, 0, 3, 4, 0, 5, 6, 0, 7];
moveZerosToEnd(numbersArray);
console.log(numbersArray);