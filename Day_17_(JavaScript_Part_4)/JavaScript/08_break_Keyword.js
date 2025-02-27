let favMovie = "avatar";

let guess = prompt("guess my favorite movie");

while (guess != favMovie) {
  if (guess === "quit") {
    console.log("you quit");
    break; // This break statement will exit the loop if the user types "quit".
  }
  guess = prompt("wrong! guess again");
}

// This if statement checks if the user guessed the correct movie.
if (guess === favMovie) {
  console.log("congrats!!");
}

// let i = 1;

// while (i <= 5) {
//   if (i === 3) {
//     console.log(`break at ${i}`);
//     break; // This break statement will exit the loop when i is equal to 3.
//   }
//   console.log(i);
//   i++;
// }