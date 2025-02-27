const num = [12, 45, 78, 23, 89, 34, 67, 90]; // An array of numbers
console.log(num);

//=========================================== every() ====================================================//

// "every()" method checks if ALL elements in the array satisfy the given condition.
// It returns "true" only if the condition is "true" for every element; otherwise, it returns "false".
let check = num.every((el) => (el % 2 == 0)); // Checking if all elements in the array are even
console.log(check); // Output: false (because not all numbers are even, e.g., 45, 23, 89, 67)

// Checking if all elements in the array are less than 100
let check2 = num.every((el) => el < 100); 
console.log(check2); // Output: true (because all numbers in the array are less than 100)

/*
Explanation of every():
1. The function inside "every()" runs for each element in the array.
2. If all elements satisfy the condition, it returns "true".
3. If at least one element fails the condition, it returns "false".
4. It stops checking as soon as it finds a failing element (short-circuiting).
*/

//=========================================== some() ====================================================//

// "some()" method checks if AT LEAST ONE element in the array satisfies the given condition.
// It returns "true" if at least one element meets the condition; otherwise, it returns "false".
let checkSome = num.some((el) => (el % 2 == 0)); // Checking if at least one element is even
console.log(checkSome); // Output: true (because there are even numbers in the array, e.g., 12, 78, 34, 90)

// Checking if at least one element is less than 20
let checkSome2 = num.some((el) => el < 20); 
console.log(checkSome2); // Output: true (because 12 is less than 20)

// Checking if at least one element is greater than 100
let checkSome3 = num.some((el) => el > 100); 
console.log(checkSome3); // Output: false (because no number in the array is greater than 100)

/*
Explanation of some():
1. The function inside "some()" runs for each element in the array.
2. If at least one element satisfies the condition, it returns "true".
3. If no elements meet the condition, it returns "false".
4. It stops checking as soon as it finds a matching element (short-circuiting).
*/
