console.log("Hi there!"); // This line runs immediately

// setTimeout function is used to execute a piece of code after a specified delay.
setTimeout(() => {
  console.log("Apna College"); // This code executes after a delay of 4000ms (4 seconds)
}, 4000); 

// Here, 4000 is the time in milliseconds (1000ms = 1 second).
// The function inside setTimeout will execute **after** 4 seconds but does NOT pause the execution of the rest of the script.

console.log("Welcome to"); // This line runs immediately, without waiting for setTimeout to complete.
