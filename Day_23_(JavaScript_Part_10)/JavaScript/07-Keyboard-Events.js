let input = document.querySelector("input");

// input.addEventListener("keydown", function () {
//   console.log("key was pressed");
// })

input.addEventListener("keyup", function (event) {
  console.log(event.code);
  if (event.code == "ArrowUp") {
    console.log("Character moves up");
  } else if (event.code == "ArrowDown") {
    console.log("Character moves down");
  } else if (event.code == "ArrowLeft") {
    console.log("Character moves left");
  } else if (event.code == "ArrowRight") {
    console.log("Character moves right");
  }
})
