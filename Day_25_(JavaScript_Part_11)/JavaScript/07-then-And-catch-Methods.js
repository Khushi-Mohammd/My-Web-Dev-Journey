// Function definition: saveToDb
// This function simulates saving data to a database and returns a Promise.
function saveToDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1; // Generates a random internet speed between 1 and 10

    if (internetSpeed > 4) {
      resolve("Success : data was saved"); // If internet speed is greater than 4, resolve the Promise
    } else {
      reject("Failure : weak connection"); // If internet speed is 4 or less, reject the Promise
    }
  });
}

// Calling saveToDb function
saveToDb("Apna College")
  .then(() => {
    console.log("Promise was resolved"); // Executes when the Promise is fulfilled (resolved)
  })
  .catch(() => {
    console.log("Promise was rejected"); // Executes when the Promise is rejected
  });

/*
Explanation of .then() and .catch() with Promises in JavaScript:

1. When calling saveToDb(), it returns a Promise that may either resolve (success) or reject (failure).
2. .then() is used to handle the resolved state of a Promise.
   - If the operation inside the Promise is successful, the resolve() function is called.
   - The function inside .then() gets executed, allowing us to handle the success scenario.
3. .catch() is used to handle the rejected state of a Promise.
   - If the operation fails and reject() is called, the function inside .catch() executes.
   - This helps in handling errors properly.

4. How it works in this code:
   - If the internet speed is greater than 4, the Promise is resolved, and "Promise was resolved" is logged.
   - If the internet speed is 4 or less, the Promise is rejected, and "Promise was rejected" is logged.

5. Benefits of using .then() and .catch():
   - Makes asynchronous code more readable and manageable.
   - Avoids callback hell by structuring the code in a linear way.
   - Allows error handling in a centralized manner using .catch().

6. Example with success and failure messages:
   saveToDb("Apna College")
     .then((message) => {
       console.log(message); // Logs success message from resolve()
     })
     .catch((error) => {
       console.log(error); // Logs failure message from reject()
     });

Using .then() and .catch() ensures we handle both success and failure cases properly.
*/
