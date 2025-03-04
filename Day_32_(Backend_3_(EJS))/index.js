let express = require("express"); // Importing Express.js framework
let app = express(); // Creating an instance of an Express application
let path = require("path"); // Importing 'path' module to work with file and directory paths

let port = 8080; // Defining the port number on which the server will run

// Middleware to serve static files (JavaScript and CSS) from 'public' directory
app.use(express.static(path.join(__dirname, "public/js")));
app.use(express.static(path.join(__dirname, "public/css")));

// Setting up the view engine to use EJS for rendering dynamic HTML pages
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); // Setting the directory for EJS template files

// Route for the homepage, renders 'home.ejs'
app.get("/", (req, res) => {
  res.render("home.ejs"); // Rendering 'home.ejs' template when the root URL is accessed
});

// Another route for '/home', sends a plain text response
app.get("/home", (req, res) => {
  res.send("hello"); // Sending a simple text response
});

// Dynamic route for '/ig/:username' to fetch Instagram-like data based on username
app.get("/ig/:username", (req, res) => {
  let { username } = req.params; // Extracting the username from URL parameters
  let instaData = require("./data.json"); // Importing JSON file containing user data
  let data = instaData[username]; // Retrieving the user's data from JSON file

  if (data) {
    res.render("instagram.ejs", { data }); // Rendering 'instagram.ejs' and passing user data
  } else {
    res.render("error.ejs"); // If user data not found, render an error page
  }
});

// Route for '/rolldice' that generates a random dice roll result
app.get("/rolldice", (req, res) => {
  let diceValue = Math.floor(Math.random() * 6) + 1; // Generating a random number between 1 and 6
  res.render("rolldice.ejs", { diceValue }); // Rendering 'rolldice.ejs' and passing the dice result
});

// Starting the server and listening on the specified port
app.listen(port, () => {
  console.log(`listening on port ${port}`); // Logging a message to indicate the server is running
});
