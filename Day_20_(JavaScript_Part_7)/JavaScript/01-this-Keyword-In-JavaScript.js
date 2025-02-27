// Creating an object 'student' with properties and a method
let student = {
  name: "Shradha",  // Name property
  age: 23,          // Age property
  eng: 95,          // English marks
  math: 93,         // Math marks
  phy: 97,          // Physics marks

  // Method to calculate average marks
  getAvg() {
    console.log(this); // 'this' refers to the 'student' object here
    let avg = (this.eng + this.math + this.phy) / 3; // Accessing properties using 'this'
    console.log(`${this.name} got avg marks = ${avg}`); // Using 'this' to access 'name' property
  }
};

// Standalone function (not inside an object)
function getAvg() {
  console.log(this); // 'this' refers to the window object
}

// Calling the method inside the 'student' object
console.log(student.getAvg()); 
// 'this' inside getAvg() refers to the 'student' object
// Outputs: student object + "Shradha got avg marks = 95"

// Calling the standalone function
console.log(getAvg()); // 'this' in a standalone function refers to window object
