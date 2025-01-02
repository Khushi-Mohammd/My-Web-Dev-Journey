let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  this.style.color = "green";
  console.log("button is green");
});