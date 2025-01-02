function sum(a, b = 3) {
  return a + b;
}

console.log(sum(5, 7)); // When we pass value to second argument it will this given value but.
console.log(sum(5)); // When we don't pass value to the second argument it will use it's preassigned value.