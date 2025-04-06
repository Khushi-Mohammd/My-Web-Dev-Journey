// Importing the Express framework
const express = require("express");
const app = express(); // Creating an instance of an Express application

// Middleware examples (commented out):
// These are examples of middleware functions that can be used to log requests or perform specific actions before passing control to the next middleware or route handler.

// app.use((req, res, next) => {
//   console.log("Hi, I am 1st middleware");
//   next(); // Pass control to the next middleware
// });

// app.use((req, res, next) => {
//   console.log("Hi, I am 2nd middleware");
//   next(); // Pass control to the next middleware
// });

// app.use((req, res, next) => {
//   console.log(req.method, req.hostname, req.path); // Log request details
//   next(); // Pass control to the next middleware
// });

// Middleware for a specific route (commented out):
// This middleware will only run for requests to the "/random" route.
// app.use("/random", (req, res, next) => {
//   console.log("I am only for random");
//   next(); // Pass control to the next middleware
// });

// Middleware for "/api" route to check for a query parameter token (commented out):
// If the token is "giveaccess", the request proceeds; otherwise, access is denied.
// app.use("/api", (req, res, next) => {
//   let { token } = req.query;

//   if (token === "giveaccess") {
//     next(); // Pass control to the next middleware or route handler
//   }
//   res.send("ACCESS DENIED!");
// });

// Custom middleware function to check for a token in the query parameters
const checkToken = (req, res, next) => {
  let { token } = req.query; // Extract the token from the query parameters

  if (token === "giveaccess") {
    next(); // If the token is valid, pass control to the next middleware or route handler
  }
  // If the token is invalid, throw an error
  throw new Error("ACCESS DENIED!");
};

// Example of an error-prone route (commented out):
// This route will throw an error because the variable `abcd` is not defined.
// app.get("/wrong", (req, res) => {
//   abcd = abcd; // This will cause a ReferenceError
// });

// Route for "/api" that uses the `checkToken` middleware
app.get("/api", checkToken, (req, res) => {
  res.send("data"); // Send a response if the token is valid
});

// Route for the root URL "/"
app.get("/", (req, res) => {
  res.send("Hi, I am root."); // Send a response for the root route
});

// Route for "/random"
app.get("/random", (req, res) => {
  res.send("this is a random page"); // Send a response for the "/random" route
});

// Example of a logger middleware (commented out):
// This middleware logs the request method, hostname, path, and the current timestamp.
// app.use((req, res, next) => {
//   res.time = Date.now(); // Add a timestamp to the response object
//   console.log(req.method, req.hostname, req.path, res.time); // Log the details
//   next(); // Pass control to the next middleware
// });

// Middleware to handle 404 errors (for undefined routes)
app.use((req, res) => {
  res.status(404).send("Page not found!"); // Send a 404 response for unmatched routes
});

// Start the server and listen on port 8080
app.listen(8080, () => {
  console.log("server listening to port 8080"); // Log that the server is running
});
