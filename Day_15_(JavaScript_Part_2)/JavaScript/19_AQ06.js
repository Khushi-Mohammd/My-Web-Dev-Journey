let num1 = 9798792289889;
let num2 = 989473372;

// if statement to check if the last digit of both numbers are same or not.

if (num1 % 10 === num2 % 10) {
  console.log(`${num1} and ${num2} have same last digit`);
} else {
  console.log(`${num1} and ${num2} does not have same last digit`);
}