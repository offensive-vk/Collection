/**
 * A function that calculates the number of steps needed to reduce a given number to 0. The steps involve dividing the number by 2 if it's even or subtracting 1 if it's odd, and repeating until the number becomes 0:
 */
function numberOfSteps(num) {
    if (num < 0) {
        return "Please provide a non-negative integer.";
    }

    let steps = 0;

    while (num !== 0) {
        if (num % 2 === 0) {
            // If the number is even, divide by 2
            num /= 2;
        } else {
            // If the number is odd, subtract 1
            num -= 1;
        }
        steps++;
    }

    return steps;
}

const exampleNumber = 15;
const stepsNeeded = numberOfSteps(exampleNumber);

console.log(`Number of steps needed to reduce ${exampleNumber} to 0: ${stepsNeeded}`);
