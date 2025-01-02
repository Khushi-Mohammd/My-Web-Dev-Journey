let favMovie = "avatar";

let guess = prompt("guess my favorite movie");

while ((guess != favMovie) && (guess != "quit")) {
  guess = prompt("wrong! guess again");
}

if (guess === favMovie) {
  console.log("congrats!!");
} else {
  console.log("you loose!!");
}