// Declare an array 'num' containing numbers from 1 to 7
const num = [1, 2, 3, 4, 5, 6, 7];

// Log the array to the console
console.log(num);

// Use the reduce() method to calculate the sum of all elements in the array
let finalVal = num.reduce((res, el) => res + el);

console.log(finalVal); // Log the total sum of the array elements

/* 
Explanation of the reduce() method:
- The reduce() function iterates over each element of the array, accumulating a result.
- It takes a callback function with two parameters:
  1. 'res' (accumulator): Holds the running total after each iteration.
  2. 'el' (current element): Represents the current value being processed.
- Since no initial value is provided, 'res' starts as the first element (1), 
  and iteration begins from the second element.
- The function adds 'el' to 'res' in each iteration, ultimately summing all elements.
- Final result: 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28
*/
