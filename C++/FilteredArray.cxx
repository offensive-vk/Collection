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