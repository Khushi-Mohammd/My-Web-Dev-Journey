// Select the first input element from the document
let input = document.querySelector("input");

// Event listener for the "keydown" event (commented out)
// This triggers when a key is pressed down
// input.addEventListener("keydown", function (event) {
//   console.log("key was pressed"); // Logs a message when any key is pressed
//   console.dir(event); // Logs the full event object to inspect details
//   console.log("code =", event.code); // Logs the code of the pressed key
//   console.log("key =", event.key); // Logs the actual key pressed
// });

// Event listener for the "keyup" event
// This triggers when a key is released after being pressed
input.addEventListener("keyup", function (event) {
  console.log(event.code); // Logs the code of the key that was released

  // Checking which arrow key was pressed and logging appropriate movement
  if (event.code == "ArrowUp") {
    console.log("Character moves up"); // Logs when the Up Arrow key is released
  } else if (event.code == "ArrowDown") {
    console.log("Character moves down"); // Logs when the Down Arrow key is released
  } else if (event.code == "ArrowLeft") {
    console.log("Character moves left"); // Logs when the Left Arrow key is released
  } else if (event.code == "ArrowRight") {
    console.log("Character moves right"); // Logs when the Right Arrow key is released
  }
});
