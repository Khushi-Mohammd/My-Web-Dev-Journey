// Q: Square and sum the array elements using the arrow function and then find the average of the array.

let nums = [2, 4, 10];
console.log(nums);``

const square = nums.map( (el) => el * el); // Square the array elements
let sum = square.reduce( (acc, el) => acc + el); // Sum the array elements
let avg = sum / nums.length; // Find the average of the array

console.log(avg);