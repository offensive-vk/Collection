/**
 * Write a C++ program that does the following:
 * A function that takes an array or vector as param and shuffles it.
 * Another function that takes an array or vector as param and the sum of second last element and second element from beginning is equal to the middle most element of the array
*/

#include <iostream>
#include <vector>
#include <algorithm> 
#include <random>    
#include <ctime>

// Function to shuffle elements of an array or vector
template <typename T>
void shuffleArray(std::vector<T>& vec) {
    srand(time(0)); // Seed for rand()
    int size = vec.size();
    for (int i = size - 1; i > 0; --i) {
        int j = rand() % (i + 1); // Generate a random index
        // Swap vec[i] and vec[j]
        int temp = vec[i];
        vec[i] = vec[j];
        vec[j] = temp;
    }
}

// Function to find if the sum of second last and second element from beginning
// is equal to the middle element of the array
// Example: [1, 2, 3, 4, 5] -> 2 + 4 = 6 (middle element)
bool isSumEqualMiddle(const int arr[], int size) {
    if (size < 3) // Array should have at least 3 elements for comparison
        return false;

    int secondLast = arr[size - 2];
    int secondElement = arr[1];
    int middle = arr[size / 2];

    return (secondLast + secondElement == middle);
}

int main() {
    // Example usage
    std::vector<int> nums = {1, 2, 3, 4, 5};
    
    // Shuffle the vector
    shuffleArray(nums);

    // Print the shuffled vector
    std::cout << "Shuffled array: ";
    for (const auto& num : nums) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    // Check if sum of second last and second element from beginning
    // is equal to the middle element
    if (isSumEqualMiddle(nums.data(), nums.size())) {
        std::cout << "Sum of second last and second element from beginning is equal to middle element.\n";
    } else {
        std::cout << "Sum of second last and second element from beginning is not equal to middle element.\n";
    }

    return 0;
}
