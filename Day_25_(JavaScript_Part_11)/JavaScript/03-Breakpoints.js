// Function definition: one()
// This function returns the number 1.
function one() {
  return 1;
}

// Function definition: two()
// This function calls the one() function twice and returns their sum.
function two() {
  return one() + one();
}

// Function definition: three()
// This function calls the two() function, adds the result to one(), and logs the final result.
function three() {
  let ans = two() + one(); // Calls two() and one(), then adds their results
  console.log(ans); // Logs the final result
}

// Execution starts here
three(); // Calls the three() function

// Explanation of Breakpoints in JavaScript

// Breakpoints are used in debugging to pause the execution of JavaScript at a specific line of code.
// This allows developers to inspect variable values, function calls, and the program's flow.

// How to Use Breakpoints:
// 1. Open the browser's Developer Tools (press F12 or right-click and select "Inspect").
// 2. Navigate to the "Sources" tab.
// 3. Locate this JavaScript file in the file navigator.
// 4. Click on the line number where you want to pause execution (for example, on the line with console.log(ans);).
// 5. Reload the page or execute the script again.
// 6. The execution will pause at the breakpoint, allowing you to inspect the program's state in the Debugger panel.

// Example Usage in This Code:
// - Setting a breakpoint inside the one() function will let you see when it is called and returned.
// - Setting a breakpoint in two() will show how the one() function is executed twice.
// - Setting a breakpoint at console.log(ans); will allow you to inspect the value of ans before it is printed.

// Breakpoints help in debugging by allowing step-by-step execution and observing how data changes during runtime.
