let arr = [1, 2, 3, 4, 5]; // An array containing numbers

// Defining a function 'print' that takes an element as a parameter and logs it
const print = function(el) {
  console.log(el);
};

// Using 'forEach()' to iterate over 'arr' and calling the 'print' function for each element
arr.forEach(print);

// Using 'forEach()' with an anonymous function
arr.forEach(function(el) {
  console.log(el);
});

// Using 'forEach()' with an arrow function
arr.forEach((el) => {
  console.log(el);
});

//--------------------------------------------------------------------------------------//

// An array of objects, where each object represents a student with name and marks
let arr2 = [
  {
    name: "aman",
    marks: 95
  },
  {
    name: "shradha",
    marks: 94.4
  },
  {
    name: "rajat",
    marks: 92
  }
];

// Using 'forEach()' to iterate over 'arr2' and log each student object
arr2.forEach((el) => {
  console.log(el);
});

// Using 'forEach()' to iterate over 'arr2' and log only the marks of each student
arr2.forEach((student) => {
  console.log(student.marks);
});

/*
Explanation of forEach():
1. 'forEach()' is an array method that executes a provided function once for each array element.
2. It takes a callback function as an argument.
3. The callback function receives the current element as a parameter.
4. It does not return a new array (unlike 'map()'), it simply executes the function for each element.
5. 'forEach()' can be used with function expressions, arrow functions, or even pre-defined functions.
6. It is useful when you want to perform an operation on each array element without modifying the original array.
*/
