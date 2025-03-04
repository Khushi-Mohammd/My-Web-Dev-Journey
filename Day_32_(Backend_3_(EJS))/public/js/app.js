let btns = document.querySelectorAll("button"); // Selecting all button elements on the page

// Looping through each button element
for (let btn of btns) {
  btn.addEventListener("click", function () {
    console.log("Button was clicked"); // Logging a message when a button is clicked
  });
}
