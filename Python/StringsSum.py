# write a function that Return the sum of two integer values represented as strings, as a single string value.

def string_sum(num1, num2):
    # Convert the string values to integers
    integer1 = int(num1)
    integer2 = int(num2)

    # Calculate the sum
    sum = integer1 + integer2

    # Convert the sum back to a string
    sum_string = str(sum)

    # Return the sum as a string
    return sum_string

print(string_sum("70", "70"))