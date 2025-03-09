// function PersonMaker(name, age) {
//   const person = {
//     name: name,
//     age: age,
//     talk() {
//       console.log(`Hi, my name is ${this.name}`);
//     },
//   };

//   return person;
// }

// Constructor functions are used to create objects and typically start with a capital letter
function Person(name, age) {
  // 'this' refers to the new object being created
  this.name = name; // Assigning the name parameter to the object's 'name' property
  this.age = age; // Assigning the age parameter to the object's 'age' property
  console.log(this); // Logs the current object instance
}

// Adding a method to the prototype of Person
// This ensures that all instances share the same method, rather than each having its own copy
Person.prototype.talk = function () {
  console.log(`Hi, my name is ${this.name}`); // Logs a greeting message
};

// Creating new instances of Person using the 'new' keyword
let p1 = new Person("boby", 23); // p1 is an instance of Person with name "boby" and age 23
let p2 = new Person("brad", 25); // p2 is an instance of Person with name "brad" and age 25

console.log(p1); // Logs the p1 object
console.log(p2); // Logs the p2 object

// Comparing the 'talk' methods of p1 and p2
console.log(p1.talk === p2.talk);
// true -> Since talk is added to the prototype, both p1 and p2 share the same function reference
