let h1 = document.querySelector("h1");
let inp = document.querySelector("input");
// let document = document.querySelector("document");
// let window = document.querySelector("window");

h1.addEventListener("mouseout", function () {
  console.log("Mouse is out");
});

inp.addEventListener("keypress", function () {
  console.log("Key is pressed");
});

document.addEventListener("scroll", function () {
  console.log("Scrolled");
});

window.addEventListener("load", function () {
  console.log("The page is loaded");
});