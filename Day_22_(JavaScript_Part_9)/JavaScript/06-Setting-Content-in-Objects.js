let para = document.querySelector("p");  
// Selects the first <p> element in the document and stores it in the variable 'para'.

console.dir(para.innerText);  
// Logs the visible text inside the <p> element to the console.
// innerText returns only the text that is visible (ignores hidden text and extra spaces).

console.dir(para.textContent);  
// Logs the complete text content inside the <p> element, including hidden text (if any).
// textContent preserves spacing and hidden elements that innerText would ignore.

console.dir(para.innerHTML);  
// Logs the HTML content inside the <p> element.
// innerHTML includes both the text and any child elements (like <b>, <i>, <span>, etc.).

// Using setTimeout to change content after 2 seconds
setTimeout(() => {
  para.innerText = "Hi, I am Peter Parker";  
  // Updates the visible text inside <p>, but treats it as plain text.
  // Any HTML tags inside the new text will be displayed as text, not rendered.

  setTimeout(() => {
    para.innerHTML = "Hi, I am <b>Peter Parker</b>";  
    // Updates the <p> element with new content, including an HTML tag (<b>).
    // This makes "Peter Parker" bold.

    console.log("Para is changed");  
  }, 2000);
}, 2000);

let heading = document.querySelector("h1");  
// Selects the first <h1> element and stores it in the variable 'heading'.

setTimeout(() => {
  heading.innerHTML = `<u>${heading.innerText}</u>`;  
  // Wraps the existing text inside the <h1> element with an underline tag <u>.
  // Uses innerText to extract just the text (ignoring any child elements).
  
  console.log("Heading is changed");
}, 2000);
