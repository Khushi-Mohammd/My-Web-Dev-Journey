let number = 7;
let factorial = 1;

// Calculate the factorial of the number.
for (let i = 1; i <= number; i++) {
  factorial *= i;
}

console.log(`Factorial of ${number} is ${factorial}`);