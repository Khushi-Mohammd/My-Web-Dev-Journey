/*
Q: Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.
The function should return a new array with the original array values and all of additional arguments doubled. 
*/

const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,                      // Spread operator copies all elements of 'arr' into the new array.
  ...args.map((el) => el * 2), // 'args' contains additional arguments. The 'map()' method doubles each value,
];                             // and the spread operator includes them in the final array.

console.log(doubleAndReturnArgs([1, 2, 3], 4, 4)); // [1, 2, 3, 8, 8]
console.log(doubleAndReturnArgs([2], 10, 4)); // [2, 20, 8]
