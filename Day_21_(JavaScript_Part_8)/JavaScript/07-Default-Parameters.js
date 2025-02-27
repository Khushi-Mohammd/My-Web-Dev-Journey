function sum(a, b = 3) {
  return a + b;
}

console.log(sum(5, 7)); // Output: 12
console.log(sum(5)); // Output: 8

// Explanation:
// - In the 'sum' function, the parameter 'b' is assigned a default value of 3.
// - When calling 'sum(5, 7)', the value of 'b' is 7, so the sum is 5 + 7 = 12.
// - When calling 'sum(5)', the value of 'b' is not provided, so the default value of 3 is used.