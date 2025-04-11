// Importing the Express framework
const express = require("express");
// Initializing an Express application
const app = express();
// Importing a custom error class for handling errors
const ExpressError = require("./ExpressError");

// Middleware to check for a specific token in the query parameters
const checkToken = (req, res, next) => {
  let { token } = req.query; // Extracting the 'token' from the query string

  // If the token matches "giveaccess", proceed to the next middleware/route handler
  if (token === "giveaccess") {
    next();
  }

  // If the token is invalid or missing, throw a custom error
  throw new ExpressError(401, "ACCESS DENIED!");
};

// Route to simulate an error (undefined variable will cause a runtime error)
app.get("/err", (req, res) => {
  abcd = abcd; // This will throw a ReferenceError
});

// Route that requires a valid token to access
app.get("/api", checkToken, (req, res) => {
  res.send("data"); // Sends a response if the token is valid
});

// Root route that responds with a simple message
app.get("/", (req, res) => {
  res.send("Hi, I am root."); // Sends a greeting message
});

// Route to simulate an admin access error
app.get("/admin", (req, res) => {
  // Throws a custom error with a 403 status code
  throw new ExpressError(403, "Access to admin is Forbidden");
});

// Error-handling middleware
app.use("/", (err, req, res, next) => {
  // Destructures the error object to get the status and message
  let { status = 500, message = "Some Error Occurred" } = err;
  // Sends the error status and message as the response
  res.status(status).send(message);
});

// Optional middleware to handle 404 errors (currently commented out)
// app.use((req, res) => {
//   res.status(404).send("Page not found!");
// });

// Starts the server and listens on port 8080
app.listen(8080, () => {
  console.log("server listening to port 8080");
});
