let heading = document.querySelector("h1");

setTimeout(() => {
  heading.style.color = "purple";
  heading.style.backgroundColor = "yellow";
}, 2000);

let links = document.querySelectorAll(".box a");

setTimeout(() => {
  for (link of links) {
    link.style.color = "yellow";
  } 
}, 4000);

// Here the style property changes the inline style of the element not the external style sheet.
// The style property is a collection of all the inline styles of the element.