// Select the first <p> (paragraph) element from the document
let para = document.querySelector("p");

// Add a click event listener to the paragraph
para.addEventListener("click", function () {
  console.log("para was clicked"); // Logs a message when the paragraph is clicked
});

// Select the first element with the class "box"
let box = document.querySelector(".box");

// Add a mouseenter event listener to the box
box.addEventListener("mouseenter", function () {
  console.log("mouse inside box"); // Logs a message when the mouse enters the box area
});
