/**
 * In this problem, array1 and array2 are iterated simultaneously using a for loop. The loop runs for the length of either array (assuming both arrays have the same length), and the values from both arrays at the same index are outputted as a pair.
 */

const array1 = [147, 792, 355, 414];
const array2 = ['first', 'second', 'third', 'fourth'];

// Ensure both arrays have the same length
if (array1.length !== array2.length) {

    console.error('Arrays must have the same length');
} else {

    // Iterate over the arrays simultaneously
    for (let i = 0; i < array1.length; i++) {
        setTimeout(() => {
            console.log(`Pair ${i + 1}: ${array1[i]}, ${array2[i]}`);
        }, 1500);
    }
}