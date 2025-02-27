const num = [12, 45, 78, 23, 89, 34, 67, 90]; // An array of numbers
console.log(num);

/*
The "reduce()" method is used to iterate over the array and accumulate a single result.
Here, we are using it to find the maximum value in the array.
*/

let max = num.reduce((max, el) => { // "max" stores the current maximum value while iterating over the array.
  if (max < el) {  // If the current element "el" is greater than "max", update "max" to "el"
    return el;
  } else {  // Otherwise, keep the current "max" value
    return max;
  }
});

// Printing the maximum value found in the array
console.log(max); // Output: 90 (since 90 is the largest number in the array)

/*
Explanation of reduce():
1. The "reduce()" function iterates over the array and keeps track of the highest number found so far.
2. "max" starts as the first element of the array by default.
3. For each element "el" in the array:
   - If "el" is greater than "max", "el" becomes the new maximum.
   - Otherwise, "max" remains unchanged.
4. The final result after all iterations is stored in the "max" variable.
*/
