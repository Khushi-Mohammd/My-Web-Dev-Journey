// Importing the Mongoose library
const mongoose = require("mongoose");

// Defining the schema for the "Chat" model
const chatSchema = new mongoose.Schema({
  // Field for the sender of the message
  from: {
    type: String, // Data type is a string
    required: true, // This field is mandatory
  },

  // Field for the recipient of the message
  to: {
    type: String, // Data type is a string
    required: true, // This field is mandatory
  },

  // Field for the message content
  msg: {
    type: String, // Data type is a string
    maxLength: 50, // Maximum length of the message is 50 characters
  },

  // Field for the timestamp when the chat was created
  created_at: {
    type: Date, // Data type is a date
    required: true, // This field is mandatory
  },
});

// Creating the "Chat" model using the schema
const Chat = mongoose.model("Chat", chatSchema);

// Exporting the "Chat" model to be used in other parts of the application
module.exports = Chat;
