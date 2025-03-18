// Importing required modules
const { faker } = require("@faker-js/faker"); // Faker library to generate fake data
const mysql = require("mysql2"); // MySQL library to interact with MySQL database
const express = require("express"); // Express framework for building web applications
const app = express(); // Creating an instance of Express
const path = require("path"); // Path module to handle file paths
const methodOverride = require("method-override"); // Method-override to support HTTP verbs like PUT and DELETE
const { v4: uuidv4 } = require("uuid"); // UUID library to generate unique IDs

// Middleware setup
app.use(methodOverride("_method")); // Override HTTP methods using query parameter
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Setting up view engine
app.set("view engine", "ejs"); // Setting EJS as the template engine
app.set("views", path.join(__dirname, "views")); // Setting the directory for views

// Database connection setup
const connection = mysql.createConnection({
  host: "localhost", // Database host
  user: "root", // Database user
  database: "delta_app", // Database name
  password: "password", // Database password
});

// Route to render home page with user count
app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user;`; // SQL query to count users
  try {
    connection.query(q, (err, result) => {
      // Executing the query
      if (err) throw err; // Throw error if any
      let count = result[0]["count(*)"]; // Extracting count from result
      res.render("home.ejs", { count }); // Rendering home.ejs with count
    });
  } catch (err) {
    console.log(err); // Log error
    res.send("some error in DB"); // Send error response
  }
});

// Route to render all users
app.get("/user", (req, res) => {
  let q = `SELECT * FROM user;`; // SQL query to select all users
  try {
    connection.query(q, (err, users) => {
      // Executing the query
      if (err) throw err; // Throw error if any
      res.render("showuser.ejs", { users }); // Rendering showuser.ejs with users
    });
  } catch (err) {
    console.log(err); // Log error
    res.send("some error in DB"); // Send error response
  }
});

// Route to render edit user page
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params; // Extracting user ID from request parameters
  let q = `SELECT * FROM user WHERE id='${id}'`; // SQL query to select user by ID
  try {
    connection.query(q, (err, result) => {
      // Executing the query
      if (err) throw err; // Throw error if any
      let user = result[0]; // Extracting user from result
      res.render("edit.ejs", { user }); // Rendering edit.ejs with user
    });
  } catch (err) {
    console.log(err); // Log error
    res.send("some error in DB"); // Send error response
  }
});

// Route to update user
app.patch("/user/:id", (req, res) => {
  let { id } = req.params; // Extracting user ID from request parameters
  let { password: formPass, username: newUsername } = req.body; // Extracting form data
  let q = `SELECT * FROM user WHERE id='${id}'`; // SQL query to select user by ID

  try {
    connection.query(q, (err, result) => {
      // Executing the query
      if (err) throw err; // Throw error if any
      let user = result[0]; // Extracting user from result

      if (formPass != user.password) {
        // Checking if password matches
        res.send("Wrong password!"); // Send error response if password doesn't match
      } else {
        let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`; // SQL query to update username
        connection.query(q2, (err, result) => {
          // Executing the update query
          if (err) throw err; // Throw error if any
          res.redirect("/user"); // Redirect to user list
        });
      }
    });
  } catch (err) {
    console.log(err); // Log error
    res.send("some error in DB"); // Send error response
  }
});

// Route to render new user form
app.get("/user/new", (req, res) => {
  res.render("new.ejs"); // Rendering new.ejs
});

// Route to add new user
app.post("/user", (req, res) => {
  let { username, email, password } = req.body; // Extracting form data
  let q = `INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)`; // SQL query to insert new user
  let user = [uuidv4(), username, email, password]; // Creating user array with UUID

  try {
    connection.query(q, user, (err, result) => {
      // Executing the insert query
      if (err) throw err; // Throw error if any
      res.redirect("/user"); // Redirect to user list
    });
  } catch (err) {
    console.log(err); // Log error
    res.send("Got some error while adding the user to DB"); // Send error response
  }
});

// Route to render delete user confirmation page
app.get("/user/:id/delete", (req, res) => {
  let { id } = req.params; // Extracting user ID from request parameters
  let q = `SELECT * FROM user WHERE id='${id}'`; // SQL query to select user by ID

  try {
    connection.query(q, (err, result) => {
      // Executing the query
      if (err) throw err; // Throw error if any
      let user = result[0]; // Extracting user from result
      res.render("delete.ejs", { user }); // Rendering delete.ejs with user
    });
  } catch (err) {
    res.send("some error in DB"); // Send error response
  }
});

// Route to delete user
app.delete("/user/:id", (req, res) => {
  let { id } = req.params; // Extracting user ID from request parameters
  let { password: formPass } = req.body; // Extracting form data
  let q = `SELECT * FROM user WHERE id='${id}'`; // SQL query to select user by ID

  try {
    connection.query(q, (err, result) => {
      // Executing the query
      if (err) throw err; // Throw error if any
      let user = result[0]; // Extracting user from result

      if (user.password != formPass) {
        // Checking if password matches
        res.send("Wrong password!"); // Send error response if password doesn't match
      } else {
        let q2 = `DELETE FROM user WHERE id='${id}'`; // SQL query to delete user

        connection.query(q2, (err, result) => {
          // Executing the delete query
          if (err) throw err; // Throw error if any
          res.redirect("/user"); // Redirect to user list
        });
      }
    });
  } catch (err) {
    console.log("some error in DB"); // Log error
  }
});

// Starting the server
app.listen("8080", () => {
  console.log("listening to port 8080"); // Log server start
});

//==============================================================================//

// let getRandomUser = () => {
//   return [
//     faker.string.uuid(), // Generate random UUID
//     faker.internet.username(), // Generate random username
//     faker.internet.email(), // Generate random email
//     faker.internet.password(), // Generate random password
//   ];
// };

// let q = "INSERT INTO user (id, username, email, password) VALUES ?"; // SQL query to insert multiple users
// // let users = [
// //   ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
// //   ["123c", "123_newuserc", "abc@gmail.comc", "abcc"],
// // ];

// let data = [];
// for (let i = 1; i <= 7; i++) {
//   data.push(getRandomUser()); // Generate 7 random users
// }

// try {
//   connection.query(q, [data], (err, result) => { // Executing the insert query
//     if (err) throw err; // Throw error if any
//     console.log(result); // Log result
//     console.log(result.length); // Log result length
//     console.log(result[0]); // Log first result
//     console.log(result[1]); // Log second result
//   });
// } catch (err) {
//   console.log(err); // Log error
// }

// connection.end(); // Close the database connection
