const sum = (a, b) => { // Arrow function is a new way to write functions in JavaScript.
  console.log(a + b);
};

// const cube = (n) => {
//   return n*n*n;
// };

// Second method to write.
const cube = n => { // When we are passing only a single argument, we can remove paranthesis. It is also a valid syntax.
  return n*n*n;
};

const pow = (a, b) => {
  return a ** b;
};

const hello = () => { // When we don't have to pass any argument to function, we have to compulsarily write paranthesis.
  console.log("Hello");
};

sum(18, 5);

console.log(cube(5));

console.log(pow(2, 3));