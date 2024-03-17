/**
 *  * Create a function that takes an array of any data type as input and categorizes the elements into different arrays based on their data type.
 * It returns these arrays as a set, with each array containing elements of a specific data type.
 * If the length of the input array is less than or equal to 3, the function returns the input array as is.
 * Otherwise, the function returns a set containing arrays categorized by data type, with the numbers array sorted in ascending order.
 * @type {T} Global Type Helper for Function and Set
 * @param arr - An array of any data type.
 * @returns {Set<Array<T>> | Array<T>} A set containing arrays categorized by data type, or the input array if its length is less than or equal to 3.
 */
function FilterArray<T> (arr: Array<T>): Set<Array<T>> | Array<T> {
    
    var numbers = [];
    var strings = []
    var booleans = []
    var others: any[] = []

    // if(arr.length >= 3) return new Set<T[]>([arr]);
    if(arr.length <= 3) return (arr);
    
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'number') {
            numbers.push(arr[i]);
        } 
        if (typeof arr[i] == 'string') {
            strings.push(arr[i]);
        } 
        if (typeof arr[i] == 'boolean') {
            booleans.push(arr[i]);
        } 
        if (typeof arr[i] !== 'boolean' && typeof arr[i] !== 'string' && typeof arr[i] !== 'number'){
            others.push(arr[i]);
        }
    }
    numbers.sort((a , b) => (a as number) - (b as number)) 
    return new Set<T[]>([numbers, strings, booleans, others]);
}