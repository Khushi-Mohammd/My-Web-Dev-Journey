// First method: Using parentheses for implicit return
// const sum = (a, b) => (a + b);
  
// Second method: Writing arrow functions in a more concise way
// When we need to return a value, we can omit the "return" keyword and curly braces `{}`
// The function will automatically return the result (this is called **implicit return**).

const sum = (a, b) => a + b; // Implicitly returns a + b

// Another example of implicit return
const cube = (n) => n * n * n; // Returns the cube of 'n'

const pow = (a, b) => a ** b; // Returns 'a' raised to the power of 'b'

// Calling the functions
console.log(sum(18, 5)); // Outputs: 23
console.log(cube(5)); // Outputs: 125
console.log(pow(2, 3)); // Outputs: 8
