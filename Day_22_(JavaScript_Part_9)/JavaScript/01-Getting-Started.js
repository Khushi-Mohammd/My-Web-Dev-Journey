// The DOM (Document Object Model) is a programming interface that represents the structure of a web document as a tree of nodes.
// It allows JavaScript to interact with and modify the structure, content, and styles of a webpage.

console.dir(document);  
// This command logs the entire document object to the console in a structured way.
// It provides a detailed representation of all the properties and methods available in the document object.

console.dir(document.all[8].innerText);  
// 'document.all' returns a collection of all elements in the document as an array-like structure.
// 'document.all[8]' accesses the 9th element (index starts at 0) in the document.
// '.innerText' gets the visible text content of that element and logs it to the console.

document.all[8].innerText = 'Peter Parker';  
// This modifies the text content of the 9th element in the document and sets it to 'Peter Parker'.
// If this element was previously an <h1>, <p>, or any other text-containing tag, its text will be replaced.

console.log("H1 heading is changed to 'Peter Parker'");  
// Logs a message to the console indicating that the heading (or targeted element) has been updated.
