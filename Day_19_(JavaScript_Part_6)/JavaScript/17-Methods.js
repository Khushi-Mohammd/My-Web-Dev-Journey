// let calculator = {
//   add: function(a, b) {
//     return a + b;
//   },
//   sub: function(a, b) {
//     return a - b;
//   },
//   mul: function(a, b) {
//     return a * b;
//   }
// };

// Shorthand method to create object functions
// Creating an object 'calculator' that stores multiple functions
let calculator = {
  // Storing 'add' function in object (shorthand method)
  add(a, b) {
    return a + b; // Returns sum of a and b
  },

  // Storing 'sub' function in object
  sub(a, b) {
    return a - b; // Returns difference of a and b
  },

  // Storing 'mul' function in object
  mul(a, b) {
    return a * b; // Returns product of a and b
  }
};

// Calling object functions using dot notation
console.log(calculator.add(9, 3)); // Outputs: 12
console.log(calculator.sub(9, 3)); // Outputs: 6
console.log(calculator.mul(9, 3)); // Outputs: 27
