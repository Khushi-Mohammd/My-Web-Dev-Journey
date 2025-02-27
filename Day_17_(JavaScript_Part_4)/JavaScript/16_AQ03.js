let number = 287152;
let remender = 0;
let copy = number;
let sum = 0;

// Calculate the sum of digits of the number.
while (copy > 0) {
  remender = copy % 10;
  sum += remender;
  copy = Math.floor(copy/10);
}

console.log(`The sum of digits of number ${number} is ${sum}`);