let body = document.querySelector("body");

let para1 = document.createElement("p");
para1.innerText = "Hey I'm red!";
body.append(para1);
para1.classList.add("red");

let h3 = document.createElement("h3");
h3.innerText = "I'm blue h3!";
body.append(h3);
h3.classList.add("blue");

let div = document.createElement("div");
body.append(div);
div.classList.add("blackBorder");
div.classList.add("pinkBg");

let h1 = document.createElement("h1");
h1.innerText = "I'm in a div";
div.append(h1);

let para2 = document.createElement("p");
para2.innerText = "ME TOO!";
div.append(para2);