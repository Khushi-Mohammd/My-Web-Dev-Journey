const student = {
  name: "aman",
  marks: 95,
  
  // 'prop' is assigned 'this' at the time of object creation.
  // In the global scope (outside any function), 'this' refers to the window object in browsers.
  prop: this, // Refers to the global object, not 'student'

  getName() {
    console.log(this); // 'this' refers to the 'student' object because 'getName' is a method of 'student'
    console.log(this.name); // Accesses 'name' property of 'student'
  },

  getMarks: () => {
    // Arrow functions do not have their own 'this'.
    // They inherit 'this' from their lexical scope (the surrounding context).
    // In this case, the surrounding context is the global scope, not the 'student' object.
    console.log(this); // 'this' refers to the window object.
    console.log(this.marks); // Undefined, because 'this' does not refer to 'student'
  },

  getInfo1: function() {
    // 'setTimeout' is inside a regular function, but the callback inside it is an arrow function.
    setTimeout(() => {
      console.log(this); // 'this' is inherited from 'getInfo1', which refers to 'student' object.
    }, 2000);
  },

  getInfo2: function() {
    // 'setTimeout' is inside a regular function, but the callback inside it is also a regular function.
    setTimeout(function () {
      console.log(this); 
      // 'this' now refers to the window object, because 'setTimeout' is a global function.
    }, 2000);
  }
};

// Calling methods to observe 'this' behavior
student.getName();  // 'this' refers to 'student' --> Logs 'student' object and "aman".
student.getMarks(); // 'this' refers to global object --> Logs 'window' object and 'undefined'.
student.getInfo1(); // 'this' inside arrow function refers to 'student' --> Logs 'student' object after 2 seconds.
student.getInfo2(); // 'this' inside regular function refers to global object --> Logs 'window' object after 2 seconds.
