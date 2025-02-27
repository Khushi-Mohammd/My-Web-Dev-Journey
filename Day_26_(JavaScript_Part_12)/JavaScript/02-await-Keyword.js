// function getNum() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 10) + 1;
//       console.log(num);
//       resolve();
//     }, 1000);
//   });
// }

// async function demo() {
//   await getNum();
//   await getNum();
//   await getNum();
//   await getNum();
//   getNum();
// }

// console.log(demo());

//================================================================//

// Selecting the h1 element from the DOM
let h1 = document.querySelector("h1");

// Function that returns a promise to change the color of h1 after a delay
function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      console.log(`color changed to ${color}`);
      resolve("color changed!");
    }, delay);
  });
}

// Async function allows the use of the 'await' keyword inside it
async function demo() {
  // The 'await' keyword pauses the execution of the function until the promise resolves
  await changeColor("red", 1000); // Waits 1 second before changing color to red
  await changeColor("orange", 1000); // Waits 1 second before changing color to orange
  await changeColor("green", 1000); // Waits 1 second before changing color to green
  await changeColor("yellow", 1000); // Waits 1 second before changing color to yellow

  // This function call is not awaited, so it will execute asynchronously
  changeColor("blue", 1000); // Changes color to blue but does not wait for completion
}

// Calling the async function demo
demo();
