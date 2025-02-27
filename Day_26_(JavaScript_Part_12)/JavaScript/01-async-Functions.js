// An async function always returns a promise.
// If the function returns a value, the promise is resolved with that value.
// If the function throws an error, the promise is rejected with that error.
async function greet() {
  // Uncommenting the below line will throw an error and the promise will be rejected
  // throw "404 page not found";
  return "Hello!"; // This resolves the promise with the value "Hello!"
}

// Calling the async function greet, which returns a promise
greet()
  .then((result) => {
    console.log("Promise was resolved");
    console.log("Result was :", result); // Expected output: "Hello!"
  })
  .catch((error) => {
    console.log("Promise was rejected with error :", error);
  });

//=====================================================================//

// Another example of an async function
let demo = async () => {
  return 5; // This function returns a promise that resolves with the value 5
};

console.log(demo()); // Logs a Promise object resolving to 5
