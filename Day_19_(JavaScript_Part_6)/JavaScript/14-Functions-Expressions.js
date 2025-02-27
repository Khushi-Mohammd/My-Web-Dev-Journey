// Function expression to calculate sum of two numbers
let sum = function (a, b) { 
  return a + b; // Returns the sum of a and b
};

console.log(sum(1, 2)); // Outputs: 3

// Function expression assigned to 'hello' variable
let hello = function () {
  console.log("Hello"); // Prints "Hello" to the console
};

hello(); // Calls the 'hello' function, outputs: Hello

// Reassigning 'hello' to a new function expression
hello = function () {
  console.log("Namaste"); // Prints "Namaste" to the console
};

hello(); // Calls the updated 'hello' function, outputs: Namaste
