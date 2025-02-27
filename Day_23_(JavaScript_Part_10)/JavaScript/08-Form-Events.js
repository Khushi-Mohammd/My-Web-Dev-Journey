// Select the first <form> element from the document
let form = document.querySelector("form");

// Add a submit event listener to the form
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents the default form submission behavior (stops page reload or navigation)
  
  // Without preventDefault(), the form would refresh the page or navigate to another page (based on the action attribute)
  // This is useful when handling form validation or sending form data using JavaScript instead of reloading the page

  alert("form was submitted"); // Displays an alert when the form is submitted
});
