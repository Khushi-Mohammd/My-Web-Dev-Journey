// Import the mongoose library to interact with MongoDB
const mongoose = require("mongoose");

// Connect to the MongoDB database and handle the connection result
main()
  .then((res) => {
    console.log("connection successful"); // Log success message if connection is successful
  })
  .catch((err) => {
    console.log(err); // Log error message if connection fails
  });

// Async function to connect to the MongoDB database
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon"); // Connect to the 'amazon' database on the local MongoDB server
}

// Define a schema for the 'Book' collection
const bookSchema = mongoose.Schema({
  tittle: {
    type: String, // Book's title as a string
    required: true, // Title is required
    maxLength: 30, // Maximum length of the title is 30 characters
  },
  author: {
    type: String, // Book's author as a string
  },
  price: {
    type: Number, // Book's price as a number
    min: [1, "Price is too low for Amazon selling"], // Minimum price is 1 with a custom error message
  },
  discount: {
    type: Number, // Book's discount as a number
    default: 0, // Default discount is 0
  },
  category: {
    type: String, // Book's category as a string
    enum: ["fiction", "non-fiction"], // Category must be either 'fiction' or 'non-fiction'
  },
  genre: {
    type: [String], // Book's genre as an array of strings
  },
});

// Can visit this URL to see all SchemaTypes
// https://mongoosejs.com/docs/schematypes.html

// Create a model for the 'Book' collection using the defined schema
const Book = mongoose.model("Book", bookSchema);

// Create a new book document and save it to the database
let book1 = new Book({
  tittle: "The Alchemist",
  author: "Paulo Coelho",
  price: 989,
  category: "fiction",
  genre: ["adventure fiction", "fantasy fiction"],
});

book1
  .save() // Save the book document to the database
  .then((res) => console.log(res)) // Log the saved document
  .catch((err) => console.log(err)); // Log any errors

/*
// Update the price of a book by its ID without validation
Book.findByIdAndUpdate("67dfee96d423f9c6d8a58143", { price: -500 })
  .then((res) => console.log(res)) // Log the update result
  .catch((err) => console.log(err)); // Log any errors
*/

/*
// Update the price of a book by its ID with validation
Book.findByIdAndUpdate(
  "67dfee96d423f9c6d8a58143",
  { price: -100 },
  { runValidators: true } // Enable validation for the update operation
)
  .then((res) => console.log(res)) // Log the update result
  .catch((err) => console.log(err.errors.price.properties.message)); // Log the validation error message
*/
