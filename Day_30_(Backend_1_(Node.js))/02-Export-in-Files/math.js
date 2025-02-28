/*
const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const g = 9.8;
const PI = 3.14;

// Creating an object that holds all the functions and constants
let obj = {
  sum: sum,
  mul: mul,
  g: g,
  PI: PI,
};

// Exporting the object so that other files can use it
// 'module.exports' is an object that allows us to export functions, variables, or objects from a module
module.exports = obj;
*/

//======================== Second Method ==========================//

/*
const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const g = 9.8;
const PI = 3.14;

// Directly exporting an object containing all functions and constants
module.exports = {
  sum: sum,
  mul: mul,
  g: g,
  PI: PI,
};
*/

//======================== Third Method ==========================//

/*
module.exports.sum = (a, b) => a + b;
module.exports.mul = (a, b) => a * b;
module.exports.g = 9.8;
module.exports.PI = 3.14;
*/

//======================== Shorthand Method ==========================//

// 'exports' is a shortcut for 'module.exports'
exports.sum = (a, b) => a + b;
exports.mul = (a, b) => a * b;
exports.g = 9.8;
exports.PI = 3.14;

exports = 5; // This is not valid
