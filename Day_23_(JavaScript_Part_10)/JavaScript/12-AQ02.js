// Select the first <button> element from the document
let btn = document.querySelector("button");

// Add a "click" event listener to the button
btn.addEventListener("click", function () {
  this.style.color = "green"; // Changes the text color of the button to green when clicked
  console.log("button is green"); // Logs a message to the console confirming the color change
});
