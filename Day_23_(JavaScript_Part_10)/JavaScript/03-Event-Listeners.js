// Select all button elements from the document
let btns = document.querySelectorAll("button");

// Loop through each button and assign event listeners
for (btn of btns) {
  // Using the onclick property (only one function can be assigned at a time)
  // btn.onclick = sayHello;
  // btn.onclick = sayName; // This will override the previous onclick assignment

  // Using addEventListener to attach multiple event handlers
  // btn.addEventListener("click", sayHello);
  // btn.addEventListener("click", sayName);

  // Adding a double-click event listener
  btn.addEventListener("dblclick", function () {
    console.log("You double clicked me"); // Logs a message to the console when the button is double-clicked
  });
}

// Function to display an alert message saying "hello"
function sayHello() {
  alert("hello");
}

// Function to display an alert message saying "apna college"
function sayName() {
  alert("apna college");
}
