// Importing the 'math.js' module using require()
// 'require()' is a built-in function in Node.js that is used to include external modules.
// It loads the exported values from 'math.js' into the 'math' object.
const math = require("./math"); 

// Printing the 'math' object to see all exported values from 'math.js'
console.log(math);

// Calling the 'sum' function from the 'math' module and printing the result
console.log(math.sum(4, 6)); // Output: 10

// Calling the 'mul' function from the 'math' module and printing the result
console.log(math.mul(2, 5)); // Output: 10

// Accessing the exported 'g' constant from the 'math' module
console.log(math.g); // Output: 9.8

// Accessing the exported 'PI' constant from the 'math' module
console.log(math.PI); // Output: 3.14
