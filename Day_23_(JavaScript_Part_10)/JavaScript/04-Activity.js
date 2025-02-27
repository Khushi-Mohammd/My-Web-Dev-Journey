// let colorDiv = document.querySelector(".colordiv");

// function randomColor() {
//   let red = Math.floor(Math.random() * 255) + 1;
//   let green = Math.floor(Math.random() * 255) + 1;
//   let blue = Math.floor(Math.random() * 255) + 1;

//   colorDiv.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
//   colorDiv.innerText = `This is your new color
//   rgb(${red}, ${green}, ${blue})`;
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click", randomColor);

//===================================Apna College Code====================================//

let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let h3 = document.querySelector("h3");
  let randomColor = getRandomColor();

  h3.innerText = randomColor;

  let div = document.querySelector("div");
  div.style.backgroundColor = randomColor;

  console.log("Color updated");
});

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}