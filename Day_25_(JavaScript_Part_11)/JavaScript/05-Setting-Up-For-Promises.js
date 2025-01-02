function saveToDb(data, success, faliure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;

  if (internetSpeed > 4) {
    success();
  } else {
    faliure();
  }
}

saveToDb("Apna College", () => {
  console.log("Success : data was saved");
  saveToDb("Hello World", () => {
    console.log("Success2: data2 saved");
    saveToDb("Shradha", () => {
      console.log("Success3: data3 saved");
    }, () => {
      console.log("Faliure3: weak connection");
    });
  }, () => {
    console.log("Faliure2: data not saved");
  });
}, () => {
  console.log("Faliure : weak connection, data was not saved");
});