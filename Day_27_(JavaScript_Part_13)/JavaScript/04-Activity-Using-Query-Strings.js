// Defining the API endpoint to fetch universities based on the country name
const url = "http://universities.hipolabs.com/search?name=";

// Selecting the button element from the document
let btn = document.querySelector("button");

// Adding a click event listener to the button
btn.addEventListener("click", async () => {
  // Getting the country name from the input field
  let country = document.querySelector("input").value;
  console.log(country); // Logging the country name

  // Fetching the list of universities based on the country input
  let colArray = await getColleges(country);

  // Displaying the fetched universities in the list
  show(colArray);
});

// Function to display the fetched universities in a list
function show(colArray) {
  let list = document.querySelector("#list"); // Selecting the unordered list element
  list.innerText = ""; // Clearing any existing list items

  // Iterating over the array of universities and adding them to the list
  for (col of colArray) {
    console.log(col.name); // Logging each university name

    let li = document.createElement("li"); // Creating a new list item
    li.innerText = col.name; // Setting the text of the list item
    list.appendChild(li); // Appending the list item to the unordered list
  }
}

// Async function to fetch universities based on the country name
async function getColleges(country) {
  try {
    // Using axios.get() to send a GET request to the API with the country name
    let res = await axios.get(url + country);
    return res.data; // Returning the list of universities from the response
  } catch (error) {
    // Handling any errors that occur during the request
    console.log("Error :", error);
  }
}
