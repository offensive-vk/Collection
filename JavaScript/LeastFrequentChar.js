function findLeastOccurringCharacter(inputString) {
    // Create a frequency map to count the occurrences of each character
    const charFrequency = new Map();

    // Count the occurrences of each character
    for (let char of inputString) {
        charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }

    // Find the least occurring character and its frequency
    let leastChar;
    let leastOccurrence = Infinity;

    charFrequency.forEach((occurrences, char) => {
        if (occurrences < leastOccurrence) {
            leastOccurrence = occurrences;
            leastChar = char;
        }
    });

    return { leastChar, leastOccurrence };
}

// Example usage
const inputString = "hello world";
const result = findLeastOccurringCharacter(inputString);

// Output the result
console.log(`The least occurring character in "${inputString}" is "${result.leastChar}" with ${result.leastOccurrence} occurrences.`);
