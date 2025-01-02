// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function () {
//   alert("button was clicked");
// }

function sayHello() {
  alert("hello");
}

// btn.onclick = sayHello;

//=====================================================//

// let btns = document.querySelectorAll("button");

// for (btn of btns) {
//   btn.onclick = sayHello;
// }

//=====================================================//

let btns = document.querySelectorAll("button");

for (btn of btns) {
  btn.onclick = sayHello;
  btn.onmouseenter = function () {
    console.log("You entered a button");
  };
  console.dir(btn);
}