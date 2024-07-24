"""
Write a function that prints all numbers 1 to n, n is passed in as a parameter
- If the number is divisible by 3, print ‘Fizz’ instead of the number
- If the number is divisible 5, print ‘Buzz’ instead of the number
- If the number is divisible by both 3 and 5, print ‘FizzBuzz’ instead of the number
- Otherwise, simply print the number
"""

def fizz_buzz(n):
    for i in range(1, n + 1):
        if i % 3 == 0 and i % 5 == 0:
            print('FizzBuzz')
        elif i % 3 == 0:
            print('Fizz')
        elif i % 5 == 0:
            print('Buzz')
        else:
            print(i)

# Example usage
fizz_buzz(15)