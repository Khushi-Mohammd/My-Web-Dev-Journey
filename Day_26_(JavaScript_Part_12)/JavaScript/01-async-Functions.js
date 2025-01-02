// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       resolve("color changed");
//     }, delay);
//   })
// }

// changeColor("red", 1000)
//   .then( () => {
//     console.log("red color was completed");
//     return changeColor("orange", 1000)
//   })
//   .then( () => {
//     console.log("orange color was completed");
//     return changeColor("green", 1000)
//   })
//   .then( () => {
//     console.log("green color was completed");
//     return changeColor("yellow", 1000)
//   })
//   .then( () => {
//     console.log("yellow color was completed");
//     return changeColor("blue", 1000)
//   })
//   .then( () => {
//     console.log("blue color was completed");
//   })
//   .catch( () => {
//     console.log("color change failed");
//   });

async function greet() {
  throw "404 page not found";
  return "Hello!";
}

greet()
  .then((result) => {
    console.log("Promise was resolved");
    console.log("Result was :", result);
  })
  .catch( (error) => {
    console.log("Promise was rejected with error :", error);
  });

let demo = async () => {
  return 5;
}

console.log(demo());