let favMovie = "avatar";

let guess = prompt("guess my favorite movie");

// This while loop will keep running until the user guesses the correct movie or types "quit".
while ((guess != favMovie) && (guess != "quit")) {
  guess = prompt("wrong! guess again");
}

// This if statement checks if the user guessed the correct movie.
if (guess === favMovie) {
  console.log("congrats!!");
} else {
  console.log("you loose!!");
}