// Select the first <h1> element from the document
let h1 = document.querySelector("h1");

//===========================================================//

/*
Basic setTimeout method:
This changes the color of the <h1> element after specific time intervals.

setTimeout(() => {
  h1.style.color = "red";
}, 1000);

setTimeout(() => {
  h1.style.color = "orange";
}, 2000);

setTimeout(() => {
  h1.style.color = "green";
}, 3000);

The problem with this approach is that we are writing multiple independent setTimeouts, 
which are difficult to manage and scale if more colors need to be added.
*/

//===========================================================//

/*
Using a function to handle color changes:
Here, the changeColor function is introduced to avoid repetitive code.

function changeColor(color, delay) {
  setTimeout(() => {
    h1.style.color = color;
  }, delay);
}

changeColor("red", 1000);
changeColor("orange", 2000);
changeColor("green", 3000);

While this reduces redundancy, the color changes still happen simultaneously rather than sequentially.
*/

//===========================================================//

// Improved approach using callback functions to handle sequential execution.
function changeColor(color, delay, nextColorChange) {
  setTimeout(() => {
    h1.style.color = color; // Change the color of the <h1> element
    if (nextColorChange) nextColorChange(); // If there is a next color change function, call it
  }, delay);
}

// Calling the function in a nested manner to ensure sequential execution
changeColor("red", 1000, () => {
  changeColor("orange", 1000, () => {
    changeColor("green", 1000, () => {
      changeColor("yellow", 1000, () => {
        changeColor("blue", 1000);
      });
    });
  });
});

/*
Explanation of Callback Hell in JavaScript:

1. In the above implementation, each color change happens only after the previous one completes.
2. This is achieved by passing a callback function as an argument, which ensures that the next color change
   only happens after the previous setTimeout completes.
3. However, notice how deeply nested the functions have become. This is called "Callback Hell" or "Pyramid of Doom."
4. As more colors are added, the indentation increases, making the code harder to read, maintain, and debug.

Problems with Callback Hell:
- Difficult to read and understand
- Hard to manage as more asynchronous tasks are added
- Debugging is challenging due to deeply nested functions

Solutions to Callback Hell:
- Use Promises to flatten the structure
- Use async/await for a cleaner and more readable approach

In modern JavaScript, Promises and async/await are preferred to avoid callback hell.
*/
