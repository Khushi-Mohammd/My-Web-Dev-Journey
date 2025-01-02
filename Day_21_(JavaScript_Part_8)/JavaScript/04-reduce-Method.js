// Declare an array 'num' with numbers from 1 to 7
const num = [1, 2, 3, 4, 5, 6, 7];

// Log the array to the console
console.log(num);

// Use the reduce method to calculate the sum of all elements in the array
// 'reduce' processes each element of the array, combining it with an accumulator 'res'
let finalVal = num.reduce((res, el) => res + el);

// Explanation of the reduce method:
// - 'res' is the accumulator, which stores the accumulated result after each iteration.
// - 'el' is the current element of the array being processed.
// - Initially, 'res' is set to the first element of the array (if no initial value is provided).
// - In this case, each element of 'num' is added to 'res', resulting in the sum of all elements.

console.log(finalVal); // Log the final result (sum of all numbers in the array)
