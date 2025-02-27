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

// Explanation of JavaScript Call Stack

// 1. The program starts execution and calls the three() function.
// 2. The three() function is pushed onto the call stack.
// 3. Inside three(), the two() function is called, so it is pushed onto the stack.
// 4. Inside two(), the one() function is called twice, so each call to one() is pushed onto the stack.
// 5. The first call to one() executes and returns 1, then it is removed from the stack.
// 6. The second call to one() executes and returns 1, then it is removed from the stack.
// 7. The two() function returns 2 (1 + 1) and is removed from the stack.
// 8. Back in three(), another call to one() happens, so it is pushed onto the stack.
// 9. The one() function executes, returns 1, and is removed from the stack.
// 10. The value (2 from two() + 1 from one()) is stored in ans.
// 11. The console.log statement executes and prints 3.
// 12. The three() function completes execution and is removed from the stack.

// The JavaScript call stack follows the "Last In, First Out" (LIFO) rule, meaning the last function added is executed first and removed after completion.
