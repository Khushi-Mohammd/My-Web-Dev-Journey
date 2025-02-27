// Defining the API endpoint URL
let url = "https://dog.ceo/api/breeds/image/random"; // API endpoint to get a random dog image

// Selecting the button element from the document
let btn = document.querySelector("button");

// Adding a click event listener to the button
btn.addEventListener("click", async function () {
  // Calling the async function getImage() and waiting for the returned image URL
  let link = await getImage();

  // Selecting the img element and updating its src attribute with the fetched image link
  let img = document.querySelector("img");
  img.setAttribute("src", link);
});

// Async function to fetch a random dog image using axios
async function getImage() {
  try {
    // Using axios.get() to send a GET request to the dog image API
    let res = await axios.get(url);

    // Returning the image URL from the API response
    return res.data.message;
  } catch (error) {
    // Handling any errors that occur during the request
    console.log(error);
    return "/"; // Returning a fallback value in case of an error
  }
}
