// Select the first <p> (paragraph) element in the document
let paragraph = document.querySelector("p");

// Create a new <button> element
let newBtn = document.createElement("button");

// Set the button's text content
newBtn.innerText = "New Button!";

// After 1 second, insert the button **after** the paragraph
setTimeout(() => {
  paragraph.insertAdjacentElement("afterend", newBtn);
  // `insertAdjacentElement("afterend", newBtn)` places the button **outside** the <p> element, right after it.
}, 1000);

// Select the <body> element
let body = document.querySelector("body");

// After 2 seconds, remove the button from the body
setTimeout(() => {
  body.removeChild(newBtn);
  // `removeChild(newBtn)` removes the button element from its parent (<body> in this case).
}, 2000);

// After 3 seconds, remove the paragraph
setTimeout(() => {
  paragraph.remove();
  // `remove()` method directly deletes the paragraph from the DOM.
}, 3000);

// After 4 seconds, remove the entire body element
setTimeout(() => {
  body.remove();
  // `remove()` method removes the <body> element from the DOM, making the page content disappear.
}, 4000);
