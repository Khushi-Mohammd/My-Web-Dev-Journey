// Select the first <h1> element from the document
let h1 = document.querySelector("h1");

// Select the first <input> element from the document
let inp = document.querySelector("input");

// "mouseout" event: triggers when the mouse pointer leaves the h1 element
h1.addEventListener("mouseout", function () {
  console.log("Mouse is out"); // Logs a message when the mouse moves away from the h1 element
});

// "keypress" event: triggers when a key is pressed inside the input field
inp.addEventListener("keypress", function () {
  console.log("Key is pressed"); // Logs a message each time a key is pressed inside the input field
});

// "scroll" event: triggers when the user scrolls the webpage
document.addEventListener("scroll", function () {
  console.log("Scrolled"); // Logs a message whenever the user scrolls the page up or down
});

// "load" event: triggers when the entire webpage (including all resources like images, CSS, etc.) is fully loaded
window.addEventListener("load", function () {
  console.log("The page is loaded"); // Logs a message when the webpage has finished loading
});
