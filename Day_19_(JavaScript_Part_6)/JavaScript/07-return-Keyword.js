// This function returns the sum of two numbers.
function sum(num1, num2) {
  console.log("hello");
  console.log("hello");
  return num1 + num2;
  console.log("hello2"); // This line won't print because after "return", keyword code will not execute.
  console.log("hello2");
}

// This function returns if the person is adult or not.
function isAdult(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Not adult";
  }
}

// Calling "sum" function.
console.log(sum(5, 8));
console.log(sum(sum(1, 2), 3)); // We can call a function in a function.

// Calling "isAdult" function.
console.log(isAdult(18));