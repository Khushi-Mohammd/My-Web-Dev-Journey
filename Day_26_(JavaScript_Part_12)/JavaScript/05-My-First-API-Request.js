// Defining the URL of the API endpoint that provides random cat facts
let url = "https://catfact.ninja/fact";

// The fetch() function is used to make HTTP requests and returns a Promise
fetch(url)
  .then((res) => {
    // The .json() method is used to parse the response body as JSON
    return res.json(); // This returns another Promise that resolves to a JavaScript object
  })
  .then((data) => {
    // Logging the first fetched fact
    console.log("data1 :", data.fact);
    
    // Making another fetch request to get a new cat fact
    return fetch(url);
  })
  .then((res2) => {
    // Parsing the second response as JSON
    return res2.json();
  })
  .then((data2) => {
    // Logging the second fetched fact
    console.log("data2 :", data2.fact);
  })
  .catch((err) => {
    // Handling any errors that occur during the fetch requests
    console.log(err);
  });

// This is synchronous code, so it runs immediately before any of the asynchronous fetch requests complete
console.log("Hello"); // "Hello" will be logged first due to JavaScript's event loop handling async tasks separately
