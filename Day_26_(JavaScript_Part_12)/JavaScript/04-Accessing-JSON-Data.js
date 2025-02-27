// JSON (JavaScript Object Notation) is a lightweight data format used for data exchange
// JSON data is typically stored as key-value pairs in a structured format

// A JSON formatted string containing a fact about cats
let jsonRes =
  '{"fact":"Most cats give birth to a litter of between one and nine kittens. The largest known litter ever produced was 19 kittens, of which 15 survived.","length":142}';

// JSON.parse is used to convert a JSON string into a JavaScript object
let validRes = JSON.parse(jsonRes);

// Accessing and printing a value from the parsed JSON object
console.log(validRes.fact);

// Creating a JavaScript object
let student = {
  name: "shradha",
  marks: 95,
};

// JSON.stringify is used to convert a JavaScript object into a JSON formatted string
let validJson = JSON.stringify(student);

// Printing the JSON string representation of the student object
console.log(validJson);
