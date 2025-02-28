// Requiring the 'Fruits' directory. Since there is an 'index.js' file inside the 'Fruits' folder,
// Node.js automatically loads 'index.js' when we require the directory.
let info = require("./Fruits");

// Logging the 'info' variable, which contains the array of fruit objects exported from 'index.js'
console.log(info); 

// Accessing the first element of the 'info' array, which is the 'apple' object
console.log(info[0]);

// Accessing the 'name' property of the first fruit object ('Apple')
console.log(info[0].name);
