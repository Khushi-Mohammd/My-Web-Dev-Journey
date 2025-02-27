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

// Calling saveToDb function and logging the returned Promise object
console.log(saveToDb("Apna College"));

/*
Explanation of Promise in JavaScript:

1. A Promise is an object in JavaScript used to handle asynchronous operations.
2. It represents a value that may be available now, in the future, or never.
3. A Promise has three possible states:
   - Pending: The initial state, before the operation completes.
   - Fulfilled: The operation was successful, and the resolve() function is called.
   - Rejected: The operation failed, and the reject() function is called.

4. In this code:
   - The saveToDb function returns a Promise.
   - Inside the Promise, internet speed is randomly generated.
   - If the speed is above 4, resolve() is called, marking the Promise as fulfilled.
   - Otherwise, reject() is called, marking the Promise as rejected.

5. Right now, calling saveToDb("Apna College") only returns a Promise object.
   - To handle the resolved or rejected state, we need to use .then() for success and .catch() for failure.

   Example of using .then() and .catch():
   saveToDb("Apna College")
     .then((message) => {
       console.log(message); // Logs success message
     })
     .catch((error) => {
       console.log(error); // Logs failure message
     });

6. Promises help avoid Callback Hell by making asynchronous code more readable and manageable.
7. In modern JavaScript, async/await is often used with Promises for an even cleaner approach.
*/
