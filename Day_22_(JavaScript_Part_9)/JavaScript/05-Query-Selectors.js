console.dir(document.querySelector("h1"));  
// Selects the first <h1> element in the document and logs it as an object.
// If multiple <h1> elements exist, only the first one is selected.

console.dir(document.querySelector("#description"));  
// Selects the element with the ID "description" and logs it as an object.
// This works similarly to getElementById(), but querySelector() allows for more flexible CSS-style selection.

console.dir(document.querySelector(".oldImg"));  
// Selects the first element with the class "oldImg" and logs it as an object.
// Unlike getElementsByClassName(), which returns a collection, querySelector() only returns the first matching element.

console.dir(document.querySelector("div a"));  
// Selects the first <a> (anchor) tag that is inside a <div> and logs it as an object.
// This allows for nested element selection using CSS-style selectors.

console.dir(document.querySelectorAll("div a"));  
// Selects all <a> elements inside a <div> and logs them as a NodeList.
// Unlike querySelector(), which returns only the first match, querySelectorAll() returns all matching elements in a NodeList.
