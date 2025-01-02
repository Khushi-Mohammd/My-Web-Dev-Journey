let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

let btns = ["box1", "box2", "box3", "box4"];

let highest = 0;

document.addEventListener("keypress", function () {
  if (started === false) {
    console.log("Game started");
    started = true;

    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level ++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 4);
  let randBox = btns[randIdx];
  let randBtn = document.querySelector(`.${randBox}`);

  gameSeq.push(randBox);
  console.log(gameSeq);
  // console.log(randIdx);
  // console.log(randBox);
  // console.log(randBtn);

  gameFlash(randBtn);
}

function checkAns(idx) {

  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    
    if (highest < level) {
      highest = level;
    }

    h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to start.<b>  <br>Highest score was: ${highest}</b>`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 250);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);
  
  let userBox = btn.getAttribute("id");
  userSeq.push(userBox);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".innerbox");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}