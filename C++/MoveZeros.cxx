/**
 * Given an array of integers, write a C++ function to move all zeros to the end of the array while maintaining the relative order of the non-zero elements.
*/

#include <iostream>
#include <vector>

void moveZeros(std::vector<int>& nums) {
    int nonZeroIndex = 0;
    
    // Move non-zero elements to the front of the array
    for (int i = 0; i < nums.size(); ++i) {
        if (nums[i] != 0) {
            nums[nonZeroIndex++] = nums[i];
        }
    }
    
    // Fill the remaining elements with zeros
    while (nonZeroIndex < nums.size()) {
        nums[nonZeroIndex++] = 0;
    }
}

int main() {
    std::vector<int> nums = {0, 1, 0, 3, 12};
    std::cout << "Input: ";
    for (int num : nums) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
    
    moveZeros(nums);
    
    std::cout << "Output: ";
    for (int num : nums) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
    
    return 0;
}
