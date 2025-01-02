let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  })
}

changeColor("red", 1000)
  .then( () => {
    console.log("red color was completed");
    return changeColor("orange", 1000)
  })
  .then( () => {
    console.log("orange color was completed");
    return changeColor("green", 1000)
  })
  .then( () => {
    console.log("green color was completed");
    return changeColor("yellow", 1000)
  })
  .then( () => {
    console.log("yellow color was completed");
    return changeColor("blue", 1000)
  })
  .then( () => {
    console.log("blue color was completed");
  })
  .catch( () => {
    console.log("color change failed");
  });

// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("green", 1000, () => {
//       changeColor("yellow", 1000, () => {
//         changeColor("blue", 1000);
//       });
//     });
//   });
// });

// function saveToDb(data, success, faliure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;

//   if (internetSpeed > 4) {
//     success();
//   } else {
//     faliure();
//   }
// }

// saveToDb("Apna College", () => {
//   console.log("Success : data was saved");
//   saveToDb("Hello World", () => {
//     console.log("Success2: data2 saved");
//     saveToDb("Shradha", () => {
//       console.log("Success3: data3 saved");
//     }, () => {
//       console.log("Faliure3: weak connection");
//     });
//   }, () => {
//     console.log("Faliure2: data not saved");
//   });
// }, () => {
//   console.log("Faliure : weak connection, data was not saved");
// });

// function saveToDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
    
//     if (internetSpeed > 4) {
//       resolve("Success : data was saved");
//     } else {
//       reject("Failure : weak connection");
//     }
//   });
// }

// saveToDb("Apna College")
//   .then( (result) => {
//     console.log("data1 saved");
//     console.log("Result of promise:", result);
//     return saveToDb("Hello World");
//   })
//   .then( (result) => {
//     console.log("data2 saved");
//     console.log("Result of promise:", result);
//     return saveToDb("Shradha");
//   })
//   .then ( (result) => {
//     console.log("data 3 saved");
//     console.log("Result of promise:", result);
//   })
//   .catch( (error) => {
//     console.log("Promise was rejected");
//     console.log("Error of promise:", error);
//   });