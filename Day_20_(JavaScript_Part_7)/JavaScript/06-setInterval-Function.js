console.log("Hi there!");

let id = setInterval( () => {
  console.log("Apna College");
}, 2000); // This function will repetively execute block of code after every 2000ms(2s).

console.log(id); // Every "setInterval" function has it's unique id.
clearInterval(id); // This function will stop the "setInterval" function.

let id2 = setInterval( () => {
  console.log("Hello");
}, 2000); // This function will repetively execute block of code after every 2000ms(2s).

console.log(id2); // Every "setInterval" function has it's unique id.
// clearInterval(id2); // This function will stop the "setInterval" function.

console.log("Welcome to");