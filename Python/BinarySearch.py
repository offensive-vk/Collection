def binary_search(numbers, target):
    left, right = 0, len(numbers) - 1

    while left <= right:
        mid = (left + right) // 2

        if numbers[mid] == target:
            return mid  # Target found, return the index
        elif numbers[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1  # Target not found

# Example usage:
sorted_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
target_value = 6

result = binary_search(sorted_numbers, target_value)

if result != -1:
    print(f"Target {target_value} found at index {result}.")
else:
    print(f"Target {target_value} not found in the list.")
