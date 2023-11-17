/**
 * A function that takes a non-squared list of integers, computes the squares, and returns a new list sorted in ascending order.
 */
function squaredList(inputList) {
    // Use map to compute the squares and sort the result
    const result = inputList.map(num => num * num).sort((a, b) => a - b);
    return result;
}

const nonSquaredList = [4, 2, 7, 1, 3];
const resultSquaredList = squaredList(nonSquaredList);

console.log(resultSquaredList);
