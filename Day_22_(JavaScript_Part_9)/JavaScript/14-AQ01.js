let body = document.querySelector("body");

let button = document.createElement("button");
let input = document.createElement("input");

button.innerText = "Click me";

body.append(input);
body.append(button);

input.setAttribute("placeholder","username");
button.setAttribute("id","btn");

let btn = document.querySelector("#btn");
btn.classList.add("btnStyle")

let h1 = document.createElement("h1")
h1.innerText = "DOM Practice";
body.append(h1);
h1.classList.add("h1Style");

let p = document.createElement("p")
p.innerHTML = "Apna College <b>Delta</b> Practice";
body.append(p);