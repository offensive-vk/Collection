# Finds the one unique value from list of numbers.

def find_unique_value(numbers):
    occurrences = {}

    for num in numbers:
        if num in occurrences:
            occurrences[num] += 1
        else:
            occurrences[num] = 1

    for key, value in occurrences.items():
        if value == 1:
            return key

# Example usage:
numbers_list = [1, 2, 3, 4, 5, 4, 3, 2, 1, 6, 7, 8, 9, 8, 7, 6]
unique_value = find_unique_value(numbers_list)

print(f"The unique value is: {unique_value}")
