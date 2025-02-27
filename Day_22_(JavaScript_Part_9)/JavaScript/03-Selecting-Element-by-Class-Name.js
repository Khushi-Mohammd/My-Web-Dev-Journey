// The method getElementsByClassName() is used to select all elements that share the same class name.
// It returns an HTMLCollection, which is a live collection of elements that updates automatically if the document changes.

let smallImages = document.getElementsByClassName("oldImg");  
// Retrieves all elements with the class name "oldImg" and stores them in the variable smallImages.
// Since multiple elements can have the same class, this method returns an HTMLCollection (not an array).

console.dir(smallImages);  
// Logs the HTMLCollection of selected elements to the console.
// This allows us to inspect all elements with the class "oldImg."

// Loop through each element in the HTMLCollection and change its 'src' attribute.
for (let i = 0; i < smallImages.length; i++) {
  smallImages[i].src = "assets/spiderman_img.png";  
  // Updates the 'src' attribute of each image to "assets/spiderman_img.png",
  // effectively changing all images with the class "oldImg" to the new one.

  console.log(`src of image no ${i + 1} is changed`);  
  // Logs a message indicating that the 'src' of the current image has been updated.
}

// If the class "nothing" does not exist in the HTML document, this will return an empty HTMLCollection.
console.log(document.getElementsByClassName("nothing"));  
// Attempts to select elements with the class "nothing".
// Since no elements with this class exist, it logs an empty HTMLCollection ([]).
