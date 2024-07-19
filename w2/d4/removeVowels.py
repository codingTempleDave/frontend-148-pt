"""
- Write a function that will remove all vowels from a given string.
- The function should return a string.

Example:
Input: ‘Joel’
Output: ‘Jl’
"""


def rem_vowel(str):
    vowels = ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U')
    for letter in str:
        if letter in vowels:
            str = str.replace(letter, "")
    return str


def remove_vowels(word):
    return ''.join([char for char in word if char.lower() not in 'aeiou'])


print(rem_vowel("ABCDEFGHIJKLMNOP"))

print(remove_vowels("ABCDEFGHIJKLMNOP"))
