// Selecting the h1 element from the DOM
let h1 = document.querySelector("h1");

// Function that returns a promise to change the color of h1 after a delay
function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      if (num > 3) {
        // Randomly rejects the promise if num > 3
        reject("Promise rejected"); // Promise is rejected
      }
      h1.style.color = color;
      console.log(`color changed to ${color}`);
      resolve("color changed!"); // Promise is resolved successfully
    }, delay);
  });
}

// Async function to sequentially change colors
async function demo() {
  try {
    // Using try-catch to handle possible rejections from changeColor function
    await changeColor("red", 1000);
    await changeColor("orange", 1000);
    await changeColor("green", 1000);
    await changeColor("yellow", 1000);
    await changeColor("blue", 1000);
  } catch (err) {
    // Handling rejection from the promise
    console.log("Error caught");
    console.log(err); // Logs the error message
  }

  // The below code will execute regardless of promise resolution or rejection
  let a = 5;
  console.log(a);
  console.log("New number is :", a + 3);
}

// Calling the async function demo
demo();
