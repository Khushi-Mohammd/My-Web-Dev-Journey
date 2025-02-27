// Function definition: saveToDb
// Simulates saving data to a database based on random internet speed
// Accepts three parameters:
// - data: The data to be saved
// - success: A callback function to execute on successful saving
// - failure: A callback function to execute if saving fails
function saveToDb(data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1; // Generates a random internet speed between 1 and 10

  if (internetSpeed > 4) {
    success(); // Calls success callback if internet speed is greater than 4
  } else {
    failure(); // Calls failure callback if internet speed is 4 or less
  }
}

// Calling saveToDb function
saveToDb(
  "Apna College",
  () => {
    console.log("Success : data was saved"); // Logs success message

    // Calling saveToDb again inside success callback
    saveToDb(
      "Hello World",
      () => {
        console.log("Success2: data2 saved"); // Logs second success message

        // Another nested call to saveToDb
        saveToDb(
          "Shradha",
          () => {
            console.log("Success3: data3 saved"); // Logs third success message
          },
          () => {
            console.log("Failure3: weak connection"); // Logs failure message for third attempt
          }
        );
      },
      () => {
        console.log("Failure2: data not saved"); // Logs failure message for second attempt
      }
    );
  },
  () => {
    console.log("Failure : weak connection, data was not saved"); // Logs failure message for first attempt
  }
);

/*
Explanation of Callback Hell in JavaScript:

1. The saveToDb function uses callbacks to handle success and failure scenarios.
2. When data is successfully saved, another saveToDb call is made inside the success callback.
3. This leads to nested callback functions, forming a "pyramid-like" structure.
4. If more saveToDb calls are added, the nesting becomes deeper, making the code difficult to read and manage.
5. This excessive nesting is called "Callback Hell."

Problems with Callback Hell:
- The code becomes harder to read and maintain.
- Debugging is difficult due to deeply nested functions.
- Adding new functionality requires modifying multiple levels of nested callbacks.

Solutions to Callback Hell:
- Use Promises to flatten the structure.
- Use async/await for a more readable, sequential execution style.

By replacing callbacks with Promises or async/await, we can write cleaner and more manageable asynchronous code.
*/
