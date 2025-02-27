// Nested Objects
const classInfo = {
  aman: {
    grade: "A+",
    city: "Delhi"
  },
  
  shradha: {
    grade: "A",
    city: "Pune"
  },
  
  karan: {
    grade: "O",
    city: "Mumbai"
  },
  
};

// To access the values of nested objects, we can use the dot notation multiple times.
console.log(classInfo);
console.log(classInfo.shradha);
console.log(classInfo.shradha.city);

// To update the value of a key in a nested object, we can use the dot notation multiple times.
classInfo.shradha.city = "Gurgaon";
console.log(classInfo);
console.log(classInfo.shradha);
console.log(classInfo.shradha.city);