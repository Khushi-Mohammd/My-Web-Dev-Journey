// Defining the URL of the API endpoint that provides random cat facts
let url = "https://catfact.ninja/fact";

// Async function to fetch cat facts using async/await
async function getFacts() {
  try {
    // Using await with fetch() to wait for the response before proceeding
    let res = await fetch(url);
    // Using await with .json() to parse the response as JSON
    let data = await res.json();
    console.log(data.fact); // Logging the first fetched fact

    // Making another fetch request and waiting for the response
    let res2 = await fetch(url);
    let data2 = await res2.json(); // Parsing the second response as JSON
    console.log(data2.fact); // Logging the second fetched fact
  } catch (error) {
    // Handling any errors that occur during the fetch requests
    console.log(error);
  }

  // This code runs after the asynchronous operations are completed or an error occurs
  console.log("Hello");
}

// Calling the async function, which returns a Promise
console.log(getFacts()); // The function call starts execution but logs a Promise since it's asynchronous
