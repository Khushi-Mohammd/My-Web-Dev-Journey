// The method getElementById() is used to select an element from the DOM by its unique ID.
// It returns the element as an object, allowing us to manipulate its properties.

let imgObj = document.getElementById("mainImg");  
// Retrieves the HTML element with the ID "mainImg" and stores it in the variable imgObj.
// This allows us to interact with the selected element using JavaScript.

console.dir(imgObj);  
// Logs the retrieved image element as an object in the console.
// This displays all available properties and methods of the element.

console.dir(imgObj.src);  
// Logs the 'src' (source) attribute of the image element to the console.
// The 'src' contains the URL/path of the image currently displayed.

console.dir(imgObj.tagName);  
// Logs the tag name of the element (e.g., "IMG" for an <img> tag).
// This is useful to confirm the type of the selected element.

console.dir(imgObj.id);  
// Logs the ID of the selected element, which in this case is "mainImg".
// This verifies that we correctly retrieved the element by its ID.

imgObj.src = "assets/creation_1.png";  
// Changes the 'src' attribute of the image element.
// This updates the image to display "assets/creation_1.png" instead of the previous image.

console.dir(document.getElementById("description"));  
// Retrieves the element with the ID "description" and logs it in the console.
// This helps inspect the element’s properties and methods for further modifications.

// If the ID "nothing" does not exist in the HTML document, this will return "null".  
console.log(document.getElementById("nothing"));
