let greet = "Hello"; // Global scope

function outerfunc() {
  let greet = "Namaste";
  console.log(greet); // Function scope

  function innerfunc() {
    console.log(greet); // Lexical scope
  }
 
}

console.log(greet); // Output: Hello
outerfunc(); // Output: Namaste