let student = {
  name: "karan",
  age: 14,
  class: 9,
  subjects: ["hindi", "english", "math", "science"],
  username: "karan@123",
  password: "abcd"
};

// let {username, password} = student; // This will search for "username" and "password" key in "student" object and
// console.log(username, password);    // assign those keys's values to these "username" and "password" variable.

let {username: user, password: pass, city = "mumbai"} = student; // This will search for "username" and "password" key in "student" object and assign those keys's values to these
console.log(user, pass, city); // "user" and "pass" variable. And if there is no city declared in "student" object then is will store default value("mumbai") in "city" variable.
