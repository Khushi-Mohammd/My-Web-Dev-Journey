// This function takes a number as an argument and returns the sum of all numbers from 1 to that number.
function sumOfN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumOfN(3));