// This is an array of objects. Each object has name, grade, and city as keys.
const classInfo = [
  {
    name: "Aman",
    grade: "A+",
    city: "Delhi"
  },
  
  {
    name: "Shradha",
    grade: "A",
    city: "Pune"
  },
  
  {
    name: "Karan",
    grade: "O",
    city: "Mumbai"
  }
  
];

// To access the values of an array of objects, we can use the index.
console.log(classInfo);
console.log(classInfo[0]);
console.log(classInfo[1]);
console.log(classInfo[2]);
console.log(classInfo[1].name);
console.log(classInfo[1].grade);
console.log(classInfo[1].city);

classInfo[1].city = "Gurgaon";
console.log(classInfo);
console.log(classInfo[1]);
console.log(classInfo[1].city);

// We can also add new keys to an object in an array of objects.
classInfo[1].gender = "Female"
console.log(classInfo);
console.log(classInfo[1]);
console.log(classInfo[1].gender);