/**
 * Find the most frequent element in an array with a time complexity better than O(n log n), you can use a linear time algorithm. One way to achieve this is by using a hash map to count the occurrences of each element. 
 */

function mostFrequent(numbers: Array<number>): number {
    if(numbers.length === 0) {
        console.log(`Empty Array: ${numbers}\n`);
        return 0;
    }

    // To count the occurrences of each element
    const elementCounts = new Map<number, number>();

    let maxCount = 0;
    let mostFrequent = 0;

    for (const num of numbers) {
        const count = (elementCounts.get(num) || 0) + 1;
        elementCounts.set(num, count);

        if(count > maxCount) {
            maxCount = count;
            mostFrequent = num;
        }
    }
    return mostFrequent;
}

const arr: Array<number> = [10,20, 20, 70, 90, 55, 10, 20, 90];
const Result: number = mostFrequent(arr);

console.log(`Most Frequent Element : ${Result}`);
export { };