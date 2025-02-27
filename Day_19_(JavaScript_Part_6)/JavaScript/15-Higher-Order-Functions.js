// Higher-order function: A function that takes another function as an argument
let multipleGreet = function (func, count) { 
  // Loops 'count' times and calls the passed function each time
  for (let i = 1; i <= count; i++) {
    func(); // Executes the function passed as an argument
  }
}

// Function expression assigned to 'greet' variable
let greet = function () {
  console.log("Hello"); // Prints "Hello" to the console
}

// Calling multipleGreet with 'greet' function and 5 as count
multipleGreet(greet, 5); 
// Outputs: "Hello" 5 times

// Calling multipleGreet with an anonymous function that prints "Namaste" and count as 10
multipleGreet(function () { console.log("Namaste") }, 10); 
// Outputs: "Namaste" 10 times
