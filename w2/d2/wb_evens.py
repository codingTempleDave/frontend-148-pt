"""
Create a function that receives a list of whole numbers as a parameter
and returns a list with all the even numbers from the received list.

Example:
Input: [2, 7, 10, 11, 12]
Output: [2, 10, 12]

"""

def findEven(lst):
    evens = []
    for num in lst:
        if num % 2 == 0:
            evens.append(num)
    return evens


def findEvens(lst):
    return [num for num in lst if num % 2 == 0]

print(findEven([2,4,1,7,8,9]))
print(findEvens([2,4,1,7,8,9]))