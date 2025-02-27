let img = document.querySelector('img');
// Selects the first <img> element in the document and stores it in the variable 'img'.

console.log(img.getAttribute('id'));
// Retrieves the current value of the 'id' attribute of the <img> element and logs it to the console.
// If the 'id' attribute is not present, it returns "null".

setTimeout(() => {
  img.setAttribute('id', 'spiderman');
  // Sets the 'id' attribute of the <img> element to "spiderman".
  // If the 'id' attribute already exists, it replaces the existing value.
  
  console.log("id changed");
}, 2000);

setTimeout(() => {
  img.setAttribute('src', 'assets/creation_3.jpeg');
  // Changes the 'src' attribute of the <img> element to "assets/creation_3.jpeg".
  // This will update the image displayed on the webpage.

  console.log("src changed");
}, 4000);

console.log(img.getAttribute('class'));
// Tries to get the 'class' attribute of the <img> element.
// If the <img> does not have a class attribute, it returns `null`.

img.setAttribute('class', 'images');
// Sets the 'class' attribute of the <img> element to "images".
// If the 'class' attribute does not exist, it creates it and assigns the given value.

console.log(img.getAttribute('class'));
// Retrieves and logs the newly assigned 'class' attribute value, which is now "images".
