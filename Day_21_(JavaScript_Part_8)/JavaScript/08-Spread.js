const num = [12, 45, 78, 23, 89, 34, 67, 90]; // Declare an array 'num' with multiple numbers.
console.log(num); // Log the entire array to the console.

console.log(...num); 
// The spread operator (...) expands the array 'num' into individual elements.
// This will output: 12 45 78 23 89 34 67 90 (the array is "spread out" as separate values).

console.log(Math.min(4, 6, 7, 33, 44, 4, 6, 3, 4, 6, 1)); 
// Math.min() is a method that returns the smallest number from a list of arguments.
// Here, it finds and logs the smallest number among the given arguments: 1.

console.log(Math.min(...num)); 
// The spread operator (...) expands the 'num' array into individual numbers, 
// allowing Math.min() to treat them as separate arguments.
// This finds and logs the smallest number in the 'num' array.

console.log(..."Apna College"); 
// The spread operator (...) is used on the string "Apna College".
// Strings are iterable, so the spread operator splits it into individual characters: 
// 'A', 'p', 'n', 'a', ' ', 'C', 'o', 'l', 'l', 'e', 'g', 'e'.
// The output logs each character separated by a space.
