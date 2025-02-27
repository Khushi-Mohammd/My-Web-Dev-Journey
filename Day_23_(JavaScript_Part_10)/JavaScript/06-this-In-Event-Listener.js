// Select the first button, h1, h3, and paragraph elements from the document
let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");

// Function to change the background color of the clicked element
function changeColor() {
  console.dir(this.innerText); // "this" refers to the element that was clicked, and its inner text is logged in the console
  this.style.backgroundColor = "blue"; // "this" refers to the clicked element, so its background color changes to blue
}

// Adding click event listeners to multiple elements
btn.addEventListener("click", changeColor); // "this" refers to the button when clicked
h1.addEventListener("click", changeColor);  // "this" refers to the h1 when clicked
h3.addEventListener("click", changeColor);  // "this" refers to the h3 when clicked
p.addEventListener("click", changeColor);   // "this" refers to the paragraph when clicked
