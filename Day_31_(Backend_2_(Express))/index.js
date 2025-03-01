// Importing the Express module
const express = require("express");

// Creating an instance of an Express application
const app = express();

// Defining the port number on which the server will run
let port = 8080;

// Starting the Express server and making it listen on the defined port
app.listen(port, () => {
  console.log(`app is listening on port ${port}`); // Logging a message when the server starts successfully
});

/*
app.use((req, res) => {
  // Middleware that runs for every incoming request
  // console.log(req); // Logs the request object (commented out for now)
  
  console.log("request received"); // Logs a message whenever a request is received

  // Sending a simple text response
  // res.send("this is a basic response");

  // Sending a JSON response
  // res.send({
  //   name: "apple",
  //   color: "red",
  // });

  // Sending an HTML response containing a heading and an unordered list
  let code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>";
  res.send(code);
});
*/

// Defining a GET route for the root URL ("/")
app.get("/", (req, res) => {
  res.send("hello, i am root"); // Sends a response when a user visits the root URL
});

/*
app.get("/apple", (req, res) => {
  res.send("you contacted apple path"); // Sends a response when "/apple" is accessed
});

app.get("/orange", (req, res) => {
  res.send("you contacted orange path"); // Sends a response when "/orange" is accessed
});

app.get("*", (req, res) => {
  res.send("this path does not exist"); // Handles all undefined routes using the wildcard "*"
});

app.post("/", (req, res) => {
  res.send("you sent a post request to root"); // Handles POST requests sent to the root URL
});
*/

// Dynamic route handling using route parameters
app.get("/:username/:id", (req, res) => {
  // console.log(req.params);

  // Extracting route parameters from the request
  let { username, id } = req.params;

  // Sending a response that dynamically displays the username from the URL
  res.send(`<h1>Welcome to the page of @${username}</h1>`);
});

// Handling query parameters in the "/search" route
app.get("/search", (req, res) => {
  // console.log(req.query);

  // Extracting the query parameter 'q' from the request
  let { q } = req.query;

  // Checking if a search query was provided
  if (!q) {
    res.send("<h1>nothing searched</h1>"); // Sending a response if no search query is provided
  }

  // Sending a response with the search results when a query is given
  res.send(`<h1>search results for query: ${q}</h1>`);
});
