# Find which two numbers of the given numbers list, when summed up , equal the target value, Returns the indices.

def find_indices_for_sum(nums, target):
    num_dict = {}

    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_dict:
            return [num_dict[complement], i]
        num_dict[num] = i

    return None  # No such pair found

# Example usage:
numbers_list = [2, 7, 11, 15]
target_value = 9
result_indices = find_indices_for_sum(numbers_list, target_value)

if result_indices:
    print(f"The indices of the two numbers that sum up to {target_value}: {result_indices}")
    print(f"The actual two numbers are : {numbers_list[result_indices[0]]},{numbers_list[result_indices[1]]} \n")
else:
    print("No such pair found.")
