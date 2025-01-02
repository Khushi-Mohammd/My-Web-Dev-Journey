const num = [12, 45, 78, 23, 89, 34, 67, 90];
console.log(num);


let double = num.map( (el) => { // "map" function will store the the returned double value in "double" variable in form of array.
  return el * 2;
});

console.log(double);

//---------------------------------------------------------------------------//

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

let gpa = arr2.map( (student) => { // "map" function will store the the returned value in "gpa" variable in form of array.
  return student.marks / 10;
});

console.log(gpa);

//===========================================Filter====================================================//

let even = num.filter( (el) => {
  return el % 2 == 0;
});

let odd = num.filter( (el) => (el % 2 != 0));

let lessThan = num.filter( (el) => (el < 40));
let greaterThan = num.filter( (el) => (el > 40));

console.log(even);
console.log(odd);
console.log(lessThan);
console.log(greaterThan);