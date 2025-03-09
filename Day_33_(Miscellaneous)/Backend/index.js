// Importing the Express.js module
let express = require("express"); // require() is used to import the Express library

// Creating an instance of an Express application
let app = express();

// Defining the port number on which the server will run
let port = 8080;

// Middleware to parse URL-encoded data from incoming requests
app.use(express.urlencoded({ extended: true }));
// extended: true allows nested objects in URL-encoded data

// Middleware to parse incoming JSON data
app.use(express.json());

// Handling GET requests to the '/request' route
app.get("/request", (req, res) => {
  let { user, password } = req.query; // Extracting query parameters 'user' and 'password' from the URL
  res.send(`standard GET request. Welcome ${user}!`); // Sending a response with the extracted 'user' parameter
});

// Handling POST requests to the '/request' route
app.post("/request", (req, res) => {
  let { user, password } = req.body; // Extracting 'user' and 'password' from the request body (sent via POST method)
  res.send(`standard POST request. Welcome ${user}`); // Sending a response with the extracted 'user' parameter
});

// Starting the server and making it listen on the specified port
app.listen(port, () => {
  console.log(`Listening on port ${port}`); // Logs a message indicating that the server is running
});
