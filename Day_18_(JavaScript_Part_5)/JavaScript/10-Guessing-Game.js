const max = prompt("Please enter max number:");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

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