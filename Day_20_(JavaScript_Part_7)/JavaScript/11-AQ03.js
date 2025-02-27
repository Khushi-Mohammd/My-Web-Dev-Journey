// Question: What will be the output of the following code?

const object = {
  message: 'Hello, World!', // A property named 'message' containing a string
  logMessage() {
    // A method to log the 'message' property of the current context (this)
    console.log(this.message);
  }
};

// Passing the 'logMessage' method directly to setTimeout
setTimeout(object.logMessage, 1000); 

/*
Explanation:
1. When you pass 'object.logMessage' directly to 'setTimeout', the reference to the 'object' context is lost.
   - 'setTimeout' executes the function in the global context, so 'this' inside 'logMessage' does not refer to 'object'.
   - Instead, 'this' points to the global object (or 'undefined' in strict mode).

2. As a result, 'this.message' becomes 'undefined' because there is no 'message' property in the global scope.

3. To fix this, you can explicitly bind 'this' to the 'object' using '.bind()' or use an arrow function.
*/
