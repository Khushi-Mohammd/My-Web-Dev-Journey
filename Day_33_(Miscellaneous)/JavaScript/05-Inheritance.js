// Old approach: Separate classes for Students and Teachers without inheritance
// class Students {
//   constructor(name, age, marks) {
//     this.name = name; // Assigning name to the instance
//     this.age = age;   // Assigning age to the instance
//     this.marks = marks; // Assigning marks to the instance
//   }
//
//   talk() {
//     console.log(`Hi, my name is ${this.name}`); // Logs a greeting message
//   }
// }
//
// let stu1 = new Students("boby", 23, 92);
// console.log(stu1);
//
// class Teachers {
//   constructor(name, age, subject) {
//     this.name = name; // Assigning name to the instance
//     this.age = age;   // Assigning age to the instance
//     this.subject = subject; // Assigning subject to the instance
//   }
//
//   talk() {
//     console.log(`Hi, my name is ${this.name}`); // Logs a greeting message
//   }
// }
//
// let tea1 = new Teachers("brad", 33, "math");
// console.log(tea1);

//============================================================//

// Improved approach: Using inheritance

// Defining a base class Person
class Person {
  constructor(name, age) {
    console.log("person class constructor"); // Logs when the Person constructor is called
    this.name = name; // Assigning the name parameter to the instance's 'name' property
    this.age = age; // Assigning the age parameter to the instance's 'age' property
  }

  // Defining a method inside the class
  talk() {
    console.log(`Hi, my name is ${this.name}`); // Logs a greeting message
  }
}

// Defining a Student class that inherits from Person using 'extends'
class Student extends Person {
  constructor(name, age, marks) {
    console.log("student class constructor"); // Logs when the Student constructor is called
    super(name, age); // Calls the constructor of the parent class (Person)
    this.marks = marks; // Assigning the marks parameter to the instance's 'marks' property
  }
}

// Creating an instance of Student
let stu1 = new Student("boby", 23, 92);
console.log(stu1); // Logs the student object
stu1.talk(); // Calls the inherited 'talk' method

// Defining a Teacher class that inherits from Person
class Teacher extends Person {
  constructor(name, age, subject) {
    console.log("teacher class constructor");
    super(name, age); // Calls the constructor of the Person class
    this.subject = subject; // Assigning the subject parameter to the instance
  }
}

// Creating an instance of Teacher
let tea1 = new Teacher("brad", 33, "math");
console.log(tea1);

//============================================================//

// Defining a base class Mammal
class Mammal {
  constructor(name) {
    this.name = name;
    this.type = "warm-blooded"; // Assigning a default property
  }

  eat() {
    console.log("I am eating"); // Logs a generic eating message
  }
}

// Defining a Dog class that inherits from Mammal
class Dog extends Mammal {
  constructor(name) {
    super(name); // Calls the Mammal constructor
  }

  bark() {
    console.log("wooff.."); // Logs a barking sound
  }

  eat() {
    console.log("dog is eating"); // Overrides the 'eat' method
  }
}

// Creating an instance of Dog
let dog1 = new Dog("tuffie");
console.log(dog1);
dog1.eat(); // Calls the overridden eat method
dog1.bark(); // Calls the Dog-specific bark method

// Defining a Cat class that inherits from Mammal
class Cat extends Mammal {
  constructor(name) {
    super(name); // Calls the Mammal constructor
  }

  meow() {
    console.log("meow.."); // Logs a meowing sound
  }
}

// Creating an instance of Cat
let cat1 = new Cat("tona");
console.log(cat1);
cat1.meow(); // Calls the Cat-specific meow method
