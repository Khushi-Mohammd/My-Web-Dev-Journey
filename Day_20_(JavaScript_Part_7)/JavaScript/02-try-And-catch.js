console.log("Hello"); 
console.log("Hello"); 

// let a = 5; // 'a' is commented out, so it is not defined

// Using try-catch to handle errors
try {
  console.log(a); // This will cause an error because 'a' is not defined
} catch(err) { // If an error occurs, the catch block executes
  console.log("Caught an error.. a is not defined"); // Custom error message
  console.log(err); // Logs the actual error details
}

console.log("Hello 2"); 
console.log("Hello 2"); 
console.log("Hello 2");
