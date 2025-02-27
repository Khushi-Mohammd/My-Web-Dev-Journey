const num = [12, 45, 78, 23, 89, 34, 67, 90]; // An array of numbers
console.log(num);

//=========================================== map() ====================================================//

// Here the "map" function creates a new array by applying a function to each element of the original array.
let double = num.map((el) => { 
  return el * 2; // Each element is multiplied by 2, and the results are stored in the "double" array.
});

console.log(double); // Output: [24, 90, 156, 46, 178, 68, 134, 180]

//---------------------------------------------------------------------------//

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

// Here the "map" function creates a new array where each student's marks are divided by 10 to convert them to GPA.
let gpa = arr2.map((student) => { 
  return student.marks / 10;
});

console.log(gpa); // Output: [9.5, 9.44, 9.2]

/*
Explanation of map():
1. 'map()' is used to transform each element in an array and return a new array.
2. It does not modify the original array; instead, it creates a new one.
3. The callback function inside 'map()' runs once for each element.
4. It is commonly used for performing calculations or modifying data.
*/

//=========================================== filter() ====================================================//

// Here the "filter" function creates a new array containing only even numbers from the original array.
let even = num.filter((el) => {
  return el % 2 == 0; // Condition to check if the number is even
});

// Here the "filter" function creates a new array containing only odd numbers.
let odd = num.filter((el) => (el % 2 != 0)); 

// Here the "filter" function creates a new array with numbers less than 40.
let lessThan = num.filter((el) => (el < 40));

// Here the "filter" function creates a new array with numbers greater than 40.
let greaterThan = num.filter((el) => (el > 40));

console.log(even); // Output: [12, 78, 34, 90]
console.log(odd); // Output: [45, 23, 89, 67]
console.log(lessThan); // Output: [12, 23, 34]
console.log(greaterThan); // Output: [45, 78, 89, 67, 90]

/*
Explanation of filter():
1. 'filter()' is used to create a new array that contains only elements that pass a given condition.
2. It does not modify the original array.
3. The callback function inside 'filter()' runs once for each element.
4. If the condition returns 'true', the element is included in the new array; otherwise, it is excluded.
5. It is commonly used to extract specific data from an array.
*/
