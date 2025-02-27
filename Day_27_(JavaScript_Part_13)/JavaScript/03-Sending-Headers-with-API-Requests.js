// Defining the API endpoint URL to fetch a random joke
const url = "https://icanhazdadjoke.com/";

// Async function to fetch a joke
async function getJoke() {
  try {
    // Defining configuration object with headers
    // The 'Accept' header specifies the expected response format
    // 'Text/plain' ensures that the joke is returned as plain text instead of JSON
    let config = { headers: { Accept: "Text/plain" } };

    // Using axios.get() to send a GET request with the headers
    let res = await axios.get(url, config);

    // Logging the joke received from the API response
    console.log(res.data);
  } catch (error) {
    // Handling any errors that occur during the request
    console.log(error);
  }
}

// Calling the function to fetch and display a joke
getJoke();
