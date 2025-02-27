// Select the first <h4> element from the document
let h4 = document.querySelector("h4");

// Log the parent element of the <h4> element (its direct container)
console.dir(h4.parentElement);  

// Store the parent element of <h4> in a variable named "box"
let box = h4.parentElement;

// Log all child elements of the "box" container
console.dir(box.children);  

// Log the number of child elements inside "box"
console.log(box.childElementCount);  

// Select the first <ul> element from the document
let ul = document.querySelector("ul");

// Log the number of child elements (list items) inside the <ul>
console.log(ul.childElementCount);  

// Log all child elements (list items) of the <ul>
console.dir(ul.children);  

// Select and log the previous sibling element of the third <li> inside the <ul>
console.dir(ul.children[2].previousElementSibling);  

// Select and log the next sibling element of the first <li> inside the <ul>
console.dir(ul.children[0].nextElementSibling);  

// Select the first <img> element from the document
let img = document.querySelector("img");

// Select the previous sibling element of <img>
// Change the text color of this previous sibling to green
img.previousElementSibling.style.color = "green";  

console.log("h1's color changed to green");
