const student = {
  name: "shradha",
  age: 23,
  marks: 94.4,
  city: "Delhi"
};

console.log(student);
console.log(student.city);

// To update the value of a key in an object, we can use the dot notation or the square bracket notation.
student.city = "Mumbai";
console.log(student.city);
console.log(student);

// We can also add new keys to an object using the dot notation or the square bracket notation.
student.gender = "Female";
console.log(student);


student.marks = "A";
console.log(student);

student.marks = [99, 89, 74];
console.log(student);

// To delete a key from an object, we can use the delete keyword.
delete student.gender;
console.log(student);
delete student.marks;
console.log(student);
delete student.city;
console.log(student);