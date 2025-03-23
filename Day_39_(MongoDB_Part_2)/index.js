// Import the mongoose library to interact with MongoDB
const mongoose = require("mongoose");

// Connect to the MongoDB database and handle the connection result
main()
  .then(() => {
    console.log("connection successful"); // Log success message if connection is successful
  })
  .catch((err) => console.log(err)); // Log error message if connection fails

// Async function to connect to the MongoDB database
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test"); // Connect to the 'test' database on the local MongoDB server
}

// Define a schema for the 'User' collection
const userSchema = mongoose.Schema({
  name: String, // User's name as a string
  email: String, // User's email as a string
  age: Number, // User's age as a number
});

// Create a model for the 'User' collection using the defined schema
const User = mongoose.model("User", userSchema);

// The following commented-out code snippets demonstrate various operations on the 'User' collection

/*
// Create a new user document and save it to the database
const user1 = new User({
  name: "casey",
  email: "casey@gmail.com",
  age: 33,
});

user1.save(); // Save the user document to the database
*/

/*
// Create another user document and save it to the database with a promise
const user2 = new User({
  name: "mike",
  email: "mike@gmail.com",
  age: 27,
});

user2
  .save()
  .then((res) => {
    console.log(res); // Log the saved document
  })
  .catch((err) => {
    console.log(err); // Log any errors
  });
*/

/*
// Insert multiple user documents into the database
User.insertMany([
  { name: "tony", email: "tony@gmail.com", age: 40 },
  { name: "peter", email: "peter@gmail.com", age: 22 },
  { name: "bruce", email: "bruce@gmail.com", age: 46 },
]).then((res) => {
  console.log(res); // Log the inserted documents
});
*/

/*
// Find all users with age greater than 35
User.find({ age: { $gt: 35 } })
  .then((res) => {
    console.log(res); // Log the found documents
    console.log(res[0].name); // Log the name of the first found user
  })
  .catch((err) => {
    console.log(err); // Log any errors
  });
*/

/*
// Find one user with age greater than 35
User.findOne({ age: { $gt: 35 } })
  .then((res) => {
    console.log(res); // Log the found document
  })
  .catch((err) => {
    console.log(err); // Log any errors
  });
*/

/*
// Find a user by their ID
User.findById("67dee6d084f5294799b1a5e3")
  .then((res) => {
    console.log(res); // Log the found document
  })
  .catch((err) => {
    console.log(err); // Log any errors
  });
*/

/*
// Update one user document by name
User.updateOne({ name: "bruce" }, { age: 48 })
  .then((res) => {
    console.log(res); // Log the update result
  })
  .catch((err) => {
    console.log(err); // Log any errors
  });
*/

/*
// Update multiple user documents with age greater than 38
User.updateMany({ age: { $gt: 38 } }, { age: 52 })
  .then((res) => {
    console.log(res); // Log the update result
  })
  .catch((err) => {
    console.log(err); // Log any errors
  });
*/

/*
// Find one user by name and update their age
User.findOneAndUpdate({ name: "bruce" }, { age: 49 })
  .then((data) => {
    console.log(data); // Log the old document before update
  })
  .catch((err) => {
    console.log(err); // Log any errors
  });
*/

/*
// Find one user by name and update their age, returning the new document
User.findOneAndUpdate({ name: "bruce" }, { age: 47 }, { new: true })
  .then((data) => {
    console.log(data); // Log the updated document
  })
  .catch((err) => {
    console.log(err); // Log any errors
  });
*/

/*
// Find a user by ID and update their age, returning the new document
User.findByIdAndUpdate("67ded614f71b92fc671fd650", { age: 18 }, { new: true })
  .then((data) => {
    console.log(data); // Log the updated document
  })
  .catch((err) => {
    console.log(err); // Log any errors
  });
*/

/*
// Delete one user document by name
User.deleteOne({ name: "bruce" }).then((res) => {
  console.log(res); // Log the delete result
});
*/

/*
// Delete multiple user documents with age 18
User.deleteMany({ age: 18 }).then((res) => {
  console.log(res); // Log the delete result
});
*/

/*
// Find a user by ID and delete the document
User.findByIdAndDelete("67dee6d084f5294799b1a5e3").then((res) => {
  console.log(res); // Log the delete result
});
*/

/*
// Find one user by name and delete the document
User.findOneAndDelete({ name: "tony" }).then((res) => {
  console.log(res); // Log the delete result
});
*/
