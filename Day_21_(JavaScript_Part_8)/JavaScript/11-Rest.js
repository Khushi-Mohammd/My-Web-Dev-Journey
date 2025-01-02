function sum(...args) {
  // The rest parameter (...args) collects all arguments passed to the function into an array.
  // 'args' is now an array containing all the arguments.
  return args.reduce((sum, el) => sum + el);
  // Use the 'reduce()' method to sum up all elements in the 'args' array.
}

console.log(sum(8, 2, 5, 9, 2, 3, 9)); 
// Logs the sum of the arguments: 8 + 2 + 5 + 9 + 2 + 3 + 9 = 38.


// This commented-out function calculates the minimum value using 'reduce()' without the rest parameter.
// function min(...args) {
//   return args.reduce((min, el) => {
//     if (min < el) {
//       return min;
//     } else {
//       return el;
//     }
//   });
// }


function min(msg, ...args) {
  // 'msg' captures the first argument. The rest of the arguments are collected into the 'args' array.
  console.log(msg); 
  // Logs the message passed as the first argument.
  return args.reduce((min, el) => {
    // Iterates through the 'args' array to find the minimum value.
    if (min < el) {
      return min;
    } else {
      return el;
    }
  });
}

console.log(min("Hello", 4, 7, 8, 4, 67, 445, 75, 75, 43, 1));
// Logs "Hello" (first argument) and returns the smallest number among the rest of the arguments: 1.


function arg() {
  console.log(arguments); 
  // The 'arguments' object is an array-like object (not an actual array) 
  // that holds all the arguments passed to the function.
}

arg(1, 5, 9, 3); 
// Logs the 'arguments' object: { 0: 1, 1: 5, 2: 9, 3: 3 }
// 'arguments' behaves like an array but does not have array methods like 'reduce()'.


// This commented-out function shows how 'arguments' can be used to perform operations:
// function sum() {
//   return arguments.reduce((sum, el) => sum + el);
//   // This would throw an error because 'arguments' is not an actual array.
//   // To use array methods, it must be converted to an array first:
//   // Array.from(arguments).reduce((sum, el) => sum + el);
// }

// console.log(sum(1, 5)); 
// Would throw an error if uncommented because 'arguments' is not an array.
