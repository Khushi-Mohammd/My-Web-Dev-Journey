function hello() {
  console.log("Inside hello fnx");
  console.log("Hello");
}

function demo() {
  console.log("Calling hello fnx");
  hello();
}

console.log("Calling demo fnx");
demo();
console.log("Done");