// This function takes 2 numbers as arguments and returns a random number between them.
function getRandomNumber(start, end) {
  let diff = end - start; // Calculate the difference between the 2 numbers.
  let randomNumber = Math.floor(Math.random() * (diff + 1)) + start;
  return randomNumber;
}

let randomNumber = getRandomNumber(1, 10); // Call the function and store the returned value in a variable.
console.log(randomNumber); // Print the returned random number.