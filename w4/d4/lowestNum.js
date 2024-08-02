/*

Find Smallest Number  - (Without min)
Create a function that given an array of numbers (non-sorted) find the lowest
number in the array and return it.

Example Input: [50,30,4,2,11,0]
Example Output: 0

Example Input 2: [40,3,4,2]
Example Output 2: 2
*/


// JS

function lowestNumber(arr){
  const sortedNumbers = arr.sort((a, b) => a - b);
  console.log(sortedNumbers[0]);
}

lowestNumber([40, 100, 1, 5, 25, 10]);

