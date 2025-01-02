let number = 7;
let factorial = 1;

for (let i = 1; i <= number; i++) {
  factorial *= i;
}

console.log(`Factorial of ${number} is ${factorial}`);