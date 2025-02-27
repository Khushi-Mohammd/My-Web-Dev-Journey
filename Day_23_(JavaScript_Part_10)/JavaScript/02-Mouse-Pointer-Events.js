// Select the first button element from the document
// let btn = document.querySelector("button");
// console.dir(btn); // Logs the properties and methods of the button object in the console

// Event handling using the onclick property
// btn.onclick = function () {
//   alert("button was clicked"); // Displays an alert when the button is clicked
// }

// Function to display an alert message
function sayHello() {
  alert("hello"); // This function will be used as an event handler
}

// Assigning the function reference to the onclick property
// btn.onclick = sayHello; // When the button is clicked, sayHello function is executed

// ===================================================== //

// Selecting all button elements from the document
// let btns = document.querySelectorAll("button");

// Iterating over all selected buttons and assigning the same event handler
// for (btn of btns) {
//   btn.onclick = sayHello; // All buttons will trigger the sayHello function when clicked
// }

// ===================================================== //

// Selecting all button elements from the document
let btns = document.querySelectorAll("button");

// Iterating over all buttons to assign multiple event handlers
for (btn of btns) {
  btn.onclick = sayHello; // Assigns the sayHello function to the onclick event of each button
  
  btn.onmouseenter = function () {
    console.log("You entered a button"); // Logs a message to the console when the mouse enters the button area
  };

  console.dir(btn); // Logs the button element with all its properties and methods to the console
}
