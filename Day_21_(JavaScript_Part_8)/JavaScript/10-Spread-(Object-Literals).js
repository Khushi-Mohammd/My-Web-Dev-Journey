let data = {
  email: "ironman@gmail.com",
  pass: "abcd"
};

console.log(data);

let dataCopy = {...data, id: 123, country: "India"};
console.log(dataCopy);

let arr = [1, 2, 3, 4, 5];
let obj1 = {...arr};
console.log(obj1);

let obj2 = {..."Hello"};
console.log(obj2);