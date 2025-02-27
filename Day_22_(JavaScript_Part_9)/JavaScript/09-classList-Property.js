// Select the first <img> element from the document
let img = document.querySelector("img");

// Log the list of classes applied to the <img> element
console.log(img.classList);

// Select the first <h1> element from the document
let heading = document.querySelector("h1");

// Log the list of classes applied to the <h1> element
console.log(heading.classList);

// Add a new class "heading" to the <h1> element
heading.classList.add("heading");

// Log the updated class list after adding "heading"
console.log(heading.classList);

// After 2 seconds, add the classes "green" and "underline" to the <h1>
setTimeout(() => {
  heading.classList.add("green");  // Adds the "green" class
  console.log("green class added");
  heading.classList.add("underline");  // Adds the "underline" class
  console.log("underline class added");
}, 2000);

// After 4 seconds, remove the "green" class from the <h1>
setTimeout(() => {
  heading.classList.remove("green");  // Removes the "green" class
  console.log("green class removed");
}, 4000);

// After 6 seconds, use setAttribute to replace all existing classes with only "green"
setTimeout(() => {
  heading.setAttribute("class", "green");  // Removes all existing classes and adds only "green"
  console.log("green class added");
}, 6000);

// After 6 seconds, check if "underline" and "green" classes exist on <h1>
setTimeout(() => {
  console.log(heading.classList.contains("underline"));  // Checks if "underline" class is present
  console.log(heading.classList.contains("green"));  // Checks if "green" class is present
}, 6000);

// After 7 seconds, toggle "green" and "underline" classes
setTimeout(() => {
  heading.classList.toggle("green");  // Toggles "green" (removes if present, adds if absent)
  heading.classList.toggle("underline");  // Toggles "underline"
  console.log(`class "green" and "underline" toggled`);
}, 7000);

// Select the element with class "box"
let box = document.querySelector(".box");

// After 8 seconds, add the "yellowBg" class to the "box"
setTimeout(() => {
  box.classList.add("yellowBg");
  console.log(`class "yellowBg" added to box`);
}, 8000);
