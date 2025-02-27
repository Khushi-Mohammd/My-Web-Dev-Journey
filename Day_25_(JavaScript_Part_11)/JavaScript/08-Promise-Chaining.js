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

//===========================================================================//

/*
// Example 1: Nested .then() calls (Not recommended)
saveToDb("Apna College")
  .then(() => {
    console.log("data1 saved");
    saveToDb("Hello World").then(() => {
      console.log("data2 saved");
    });
  })
  .catch(() => {
    console.log("Promise was rejected");
  });
*/

/*
Explanation:
1. The first saveToDb call returns a Promise.
2. If resolved, it logs "data1 saved" and calls saveToDb again for "Hello World".
3. The second saveToDb call is inside another .then(), making it nested.
4. If any of these Promises reject, .catch() will handle the error.
5. However, this approach leads to unnecessary nesting, making it harder to read and maintain.
*/

//===========================================================================//

// Example 2: Chaining .then() calls (Recommended)
saveToDb("Apna College")
  .then(() => {
    console.log("data1 saved");
    return saveToDb("Hello World"); // Returning a new Promise to chain the next .then()
  })
  .then(() => {
    console.log("data2 saved");
    return saveToDb("Shradha"); // Returning another Promise for the next .then()
  })
  .then(() => {
    console.log("data3 saved");
  })
  .catch(() => {
    console.log("Promise was rejected");
  });

/*
Explanation of .then() chaining:

1. The first saveToDb call returns a Promise.
2. If resolved, it logs "data1 saved" and returns the next Promise from saveToDb("Hello World").
3. Since we return the Promise, the next .then() waits for it to resolve before executing.
4. If resolved, it logs "data2 saved" and returns another Promise from saveToDb("Shradha").
5. The next .then() executes when the third Promise is resolved and logs "data3 saved".
6. If any of these Promises reject, the .catch() at the end will handle the error.

Advantages of .then() chaining:
- Eliminates unnecessary nesting (compared to Example 1).
- Improves readability and maintainability.
- Each .then() handles one step, making the code more structured.

Conclusion:
Chaining .then() is the preferred way to handle multiple asynchronous operations in sequence, making code cleaner and easier to debug.
*/
