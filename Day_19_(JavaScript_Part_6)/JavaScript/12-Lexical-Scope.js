function outerFunc() {
  // outerFunc is the parent function
  // Variables declared here are accessible to the child functions due to lexical scope.

  let x = 5; // 'x' is declared in the outer function scope
  let y = 6; // 'y' is declared in the outer function scope

  function innerFunc() {
    // innerFunc is a child (nested) function of outerFunc.
    // Lexical scope allows innerFunc to access variables declared in its parent function (outerFunc).

    let a = 10; // 'a' is declared in the inner function scope
    console.log(x); // Accesses 'x' from the outerFunc scope (lexical scope)
    console.log(y); // Accesses 'y' from the outerFunc scope (lexical scope)
  }

  console.log(a); // Error: 'a' is not accessible here as it is defined in the function scope of innerFunc.
  innerFunc(); // Call innerFunc to execute the inner function.
}

outerFunc(); // Call outerFunc to start execution.
