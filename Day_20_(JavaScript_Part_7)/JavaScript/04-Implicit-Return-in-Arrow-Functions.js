// const sum = (a, b) => (a + b);

// Second Method to write.
// When we have to only return some value, we can directly write value without "return" keyword after
// arrow(=>) in or without paranthesis("()"). Functions implicitly(automaticaly) detects return value.
const sum = (a, b) => a + b;

const cube = (n) => n * n * n;

const pow = (a, b) => (a ** b);

sum(18, 5);

console.log(cube(5));

console.log(pow(2, 3));
