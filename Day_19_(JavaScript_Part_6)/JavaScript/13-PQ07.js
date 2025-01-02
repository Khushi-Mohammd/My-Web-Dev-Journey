let greet = "Hello"; // Global scope

function outerfunc() {
  let greet = "Namaste";
  console.log(greet); // Function scope

  function innerfunc() {
    console.log(greet); // Lexical scope
  }

  // innerfunc();
}

console.log(greet);
outerfunc();