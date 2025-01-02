let favMovie = "avatar";

let guess = prompt("guess my favorite movie");

while (guess != favMovie) {
  if (guess === "quit") {
    console.log("you quit");
    break;
  }
  guess = prompt("wrong! guess again");
}

if (guess === favMovie) {
  console.log("congrats!!");
}

// let i = 1;

// while (i <= 5) {
//   if (i === 3) {
//     console.log(`break at ${i}`);
//     break;
//   }
//   console.log(i);
//   i++;
// }