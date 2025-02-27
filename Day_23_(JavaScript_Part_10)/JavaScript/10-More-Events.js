// Select the form element
// let form = document.querySelector("form");

// Add a submit event listener to the form
// form.addEventListener("submit", function (event) {
//   event.preventDefault(); // Prevents the form from reloading the page
// });

// Select the input field with the id "user"
// let user = document.querySelector("#user");

// "change" event listener on the input field
// user.addEventListener("change", function () {
//   console.log("change event"); // Logs when the user moves away from the input field after modifying it
//   console.log(`Final value : ${this.value}`); // Logs the final value of the input field
// });

// "input" event listener on the input field
// user.addEventListener("input", function () {
//   console.log("input event"); // Logs whenever the user types or deletes a character
//   console.log(`Final value : ${this.value}`); // Logs the real-time value of the input field
// });

//======================================================================================//

// Select the input field with id "text"
let inp = document.querySelector("#text");

// Select the paragraph element
let p = document.querySelector("p");

// "input" event listener on the input field
inp.addEventListener("input", function () {
  console.log(inp.value); // Logs the real-time value of the input field
  p.innerText = inp.value; // Updates the paragraph text to match the input field value in real-time
});
