/**
 * create a happyBirthday function in JavaScript that takes a date as a parameter, checks if the current date is your birthday, and prints a birthday message or the remaining days until your next birthday. 
 */
function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}
function generatePrimes(n) {
    const primes = [];
    let num = 2;

    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }

    return primes;
}

// Example usage
const numberOfPrimes = 10;
const primeNumbers = generatePrimes(numberOfPrimes);

// Output the result
console.log(`The first ${numberOfPrimes} prime numbers are:`, primeNumbers);
