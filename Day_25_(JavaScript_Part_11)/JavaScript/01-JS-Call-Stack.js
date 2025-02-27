// Function definition: hello()
// This function prints two messages to the console.
function hello() {
  console.log("Inside hello fnx"); // Logs when the function starts execution
  console.log("Hello"); // Logs a message
}

// Function definition: demo()
// This function logs a message and calls the hello() function.
function demo() {
  console.log("Calling hello fnx"); // Logs before calling hello()
  hello(); // Calls the hello() function
}

// Execution starts here
console.log("Calling demo fnx"); // Logs before calling demo()
demo(); // Calls the demo() function
console.log("Done"); // Logs after the demo() function execution is complete

/* 
  JavaScript Call Stack Explanation

  1. The program starts execution and logs "Calling demo fnx".
  2. The demo() function is called and pushed onto the call stack.
  3. Inside demo(), "Calling hello fnx" is logged.
  4. The hello() function is called and pushed onto the call stack.
  5. Inside hello(), "Inside hello fnx" and "Hello" are logged.
  6. After hello() finishes execution, it is popped from the call stack.
  7. Execution returns to demo(), which then finishes execution and is popped from the call stack.
  8. Finally, "Done" is logged, and the program completes execution.

  The JavaScript call stack works on a "Last In, First Out" (LIFO) principle, meaning the last function pushed onto the stack is executed first and removed once completed.
*/
