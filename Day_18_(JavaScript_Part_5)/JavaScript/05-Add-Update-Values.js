const student = {
  name: "shradha",
  age: 23,
  marks: 94.4,
  city: "Delhi"
};

console.log(student);
console.log(student.city);

student.city = "Mumbai";
console.log(student.city);
console.log(student);

student.gender = "Female";
console.log(student);

student.marks = "A";
console.log(student);

student.marks = [99, 89, 74];
console.log(student);

delete student.gender;
console.log(student);
delete student.marks;
console.log(student);
delete student.city;
console.log(student);