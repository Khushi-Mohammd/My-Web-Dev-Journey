let arr = [1, 2, 3, 4, 5];

// const print = function(el) {
//   console.log(el);
// };

// arr.forEach(print);

arr.forEach(function(el) {
  console.log(el);
});

arr.forEach( (el) => {
  console.log(el);
});

//--------------------------------------------------------------------------------------

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

arr2.forEach( (el) => {
  console.log(el);
})

arr2.forEach( (student) => {
  console.log(student.marks);
})