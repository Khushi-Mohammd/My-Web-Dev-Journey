// Selecting the button element from the document
let btn = document.querySelector("button");

// Adding a click event listener to the button
btn.addEventListener("click", async function () {
  // Calling the async function getFacts() and waiting for the returned fact
  let fact = await getFacts();

  // Selecting the paragraph element and updating its text with the fetched fact
  let p = document.querySelector("p");
  p.innerText = fact;
});

// Defining the URL of the API endpoint that provides random cat facts
let url = "https://catfact.ninja/fact";

// Async function to fetch cat facts using axios
async function getFacts() {
  try {
    // Using axios.get() to send a GET request to the API
    // Axios is a promise-based HTTP client that simplifies fetching data
    let res = await axios.get(url);

    // Extracting the fact from the response data
    let fact = res.data.fact;
    return fact;
  } catch (error) {
    // Handling any errors that occur during the request
    console.log(error);
    return "No fact found"; // Returning a default message in case of an error
  }
}
