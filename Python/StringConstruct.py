# Check if the characters in the letters string can be used ti construct any of the word strings without repeating any letters. Returns true if it can be constructed and false otherwise.

def canConstruct(letters, words):
    for word in words:
        availableLetters = set(letters)
        for letter in word:
            if letter not in availableLetters:
                return False
            else:
                availableLetters.remove(letter)
    return True

letters = "ABCDEFGH"
words = ["ABC", "DEF", "GHI"]  # True
print(canConstruct(letters, words))

letters = "ABCD"
words = ["ABCFG", "ABCDE", "EFGH"]  # False
print(canConstruct(letters, words))

letters = "ASDFG"
words = ["ASD", "FG", "GFD"]  # False
print(canConstruct(letters, words))

print(canConstruct("abnnaan", "banana"))