// Arrays to store the game's sequence and the user's sequence
let gameSeq = [];
let userSeq = [];

// Variables to track game state
let gameStarted = false;
let level = 0;
let highScore = level;

// Event listener to start the game when a key is pressed
document.addEventListener("keypress", function () {
  if (!gameStarted) {
    gameStarted = true;
    levelUp();
  }
});

// Select the h2 element to update the level and game messages
let h2 = document.querySelector("h2");

// Function to increase the game level
function levelUp() {
  // Reset the user sequence for the new level
  userSeq = [];
  level++;
  
  // Update the level display
  h2.innerHTML = `Level ${level}`;

  // Update the high score if the current level is higher
  if (highScore < level) {
    highScore = level;
  }

  // Storing a random box's id to the randomBox variable
  let randomBox = getRandomBox();
  gameSeq.push(randomBox); // Add to game sequence
  // console.log("game sequence", gameSeq);

  // Flash the randomly selected box
  gameFlash(randomBox);
}

// Function to get a random box from four possible options
function getRandomBox() {
  let randomIdx = Math.floor(Math.random() * 4); // Generate a random index (0 to 3)
  let boxes = ["box1", "box2", "box3", "box4"]; // IDs of the four boxes
  return boxes[randomIdx]; // Return a random box ID
}

// Function to flash a box
function gameFlash(randomBox) {
  let flashBox = document.getElementById(randomBox); // Get the box element by ID

  flashBox.classList.add("gameFlash"); // Add a CSS class for the flash effect
  setTimeout(() => {
    flashBox.classList.remove("gameFlash"); // Remove the class after 250ms
  }, 250);
}

// Add click event listeners to all boxes
let btns = document.querySelectorAll(".box");
for (let btn of btns) {
  btn.addEventListener("click", btnPress);
}

// Function to handle when a user clicks on a box
function btnPress() {
  let btn = this; // Get the clicked button
  userFlash(btn); // Flash the button to show user input

  let userBtn = btn.getAttribute("id"); // Get the ID of the clicked button
  userSeq.push(userBtn); // Add it to the user's sequence

  checkSeq(userSeq.length - 1); // Check if the sequence is correct so far
}

// Function to flash the box that the user clicked
function userFlash(btn) {
  btn.classList.add("userFlash"); // Add a CSS class for the flash effect
  setTimeout(() => {
    btn.classList.remove("userFlash"); // Remove the class after 250ms
  }, 250);
}

// Function to check if the user's sequence matches the game sequence
function checkSeq(idx) {
  // If the user's current selection matches the game's sequence at that index
  if (userSeq[idx] === gameSeq[idx]) {
    // If the user has completed the full sequence correctly
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 500); // Move to the next level after a short delay
    }
  } else {
    // If the user makes a mistake, display game over message
    h2.innerHTML = `Game Over! Your score was <b> ${level}</b> <br>Press any key to start.<br>Highest score was: ${highScore}`;

    // Change the background color to red for a brief moment
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "white";
    }, 250);

    // Reset the game
    reset();
  }
}

// Function to reset the game after a loss
function reset() {
  gameSeq = []; // Clear the game sequence
  userSeq = []; // Clear the user sequence
  level = 0; // Reset the level
  gameStarted = false; // Set gameStarted back to false
}

/*
   Explanation of the Code:

   This code implements a Simon Says-style memory game.

   1. The game starts when the user presses any key.
   2. A random sequence of colored boxes flashes level by level.
   3. The game flashes a randomly selected box, adding it to the sequence.
   4. The user must click the boxes in the correct order.
   5. If the user correctly matches the sequence, they proceed to the next level.
   6. If the user makes a mistake, the game ends, and their score is displayed.
   7. The highest score is stored and displayed after game over.

   Key Concepts Used:

   - Event Handling: Listens for keypress events to start the game and click events to register user input.
   - DOM Manipulation: Updates elements dynamically, such as the level display and game messages.
   - Array Operations: Uses arrays to store and compare the game sequence and user sequence.
   - Randomization: Generates random sequences using Math.random().
   - CSS Manipulation: Uses classList to add/remove visual effects for flashes.
   - Game State Management: Keeps track of the game state (level, user progress, and high score).
*/
