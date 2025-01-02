const num = [2, 4, 10]; // Step 1: Define an array of numbers
console.log(num);   // Step 2: Print the original array to the console

let square = num.map( (el) => el * el);
let sum = square.reduce( (acc, el) => acc + el);
let avg = sum / num.length;

console.log(avg);