// Requiring fruit objects from their respective files inside the 'Fruits' directory
let apple = require("./apple");   // Importing 'apple.js'
let banana = require("./banana"); // Importing 'banana.js'
let orange = require("./orange"); // Importing 'orange.js'

// Storing all imported fruit objects inside an array
let fruits = [apple, banana, orange];

// Exporting the 'fruits' array so it can be accessed in 'script.js'
module.exports = fruits;
