let student = {
  name: "karan",
  age: 14,
  class: 9,
  subjects: ["hindi", "english", "math", "science"],
  username: "karan@123",
  password: "abcd"
};
// An object 'student' containing details like name, age, class, subjects, username, and password.


// Destructuring (commented out code):
// let {username, password} = student;
// console.log(username, password);
// This would extract 'username' and 'password' from 'student' and log them.


// Destructuring with renaming and default value:
let { username: user, password: pass, city = "mumbai" } = student;

// 'username' is renamed to 'user', so 'user' now holds the value "karan@123".
// 'password' is renamed to 'pass', so 'pass' now holds the value "abcd".
// 'city' does not exist in 'student', so it is assigned the default value "mumbai".

console.log(user, pass, city);
// Logs: "karan@123 abcd mumbai"
// The extracted values are displayed: 'user' contains "karan@123", 'pass' contains "abcd", and 'city' gets the default value "mumbai".
