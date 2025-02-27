// Selecting the <h1> element from the document
let h1 = document.querySelector("h1");

// Function to change the color of <h1> after a given delay
// This function returns a Promise that resolves when the color is changed
function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color; // Changing the color of <h1>
      resolve("color changed"); // Resolving the Promise once the color is updated
    }, delay);
  });
}

// Calling changeColor function sequentially using Promise chaining
changeColor("red", 1000)
  .then(() => {
    console.log("red color was completed"); // Logs message after red color is applied
    return changeColor("orange", 1000); // Returns a new Promise for the next color change
  })
  .then(() => {
    console.log("orange color was completed"); // Logs message after orange color is applied
    return changeColor("green", 1000); // Returns a new Promise for the next color change
  })
  .then(() => {
    console.log("green color was completed"); // Logs message after green color is applied
    return changeColor("yellow", 1000); // Returns a new Promise for the next color change
  })
  .then(() => {
    console.log("yellow color was completed"); // Logs message after yellow color is applied
    return changeColor("blue", 1000); // Returns a new Promise for the next color change
  })
  .then(() => {
    console.log("blue color was completed"); // Logs message after blue color is applied
  })
  .catch(() => {
    console.log("color change failed"); // Catches and handles any error in the Promise chain
  });

/*
Explanation of this refactored code:

1. The changeColor function:
   - It accepts a color and delay parameter.
   - Uses setTimeout to change the color after the specified delay.
   - Returns a Promise that resolves when the color is successfully changed.

2. The main execution:
   - The function changeColor is called sequentially using .then().
   - Each .then() ensures that the next color change starts only after the previous one is completed.
   - This avoids callback hell and makes the code more readable.

3. Error Handling:
   - If any Promise in the chain fails, the .catch() block is triggered.
   - This provides a clean way to handle errors without deeply nested conditions.

4. Benefits of this refactored code:
   - Improved Readability: No nested callbacks.
   - Better Error Handling: A single .catch() at the end to manage failures.
   - Scalability: New color changes can be easily added by appending another .then().

Conclusion:
- This refactored code eliminates callback hell by using Promise chaining.
- It ensures the colors change one by one in a structured and maintainable manner.
*/
