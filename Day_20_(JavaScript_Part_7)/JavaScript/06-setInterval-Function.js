console.log("Hi there!");


// setInterval function is used to execute a piece of code repeatedly after a specified delay.
// setInterval function returns an id which can be used to stop the execution of the code.
let id = setInterval( () => {
  console.log("Apna College");
}, 2000); // This function will repetively execute block of code after every 2000ms(2s).

console.log(`Id of first set interval ${id}`); // Every "setInterval" function has it's unique id.
// clearInterval(id); // This function will stop the "setInterval" function.



let id2 = setInterval( () => {
  console.log("Hello");
}, 2000); // This function will repetively execute block of code after every 2000ms(2s).

console.log(`Id of second set interval ${id2}`); // Every "setInterval" function has it's unique id.
// clearInterval(id2); // This function will stop the "setInterval" function.


// This will stop the execution of the code after 10 seconds.
setTimeout(() => {
  clearInterval(id);
  clearInterval(id2);
}, 10000);

console.log("Welcome to");