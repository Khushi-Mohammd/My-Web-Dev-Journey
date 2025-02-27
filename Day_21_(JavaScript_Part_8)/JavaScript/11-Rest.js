//=========================================== Rest Parameter ===========================================//

function sum(...args) {
  // The rest parameter (...args) gathers all arguments passed into the function into an array.
  // 'args' now holds all the function arguments as an array.
  
  return args.reduce((sum, el) => sum + el);
  // The 'reduce()' method is used to sum all elements in the 'args' array.
}

console.log(sum(8, 2, 5, 9, 2, 3, 9)); 
// Calls the 'sum' function with multiple arguments.
// The output will be the sum: 8 + 2 + 5 + 9 + 2 + 3 + 9 = 38.


//============================== Rest Parameter with Additional Argument ===============================//

function min(msg, ...args) {
  // The first parameter 'msg' stores the first argument passed to the function.
  // The rest parameter '...args' collects all remaining arguments into an array.
  
  console.log(msg); 
  // Logs the first argument, which is a message.

  return args.reduce((min, el) => {
    // The 'reduce()' method is used to find the minimum value in the 'args' array.
    return min < el ? min : el;
  });
}

console.log(min("Hello", 4, 7, 8, 4, 67, 445, 75, 75, 43, 1));
// Logs "Hello" (first argument) and returns the smallest number from the rest: 1.


//======================================= The 'arguments' Object =======================================//

function arg() {
  console.log(arguments); 
  // 'arguments' is an array-like object that stores all arguments passed to the function.
  // Unlike '...args', it is not an actual array, so it lacks array methods like 'reduce()'.
}

arg(1, 5, 9, 3); 
// Calls the 'arg' function with multiple arguments.
// Logs the 'arguments' object: { 0: 1, 1: 5, 2: 9, 3: 3 }


//========================= Difference Between Rest Parameter and 'arguments' ==========================//

// function sum() {
//   return arguments.reduce((sum, el) => sum + el);
//   // This would throw an error because 'arguments' is not a real array and does not have 'reduce()'.
//   // To use array methods, convert 'arguments' into an array first:
//   // return Array.from(arguments).reduce((sum, el) => sum + el);
// }

// console.log(sum(1, 5)); 
// Uncommenting this would cause an error because 'arguments' is not an array.
