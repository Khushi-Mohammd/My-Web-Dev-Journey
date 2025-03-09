// Constructors - doesn't return anything & start with capital letter
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   console.log(this);
// }

// Person.prototype.talk = function () {
//   console.log(`Hi, my name is ${this.name}`);
// };

// Defining a class named Person
// A class is a blueprint for creating objects
class Person {
  // The constructor method is called when a new instance of the class is created
  constructor(name, age) {
    this.name = name; // Assigning the name parameter to the instance's 'name' property
    this.age = age; // Assigning the age parameter to the instance's 'age' property
  }

  // Defining a method inside the class
  talk() {
    console.log(`Hi, my name is ${this.name}`); // Logs a greeting message
  }
}

// Creating new instances of the Person class using the 'new' keyword
let p1 = new Person("boby", 23); // p1 is an instance of Person with name "boby" and age 23
let p2 = new Person("brad", 25); // p2 is an instance of Person with name "brad" and age 25

console.log(p1); // Logs the p1 object
console.log(p2); // Logs the p2 object

// Comparing the 'talk' methods of p1 and p2
console.log(p1.talk === p2.talk);
// true -> Since 'talk' is defined inside the class, it is automatically added to the prototype
// Both p1 and p2 share the same function reference for 'talk'
