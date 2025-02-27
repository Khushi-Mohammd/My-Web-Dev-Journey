// This function will take a number as an argument and return a message if the number is even or not.
const isEven = (n) => {
  if (n % 2 == 0) {
    return `Number ${n} is even number`;
  } else {
    return `Number ${n} is not even number`;
  }
};

let check = isEven(8); // Calling the function and storing the result in 'check'.
console.log(check); // Printing the result.