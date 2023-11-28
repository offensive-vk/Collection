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
