// Select the first <form> element from the document
let form = document.querySelector("form");

// Add a submit event listener to the form
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents the default form submission (stops page reload or navigation)

  // Selecting input elements using their IDs (commented out alternative method)
  // let user = document.querySelector("#user");
  // let pass = document.querySelector("#pass");

  // Selecting input elements using the "elements" property of the form
  let user = this.elements[0]; // Refers to the first input field inside the form (username)
  let pass = this.elements[1]; // Refers to the second input field inside the form (password)

  console.log(user.value); // Logs the value entered in the username field
  console.log(pass.value); // Logs the value entered in the password field

  // Displays an alert message with the entered username and password
  alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});
