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

function saveToDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    
    if (internetSpeed > 4) {
      resolve("Success : data was saved");
    } else {
      reject("Failure : weak connection");
    }
  });
}

saveToDb("Apna College")
  .then( () => {
    console.log("data1 saved");
    return saveToDb("Hello World");
  })
  .then( () => {
    console.log("data2 saved");
    return saveToDb("Shradha");
  })
  .then ( () => {
    console.log("data 3 saved");
  })
  .catch( () => {
    console.log("Promise was rejected");
  });