// Importing the express module to create an Express application
const express = require("express");

// Creating an instance of an Express application
const app = express();

// Defining the port number on which the server will listen
const port = 8080;

// Importing the path module to work with file and directory paths
const path = require("path");

// Importing the uuid module to generate unique IDs
const { v4: uuidv4 } = require("uuid");

// Importing the method-override module to support HTTP verbs like PUT and DELETE
const methodOverride = require("method-override");

// Middleware to parse URL-encoded data from the request body
app.use(express.urlencoded({ extended: true }));

// Middleware to override HTTP methods using a query parameter
app.use(methodOverride("_method"));

// Setting the view engine to EJS for rendering templates
app.set("view engine", "ejs");

// Setting the directory for the views
app.set("views", path.join(__dirname, "views"));

// Middleware to serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Initializing an array of posts with some sample data
let posts = [
  {
    id: uuidv4(), // Generating a unique ID for the post
    username: "apnacollege", // Username of the post author
    content: "I love coding", // Content of the post
  },
  {
    id: uuidv4(), // Generating a unique ID for the post
    username: "shradhakhapra", // Username of the post author
    content: "Hard work is important to achieve success", // Content of the post
  },
  {
    id: uuidv4(), // Generating a unique ID for the post
    username: "rahulkumar", // Username of the post author
    content: "I got selected for my 1st internship", // Content of the post
  },
];

// Route to display all posts
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts }); // Rendering the index.ejs template with the posts data
});

// Route to display the form for creating a new post
app.get("/posts/new", (req, res) => {
  res.render("new.ejs"); // Rendering the new.ejs template
});

// Route to handle the creation of a new post
app.post("/posts", (req, res) => {
  let { username, content } = req.body; // Extracting username and content from the request body
  let id = uuidv4(); // Generating a unique ID for the new post
  posts.push({ id, username, content }); // Adding the new post to the posts array
  res.redirect("/posts"); // Redirecting to the posts page
});

// Route to display a specific post by ID
app.get("/posts/:id", (req, res) => {
  let { id } = req.params; // Extracting the post ID from the request parameters
  let post = posts.find((p) => id === p.id); // Finding the post with the matching ID
  res.render("show.ejs", { post }); // Rendering the show.ejs template with the post data
});

// Route to handle the update of a post's content
app.patch("/posts/:id", (req, res) => {
  let { id } = req.params; // Extracting the post ID from the request parameters
  let newContent = req.body.content; // Extracting the new content from the request body
  let post = posts.find((p) => id === p.id); // Finding the post with the matching ID
  post.content = newContent; // Updating the post's content
  res.redirect("/posts"); // Redirecting to the posts page
});

// Route to display the form for editing a post
app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params; // Extracting the post ID from the request parameters
  let post = posts.find((p) => id === p.id); // Finding the post with the matching ID
  res.render("edit.ejs", { post }); // Rendering the edit.ejs template with the post data
});

// Route to handle the deletion of a post
app.delete("/posts/:id", (req, res) => {
  let { id } = req.params; // Extracting the post ID from the request parameters
  posts = posts.filter((p) => id !== p.id); // Filtering out the post with the matching ID
  res.redirect("/posts"); // Redirecting to the posts page
});

// Route to handle the root URL
app.get("/", (req, res) => {
  res.send("server working well"); // Sending a simple response
});

// Starting the server and listening on the defined port
app.listen(port, () => {
  console.log("Listening to port : 8080"); // Logging a message to the console
});
