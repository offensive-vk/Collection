#include <iostream>
#include <vector>
#include <set>
#include <algorithm> // For sorting numbers array

/**
 * @brief Global Type Helper for Function and Set
 * @tparam T Data type
 */
template <typename T>
using SetArray = std::set<std::vector<T>>;

/**
 * @brief Create a function that categorizes elements into different arrays based on their data type.
 *        Returns these arrays as a set, with each array containing elements of a specific data type.
 *        If the length of the input array is less than or equal to 3, returns the input array as is.
 *        Otherwise, returns a set containing arrays categorized by data type, with the numbers array sorted in ascending order.
 * @tparam T Data type of the array
 * @param arr An array of any data type.
 * @return A set containing arrays categorized by data type, or the input array if its length is less than or equal to 3.
 */

template <typename T> auto FilterArray(const std::vector<T>& arr) -> SetArray<T> {
    std::vector<T> numbers;
    std::vector<T> strings;
    std::vector<T> booleans;
    std::vector<T> others;

    // If the length of the array is less than or equal to 3, return the input array as is.
    if (arr.size() <= 3) {
        return SetArray<T>{arr};
    }

    // Categorize elements based on their data type
    for (const auto& element : arr) {
        if (std::is_same<T, int>::value || std::is_same<T, float>::value || std::is_same<T, double>::value) {
            numbers.push_back(element);
        } else if (std::is_same<T, std::string>::value) {
            strings.push_back(element);
        } else if (std::is_same<T, bool>::value) {
            booleans.push_back(element);
        } else {
            others.push_back(element);
        }
    }

    // Sort the numbers array in ascending order
    std::sort(numbers.begin(), numbers.end());

    // Create a set containing arrays categorized by data type
    return SetArray<T>{numbers, strings, booleans, others};
}

int main() {
    // Example usage
    std::vector<int> inputArray = {3, "hello", true, 5.5, 42, "world", false};
    auto result = FilterArray(inputArray);

    // Print the result
    for (const auto& array : result) {
        std::cout << "[ ";
        for (const auto& element : array) {
            std::cout << element << " ";
        }
        std::cout << "]" << std::endl;
    }

    return 0;
}