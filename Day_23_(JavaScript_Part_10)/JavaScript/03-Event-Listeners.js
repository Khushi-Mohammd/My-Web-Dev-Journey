let btns = document.querySelectorAll("button");

for (btn of btns) {
  // btn.onclick = sayHello;
  // btn.onclick = sayName;

  btn.addEventListener("click", sayHello);
  btn.addEventListener("click", sayName);
  
  btn.addEventListener("click", function () {
    console.log("You double clicked me");
  });
}

function sayHello() {
  alert("hello");
}

function sayName() {
  alert("apna college");
}



//=====================================================//

