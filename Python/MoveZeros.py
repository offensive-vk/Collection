# Create a function that takes a list of numbers as parameters and returns the list after moving all the zeros of the list to the end of the list , while maintaining the order of the other numbers.

def move_zeros_to_end(lst):
    # Separate non-zero and zero elements
    non_zeros = [num for num in lst if num != 0]
    zeros = [num for num in lst if num == 0]

    # Combine non-zero and zero lists
    result = non_zeros + zeros

    return result

# Example usage:
input_list = [0, 2, 0, 3, 4, 0, 5, 6]
result_list = move_zeros_to_end(input_list)
print(result_list)
