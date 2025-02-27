// The method getElementsByTagName() is used to select all elements with a specific HTML tag name.
// It returns an HTMLCollection, which is a live collection of elements that updates automatically if new elements are added to the document.

let paras = document.getElementsByTagName('p');  
// Retrieves all <p> (paragraph) elements from the document and stores them in the variable 'paras'.
// Since multiple <p> elements may exist, this method returns an HTMLCollection.

console.dir(paras);  
// Logs the HTMLCollection of <p> elements to the console.
// This allows us to inspect all paragraph elements and their properties.

paras[1].innerText = "abc";  
// Selects the second <p> element (index 1) from the HTMLCollection and changes its text content to "abc".

console.log(document.getElementsByTagName('span'));  
// Attempts to select all <span> elements in the document.
// If no <span> elements exist, it logs an empty HTMLCollection ([]).
