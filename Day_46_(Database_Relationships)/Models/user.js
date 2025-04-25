const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

// Defining a schema for a user with an embedded relationship
// The 'addresses' field is an array of objects, representing an embedded relationship
// Each address object contains 'location' and 'city' fields
const userSchema = new Schema({
  username: String,
  addresses: [
    {
      _id: false, // Prevents MongoDB from auto-generating an _id for each embedded document
      location: String,
      city: String,
    },
  ],
});

// Creating a User model
const User = mongoose.model("User", userSchema);

// Function to add a user with multiple addresses
const addUsers = async () => {
  let user1 = new User({
    username: "wayneenterprises",
    addresses: [
      {
        location: "Wayne Manor",
        city: "outside Gotham City",
      },
    ],
  });

  // Adding another address to the embedded array
  user1.addresses.push({
    location: "Gotham Tower, Financial District",
    city: "Gotham City",
  });

  // Saving the user document with embedded addresses
  let result = await user1.save();
  console.log(result);
};

addUsers();
