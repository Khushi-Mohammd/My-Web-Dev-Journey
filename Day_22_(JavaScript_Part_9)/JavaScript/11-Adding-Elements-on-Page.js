// Create a new <p> element
let newPara = document.createElement("p");

// Set the text content of the new paragraph
newPara.innerText = "Hey, I am new para";

// Select the <body> element
let body = document.querySelector("body");

// Append the paragraph to the <body> after 2 seconds
setTimeout(() => {
  body.appendChild(newPara);  // Adds <p> as the last child of <body>
}, 2000);

// Select the element with class "box"
let box = document.querySelector(".box");

// If the element already exists elsewhere in the DOM, it moves the element instead of duplicating it.
// Move the paragraph from <body> to inside .box after 4 seconds
setTimeout(() => {
  box.appendChild(newPara);  // Moves <p> inside .box, removing it from <body>
}, 4000);

// Create a new <button> element
let btn = document.createElement("button");

// Set the button text
btn.innerText = "click me!";

// Append the button inside .box after 4 seconds
setTimeout(() => {
  box.appendChild(btn);  // Adds the button as the last child of .box
}, 4000);

// With append() we can add strings or element
// Append additional text to the paragraph after 5 seconds
setTimeout(() => {
  newPara.append(", this is new text");  // Appends text at the end of <p>
}, 5000);

// Move the button inside the paragraph after 5.5 seconds
setTimeout(() => {
  newPara.append(btn);  // Moves the button inside <p>, after the existing text
}, 5500);

// Append more text after the button inside the paragraph after 6 seconds
setTimeout(() => {
  newPara.append(" do not click this button");  // Appends more text after the button
}, 6000);

// Move the paragraph to the beginning of .box after 7 seconds
setTimeout(() => {
  box.prepend(newPara);  // Moves <p> to the first position inside .box
}, 7000);

// Select the first <p> element
let paragraph = document.querySelector("p");

// Create a new <button> element
let newBtn = document.createElement("button");

// Set text for the new button
newBtn.innerText = "New Button!";

// Insert the button before the paragraph as a previous sibling after 8 seconds
setTimeout(() => {
  paragraph.insertAdjacentElement("beforebegin", newBtn);  
  // Adds <button> before <p> (outside the paragraph)
}, 8000);

// Insert the button at the beginning of the paragraph after 9 seconds
setTimeout(() => {
  paragraph.insertAdjacentElement("afterbegin", newBtn);  
  // Moves <button> inside <p>, before the text
}, 9000);

// Insert the button at the end of the paragraph after 10 seconds
setTimeout(() => {
  paragraph.insertAdjacentElement("beforeend", newBtn);  
  // Moves <button> inside <p>, after the existing text
}, 10000);

// Insert the button after the paragraph as a next sibling after 11 seconds
setTimeout(() => {
  paragraph.insertAdjacentElement("afterend", newBtn);  
  // Moves <button> outside <p>, after it
}, 11000);


