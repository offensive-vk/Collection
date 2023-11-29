/**
 * @abstract Write a function ( AsyncIterate ) that takes two arrays of any data type as input and outputs each value of both arrays as a pair or simultaneously iterates over both arrays and returns an object as keys of first array with values of second array.
 * @see Task : Do this task with no repeated elements in both arrays.
 */
/**
 * Pauses the execution of stdout for ms milliseconds.
 * @param ms delay in milliseconds. (1000 = 1 second).
 * @returns Promise<unknown>
 */
function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
/**
 * Performs asynchronous iteration over two arrays and returns a promise of a record.
 * @author Vedansh
 * @param {Type1} first - The first array.
 * @param {Type2} second - The second array.
 * @returns {Promise<Record<string | number, Type2>>} A promise that resolves to a record with keys of type string or number and values of type Type2.
 * @throws {Error} If the lengths of the two arrays are not equal.
 */
async function AsyncIterate<Type1 extends Array<any>, Type2 extends Array<any>>(first: Type1, second: Type2): Promise<Record<string | number, Type2>> {

    // Checking for compatibility of both arrays.
    if (first.length !== second.length ) {
        throw new Error(`Iteration Cannot be performed on Both Arrays. The Length of both arrays must be equal.\n`);
    }

    console.log(`Type of First Array: ${Array.isArray(first) ? 'Array' : typeof first}`);
    console.log(`Type of Second Array: ${Array.isArray(second) ? 'Array' : typeof second}`);
    
    // Returning the keys and values pair.
    const Result: Record<string | number, Type2> = {} as Record<string | number, Type2>;

    for (let value in first) {
        await delay(1500);
        Result[first[value]] = second[value];
        console.log(`ID -> ${first[value]} : ${second[value]}`);
    }

    return Result;
}

/**@testing */
const one = [1001, 1002, 1003, 1004, 1005];
const two = ['Manish', 'Rupesh', 'Himanshu', 'Sourabh', 'Yogesh'];

( async() => {
    var _ = await AsyncIterate(one, two);
    setTimeout(() => {
        console.dir(_);
    }, 1500);
})();