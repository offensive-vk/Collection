import itertools

def print_permutations(string):
    # Generate all permutations of the string
    permutations = itertools.permutations(string)
    
    # Print each permutation
    for permutation in permutations:
        print(''.join(permutation))

# Example usage
s = "abc"
print_permutations(s)

# Explanation of permutation concept
# A permutation is an arrangement of elements in a specific order.
# For example, given the string "abc", the permutations are:
# abc, acb, bac, bca, cab, cba