// Importing the Mongoose library to interact with MongoDB
const mongoose = require("mongoose");

// Importing the Chat model to perform database operations
const Chat = require("./models/chat.js");

// Connecting to the MongoDB database
main()
  .then(() => console.log("connection successful")) // Log a success message if the connection is successful
  .catch((err) => console.log(err)); // Log an error message if the connection fails

// Function to establish a connection to the MongoDB database
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp"); // Connect to the "whatsapp" database on the local MongoDB server
}

// Array of chat objects to be inserted into the database
let allChats = [
  {
    from: "John", // Sender of the message
    to: "Arthur", // Recipient of the message
    msg: "Can you send me chemistry notes", // Message content
    created_at: new Date(), // Timestamp for when the chat was created
  },
  {
    from: "Kratos",
    to: "Atreus",
    msg: "Could you teach me JS Callbacks",
    created_at: new Date(),
  },
  {
    from: "Bruce",
    to: "Alfred",
    msg: "Could you prepare the Batmobile?",
    created_at: new Date(),
  },
  {
    from: "Tony",
    to: "Pepper",
    msg: "Please check the Stark Industries reports",
    created_at: new Date(),
  },
  {
    from: "Harry",
    to: "Hermione",
    msg: "Can you help me with the Patronus charm?",
    created_at: new Date(),
  },
  {
    from: "Peter",
    to: "Ned",
    msg: "Want to hang out at the arcade?",
    created_at: new Date(),
  },
  {
    from: "Sherlock",
    to: "Watson",
    msg: "Meet me at 221B Baker Street",
    created_at: new Date(),
  },
  {
    from: "Mario",
    to: "Luigi",
    msg: "Let's rescue Princess Peach!",
    created_at: new Date(),
  },
  {
    from: "Thor",
    to: "Loki",
    msg: "We need to talk about Asgard",
    created_at: new Date(),
  },
  {
    from: "Clark",
    to: "Lois",
    msg: "I have a story for the Daily Planet",
    created_at: new Date(),
  },
];

// Inserting the array of chat objects into the "Chat" collection in the database
Chat.insertMany(allChats);
