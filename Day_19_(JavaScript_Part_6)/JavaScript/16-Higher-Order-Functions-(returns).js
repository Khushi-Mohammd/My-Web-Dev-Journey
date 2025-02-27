// A factory function that returns a function based on the "request" ("odd" or "even")
function oddOrEvenFactory(request) {
  // Check if the request is "odd"
  if (request == "odd") {
    // Return a function to check if a number is odd
    return function(n) {
      console.log(!(n % 2 == 0)); // Prints 'true' if the number is odd, 'false' otherwise
    }
  } 
  // Check if the request is "even"
  else if (request == "even") {
    let even = function(n) {
      console.log(n % 2 == 0); // Prints 'true' if the number is even, 'false' otherwise
    }
    // Return a function to check if a number is even
    return even;
  } 
  // If the request is invalid, print an error message
  else {
    console.log("Wrong request!"); // Invalid request handling
  }
}

// Initial request: "odd"
let request = "odd";

// Call the factory function with "odd" and store the returned function
let func = oddOrEvenFactory(request);

// Use the returned function to check numbers
func(45);  // Output: true (45 is odd)
func(200); // Output: false (200 is even)

// Change the request to "even"
request = "even";

// Call the factory function with "even" and store the returned function
func = oddOrEvenFactory(request);

// Use the returned function to check numbers
func(45);  // Output: false (45 is not even)
func(200); // Output: true (200 is even)
