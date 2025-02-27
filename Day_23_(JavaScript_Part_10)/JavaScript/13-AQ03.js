// Select the first <h1> element from the document
let h1 = document.querySelector("h1");

// Select the first <input> element from the document
let inp = document.querySelector("input");

// Add an "input" event listener to the input field
inp.addEventListener("input", function () {
  let userInp = inp.value; // Store the current input value entered by the user

  let filteredInp = ""; // Initialize an empty string to store the filtered text

  // Loop through each character in the input value
  for (char of userInp) {
    // Check if the character is an uppercase letter, lowercase letter, or a space
    if (char >= "a" && char <= "z" || char >= "A" && char <= "Z" || char == " ") {
      filteredInp += char; // If valid, add it to the filtered string
    }
  }

  inp.value = filteredInp; // Update the input field with only valid characters
  h1.innerText = inp.value; // Display the filtered input text inside the <h1> element
});
