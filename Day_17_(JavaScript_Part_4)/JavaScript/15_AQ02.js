let number = 83649;
let count = 0;
let copy = number;

// Count the number of digits in the given number.
while (copy > 0) {
  count++;
  copy = Math.floor(copy/10);
}

// Print the result.
console.log(`There are total ${count} digits in ${number}`);