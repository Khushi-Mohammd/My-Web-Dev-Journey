let number = 83649;
let count = 0;
let copy = number;

while (copy > 0) {
  count++;
  copy = Math.floor(copy/10);
}

console.log(`There are total ${count} digits in ${number}`);