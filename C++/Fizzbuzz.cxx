/**
 * FizzBuzz:
 * Implement the FizzBuzz program. Print numbers from 1 to N, but for multiples of 3, print "Fizz," for multiples of 5, print "Buzz," and for multiples of both 3 and 5, print "FizzBuzz."
*/
#include <iostream>

void fizzBuzz(int n) {
    for (int i = 1; i <= n; ++i) {
        if (i % 3 == 0 && i % 5 == 0) {
            std::cout << "FizzBuzz ";
        } else if (i % 3 == 0) {
            std::cout << "Fizz ";
        } else if (i % 5 == 0) {
            std::cout << "Buzz ";
        } else {
            std::cout << i << " ";
        }
    }
}

int main() {
    int N;
    std::cout << "Enter the value of N: ";
    std::cin >> N;

    fizzBuzz(N);

    return 0;
}
