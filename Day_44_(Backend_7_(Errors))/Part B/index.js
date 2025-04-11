const express = require("express"); // Importing the Express framework
const app = express(); // Initializing an Express application
const mongoose = require("mongoose"); // Importing Mongoose for MongoDB interaction
const path = require("path"); // Importing the 'path' module for handling file paths
const Chat = require("./models/chat.js"); // Importing the Chat model
const methodOverride = require("method-override"); // Importing method-override for HTTP method overrides
const ExpressError = require("./ExpressError"); // Importing a custom error class

// Setting up the view engine as EJS and defining the views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serving static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Middleware to parse URL-encoded data and override HTTP methods
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Connecting to the MongoDB database
main()
  .then(() => console.log("connection successful")) // Logs success message if connection is successful
  .catch((err) => console.log(err)); // Logs error if connection fails

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp"); // Connecting to the database
}

// Root route to verify the server is working
app.get("/", (req, res) => {
  res.send("root is working"); // Sends a simple response
});

// Route to fetch and display all chats
app.get("/chats", async (req, res, next) => {
  try {
    let chats = await Chat.find(); // Fetches all chat documents from the database
    res.render("index.ejs", { chats }); // Renders the 'index.ejs' view with the chats data
  } catch (err) {
    next(err); // Passes errors to the error-handling middleware
  }
});

// Route to render a form for creating a new chat
app.get("/chats/new", (req, res) => {
  res.render("new.ejs"); // Renders the 'new.ejs' view
});

// Route to create a new chat
app.post(
  "/chats",
  asyncWrap(async (req, res, next) => {
    let { from, to, msg } = req.body; // Extracts data from the request body

    let newChat = new Chat({
      from: from,
      msg: msg,
      to: to,
      created_at: new Date(), // Sets the current date as the creation time
    });

    await newChat.save(); // Saves the new chat to the database

    res.redirect("/chats"); // Redirects to the chats page
  })
);

// Utility function to wrap async functions and handle errors
function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err)); // Catches errors and passes them to the next middleware
  };
}

// Route to fetch and display a specific chat by ID
app.get(
  "/chats/:id",
  asyncWrap(async (req, res, next) => {
    let { id } = req.params; // Extracts the chat ID from the route parameters
    let chat = await Chat.findById(id); // Finds the chat by ID

    if (!chat) {
      next(new ExpressError("404", "Chat not found")); // Throws a custom error if the chat is not found
    }

    res.render("edit.ejs", { chat }); // Renders the 'edit.ejs' view with the chat data
  })
);

// Route to render the edit form for a specific chat
app.get("/chats/:id/edit", async (req, res) => {
  try {
    let { id } = req.params; // Extracts the chat ID from the route parameters
    let chat = await Chat.findById(id); // Finds the chat by ID
    res.render("edit.ejs", { chat }); // Renders the 'edit.ejs' view with the chat data
  } catch (err) {
    next(err); // Passes errors to the error-handling middleware
  }
});

// Route to update a specific chat
app.put(
  "/chats/:id",
  asyncWrap(async (req, res) => {
    try {
      let { id } = req.params; // Extracts the chat ID from the route parameters
      let { msg: newMsg } = req.body; // Extracts the updated message from the request body
      let updatedChat = await Chat.findByIdAndUpdate(
        id,
        { msg: newMsg }, // Updates the message field
        { runValidators: true, new: true } // Runs validators and returns the updated document
      );
      res.redirect("/chats"); // Redirects to the chats page
    } catch (err) {
      next(err); // Passes errors to the error-handling middleware
    }
  })
);

// Route to delete a specific chat
app.delete(
  "/chats/:id",
  asyncWrap(async (req, res) => {
    let { id } = req.params; // Extracts the chat ID from the route parameters
    await Chat.findByIdAndDelete(id); // Deletes the chat by ID
    res.redirect("/chats"); // Redirects to the chats page
  })
);

// Function to handle validation errors
const handleValidationErr = (err) => {
  console.log("This was a validation error. Please follow rules"); // Logs a validation error message
  console.dir(err.message); // Logs the error message details
  return err; // Returns the error object
};

// Middleware to handle validation errors
app.use((err, req, res, next) => {
  console.log(err.name); // Logs the error name
  if (err.name === "ValidationError") {
    err = handleValidationErr(err); // Handles validation errors
  }
  next(err); // Passes the error to the next middleware
});

// General error-handling middleware
app.use((err, req, res, next) => {
  let { status = 500, message = "Some Error Occurred" } = err; // Sets default status and message if not provided
  res.status(status).send(message); // Sends the error status and message as the response
});

// Starts the server and listens on port 8080
app.listen(8080, () => {
  console.log("server is listening on port 8080"); // Logs a message indicating the server is running
});
