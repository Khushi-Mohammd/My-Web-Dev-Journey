// The 'process' object in Node.js provides information and control over the current Node.js process.
// 'process.argv' is an array that contains command-line arguments passed to the Node.js script.

// Printing the 'process.argv' array to see all command-line arguments
// console.log(process.argv);

let args = process.argv; // Storing command-line arguments in the 'args' variable

// Loop starts from index 2 because the first two elements in 'process.argv' are:
// Index 0 -> Node.js executable path
// Index 1 -> The file path of the script being executed
for (let i = 2; i < args.length; i++) {
  console.log("Hello to", args[i]); // Printing "Hello to" followed by each command-line argument
}
