let data = {
  email: "ironman@gmail.com",
  pass: "abcd"
}; 
// An object 'data' with two key-value pairs.

console.log(data); 
// Logs the original 'data' object.

//=========================================== Spread Operator with Objects ===========================================//

let dataCopy = {...data, id: 123, country: "India"};
// Creates a new object 'dataCopy' by copying all properties of 'data' using the spread operator.
// Additional properties 'id' and 'country' are added to the new object.

console.log(dataCopy); 
// Logs the new object with added properties.

//=========================================== Spread Operator with Arrays ===========================================//

let arr = [1, 2, 3, 4, 5]; // An array 'arr' containing numbers.

let obj1 = {...arr}; 
// The spread operator is used to copy array elements into an object.
// The array indices become keys, and the array values become values in the object.
// Example output: {0: 1, 1: 2, 2: 3, 3: 4, 4: 5}

console.log(obj1); 
// Logs the object where array indices are converted into keys.

//=========================================== Spread Operator with Strings ===========================================//

let obj2 = {..."Hello"}; 
// The spread operator spreads the characters of the string "Hello" into an object.
// Each character gets a key corresponding to its index in the string.
// Example output: {0: 'H', 1: 'e', 2: 'l', 3: 'l', 4: 'o'}

console.log(obj2); 
// Logs the object where each character of the string is stored as a key-value pair.
