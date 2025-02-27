const num = [12, 45, 78, 23, 89, 34, 67, 90]; // An array 'num' containing multiple numbers.
console.log(num); // Logs the entire array as it is.

//=========================================== Spread Operator with Arrays ===========================================//

console.log(...num); 
// The spread operator (...) expands the array elements and prints them as individual values.
// Output: 12 45 78 23 89 34 67 90 (instead of an array, each element is printed separately).

//=========================================== Spread Operator with Math.min() ===========================================//

console.log(Math.min(4, 6, 7, 33, 44, 4, 6, 3, 4, 6, 1)); 
// Math.min() returns the smallest number among the given arguments.
// Here, it finds and logs the minimum value: 1.

console.log(Math.min(...num)); 
// The spread operator expands the 'num' array into individual numbers,
// allowing Math.min() to evaluate them separately.
// This finds and logs the smallest number in the array 'num'.

//=========================================== Spread Operator with Strings ===========================================//

console.log(..."Apna College"); 
// The spread operator is applied to the string "Apna College".
// Since strings are iterable, it breaks them into individual characters.
// Output: 'A' 'p' 'n' 'a' ' ' 'C' 'o' 'l' 'l' 'e' 'g' 'e' (each character logged separately).
