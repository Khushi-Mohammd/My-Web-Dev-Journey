// Function definition: saveToDb
// This function simulates saving data to a database and returns a Promise.
function saveToDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1; // Generates a random internet speed between 1 and 10

    if (internetSpeed > 4) {
      resolve("Success : data was saved"); // If internet speed is greater than 4, resolve the Promise with success message
    } else {
      reject("Failure : weak connection"); // If internet speed is 4 or less, reject the Promise with failure message
    }
  });
}

// Calling saveToDb function and handling results and errors properly
saveToDb("Apna College")
  .then((result) => {
    console.log("data1 saved"); // Logs when the first data is successfully saved
    console.log("Result of promise:", result); // Logs the success message from the resolve() function
    return saveToDb("Hello World"); // Returns a new Promise for the next operation
  })
  .then((result) => {
    console.log("data2 saved"); // Logs when the second data is successfully saved
    console.log("Result of promise:", result); // Logs the success message from resolve()
    return saveToDb("Shradha"); // Returns another Promise for the next operation
  })
  .then((result) => {
    console.log("data 3 saved"); // Logs when the third data is successfully saved
    console.log("Result of promise:", result); // Logs the success message from resolve()
  })
  .catch((error) => {
    console.log("Promise was rejected"); // Logs when any Promise is rejected
    console.log("Error of promise:", error); // Logs the failure message from reject()
  });

/*
Explanation of handling results and errors in Promises:

1. The first saveToDb("Apna College") call returns a Promise.
   - If resolved, it executes the first .then() block, logging "data1 saved".
   - The success message ("Success : data was saved") is logged as the result.
   - It then returns saveToDb("Hello World") to chain the next operation.

2. The second .then() executes if the second Promise is resolved.
   - Logs "data2 saved" and the success result.
   - Returns saveToDb("Shradha") to continue the sequence.

3. The third .then() executes if the third Promise is resolved.
   - Logs "data3 saved" and the success result.

4. If any of these Promises fail at any point (random internet speed ≤ 4):
   - The .catch() block executes.
   - Logs "Promise was rejected".
   - Logs the error message from reject(), which helps in debugging.

5. Benefits of logging results and errors:
   - Helps in debugging by checking success or failure reasons.
   - Ensures proper error handling instead of crashing the application.
   - Provides clarity about which operation succeeded or failed.

Conclusion:
- The `result` parameter in .then() contains the resolved value of the Promise.
- The `error` parameter in .catch() contains the rejected value (failure message).
- Logging these values helps in understanding how Promises work and identifying issues in asynchronous operations.
*/
