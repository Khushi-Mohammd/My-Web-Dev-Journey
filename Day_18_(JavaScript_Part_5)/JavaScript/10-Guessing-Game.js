const max = prompt("Please enter max number:"); // Prompts the user to enter the maximum number.

const random = Math.floor(Math.random() * max) + 1; // Generates a random number from 1 to the maximum number entered by the user.

let guess = prompt("Guess the number"); // Prompts the user to guess the number.

// The while loop will run until the user guesses the correct number or enters "quit".
// If the user enters "quit", the loop will break and the message "You quit" will be displayed.
// If the user guesses the correct number, the loop will break and the message "Congrats!! You guessed right, random number was" followed by the random number will be displayed.
// If the user's guess is smaller than the random number, the user will be prompted to guess again with a message "Your guess was too small. Try again!!".
// If the user's guess is larger than the random number, the user will be prompted to guess again with a message "Your guess was too big. Try again!!".
while (true) {
  if (guess === "quit") {
    console.log("You quit");
    break;
  }

  if (guess == random) {
    console.log("Congrats!! You guessed right, random number was", random);
    break;
  } else if (guess < random) {
    guess = prompt("Your guess was too small. Try again!!");
  } else {
    guess = prompt("Your guess was too big. Try again!!");
  }
}