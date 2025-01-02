let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      let num = Math.floor(Math.random() * 10 ) + 1;
      if (num > 3) {
        reject("Promise rejected");
      }
      h1.style.color = color;
      console.log(`color changed to ${color}`);
      resolve("color changed!");
    }, delay);
  })
}

async function demo() {
  try {
    await changeColor("red", 1000);
    await changeColor("orange", 1000);
    await changeColor("green", 1000);
    await changeColor("yellow", 1000);
    await changeColor("blue", 1000);
  }
  catch (err) {
    console.log("Error caught");
    console.log(err);
  }
  
  let a = 5;
  console.log(a);
  console.log("New number is :", a+3);
}

demo();

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

// async function greet() {
//   throw "404 page not found";
//   return "Hello!";
// }

// greet()
//   .then((result) => {
//     console.log("Promise was resolved");
//     console.log("Result was :", result);
//   })
//   .catch( (error) => {
//     console.log("Promise was rejected with error :", error);
//   });

// let demo = async () => {
//   return 5;
// }

// console.log(demo());

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
