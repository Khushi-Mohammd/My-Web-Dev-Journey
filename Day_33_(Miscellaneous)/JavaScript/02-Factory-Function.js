// Defining a factory function named PersonMaker
// A factory function is a function that returns an object
function PersonMaker(name, age) {
  // Creating an object named 'person'
  const person = {
    name: name, // Assigning the name parameter to the object's 'name' property
    age: age, // Assigning the age parameter to the object's 'age' property
    talk() {
      // Defining a method 'talk' inside the person object
      console.log(`Hi, my name is ${this.name}`); // Logs a greeting message using 'this.name'
    },
  };

  return person; // Returning the created object
}

// Creating two objects using the factory function
let p1 = PersonMaker("boby", 23); // p1 is an object with name "boby" and age 23
let p2 = PersonMaker("brad", 25); // p2 is an object with name "brad" and age 25

console.log(p1); // Logs the p1 object
console.log(p2); // Logs the p2 object

// Comparing the 'talk' methods of p1 and p2
console.log(p1.talk === p2.talk);
// false -> Since each object gets its own 'talk' function instance, they are not the same function
