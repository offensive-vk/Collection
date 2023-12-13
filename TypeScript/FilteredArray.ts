/**
 * TS/JS: Create an function that takes an array of any data type as input and does the following:
    Checks how many elements of different data types are present in the given array
    Returns different arrays for different elements of diff data types.
    one for numbers
    one for boolean numbers
    one for string numbers
    one for extra that can't be determined
 */

function FilterArray<T> (arr: Array<T>): Set<Array<T>> {
    
    var numbers = []
    var strings = []
    var booleans = []
    var others: any[] = []

    //if(arr.length === 0) return new Set<T[]>(arr);
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
        else {
            others.push(arr[i]);
        }
    }
    return {} as Set<Array<T>>;
}