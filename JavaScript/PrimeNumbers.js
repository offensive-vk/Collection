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
