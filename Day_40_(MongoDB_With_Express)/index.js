// Importing required modules
const express = require("express"); // Express framework for building web applications
const app = express(); // Initializing the Express application
const mongoose = require("mongoose"); // Mongoose for interacting with MongoDB
const path = require("path"); // Path module for handling file paths
const Chat = require("./models/chat.js"); // Importing the Chat model
const methodOverride = require("method-override"); // Middleware to support HTTP verbs like PUT and DELETE

// Setting up the view engine and static files
app.set("view engine", "ejs"); // Setting EJS as the template engine
app.set("views", path.join(__dirname, "views")); // Setting the views directory
app.use(express.static(path.join(__dirname, "public"))); // Serving static files from the "public" directory
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded data from forms
app.use(methodOverride("_method")); // Middleware to override HTTP methods using query parameters

// Connecting to MongoDB
main()
  .then(() => console.log("connection successful")) // Log success message if connection is successful
  .catch((err) => console.log(err)); // Log error if connection fails

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp"); // Connecting to the MongoDB database
}

// Routes

// Root route
app.get("/", (req, res) => {
  res.send("root is working"); // Sending a simple response for the root route
});

// Route to display all chats
app.get("/chats", async (req, res) => {
  let chats = await Chat.find(); // Fetching all chat documents from the database
  res.render("index.ejs", { chats }); // Rendering the "index.ejs" template with the chats data
});

// Route to display the form for creating a new chat
app.get("/chats/new", (req, res) => {
  res.render("new.ejs"); // Rendering the "new.ejs" template
});

// Route to handle the creation of a new chat
app.post("/chats", (req, res) => {
  let { from, to, msg } = req.body; // Extracting form data from the request body

  let newChat = new Chat({
    from: from, // Sender of the message
    msg: msg, // Message content
    to: to, // Recipient of the message
    created_at: new Date(), // Timestamp for when the chat was created
  });

  newChat
    .save() // Saving the new chat document to the database
    .then((res) => console.log("Chat was saved")) // Log success message
    .catch((err) => console.log(err)); // Log error if saving fails

  res.redirect("/chats"); // Redirecting to the chats page
});

// Route to display the form for editing a chat
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params; // Extracting the chat ID from the route parameters
  let chat = await Chat.findById(id); // Fetching the chat document by ID
  res.render("edit.ejs", { chat }); // Rendering the "edit.ejs" template with the chat data
});

// Route to handle updating a chat
app.put("/chats/:id", async (req, res) => {
  let { id } = req.params; // Extracting the chat ID from the route parameters
  let { msg: newMsg } = req.body; // Extracting the updated message from the request body
  let updatedChat = await Chat.findByIdAndUpdate(
    id, // ID of the chat to update
    { msg: newMsg }, // Updating the message field
    { runValidators: true, new: true } // Options: validate the update and return the updated document
  );
  res.redirect("/chats"); // Redirecting to the chats page
});

// Route to handle deleting a chat
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params; // Extracting the chat ID from the route parameters
  await Chat.findByIdAndDelete(id); // Deleting the chat document by ID
  res.redirect("/chats"); // Redirecting to the chats page
});

// Starting the server
app.listen(8080, () => {
  console.log("server is listening on port 8080"); // Log message indicating the server is running
});
