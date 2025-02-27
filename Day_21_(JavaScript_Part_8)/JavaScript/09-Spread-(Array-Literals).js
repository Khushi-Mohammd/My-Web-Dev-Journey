// Creating an array with numbers
let arr = [1, 2, 3, 4, 5];

// Using the spread operator (...) to create a new array (a copy of "arr")
let newArr = [...arr]; 

console.log(arr);    // Output: [1, 2, 3, 4, 5]  (Original array)
console.log(newArr); // Output: [1, 2, 3, 4, 5]  (Copied array)

/*
The spread operator (...) is used to copy the elements of "arr" into "newArr".
This creates a new independent array, not just a reference to "arr".
*/

// Modifying newArr to check if it affects the original array
newArr.push(6);

console.log(arr);    // Output: [1, 2, 3, 4, 5]  (Original array remains unchanged)
console.log(newArr); // Output: [1, 2, 3, 4, 5, 6]  (New element added only in "newArr")

/*
Since we used the spread operator to create "newArr", it is a separate array from "arr".
This means changes in "newArr" do not affect "arr".
*/

//=========================================== Spread Operator with Strings ===========================================//

// Using spread operator to break a string into individual characters
let chars = [..."Apna College"];
console.log(chars); // Output: ['A', 'p', 'n', 'a', ' ', 'C', 'o', 'l', 'l', 'e', 'g', 'e']

/*
The spread operator splits the string "Apna College" into an array of its characters.
This includes spaces as well.
*/

//======================================== Spread Operator for Merging Arrays ========================================//

let even = [2, 4, 6, 8, 10]; // An array of even numbers
let odd = [1, 3, 5, 7, 9];   // An array of odd numbers

// Using the spread operator to merge two arrays
let nums = [...even, ...odd]; 
console.log(nums); // Output: [2, 4, 6, 8, 10, 1, 3, 5, 7, 9]

/*
The spread operator is used to combine two arrays "even" and "odd" into a single array "nums".
This is an efficient way to merge arrays without modifying the original arrays.
*/
