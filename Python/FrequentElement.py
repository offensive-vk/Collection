# Returns the most frequent element from the numbers list. The time complexity should be better than 0 (n logn).

def find_most_frequent(nums):
    # Create a dictionary to store the frequency of each element
    frequency_map = {}

    # Iterate through the list and update the frequency count for each element
    for num in nums:
        if num not in frequency_map:
            frequency_map[num] = 0
        frequency_map[num] += 1

    # Initialize variables for tracking the most frequent element and its frequency
    most_frequent_element = None
    max_frequency = 0

    # Iterate through the frequency map to find the element with the highest frequency
    for num, frequency in frequency_map.items():
        if frequency > max_frequency:
            max_frequency = frequency
            most_frequent_element = num

    return most_frequent_element

# Example 1: Find the most frequent element in a list of integers
nums = [1, 2, 3, 4, 1, 2, 1]
most_frequent_element = find_most_frequent(nums)
print("Most frequent element:", most_frequent_element)  # Output: 1

# Example 2: Find the most frequent element in a list of strings
words = ["apple", "banana", "orange", "apple", "grape"]
most_frequent_word = find_most_frequent(words)
print("Most frequent word:", most_frequent_word)  # Output: apple
