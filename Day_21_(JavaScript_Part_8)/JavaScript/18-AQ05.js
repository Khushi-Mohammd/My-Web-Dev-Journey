let obj1 = {
  a: 1,
  b: 2
}; 
// Declare 'obj1' with two properties: 'a' and 'b'.

let obj2 = {
  c: 3,
  d: 4
}; 
// Declare 'obj2' with two properties: 'c' and 'd'.

let mergeObject = (obj1, obj2) => ({ ...obj1, ...obj2 });
// 'mergeObject' is an arrow function that takes two objects ('obj1' and 'obj2') as arguments.
// The spread operator (...) is used to merge both objects into a new object.
// It creates a new object containing all key-value pairs from both 'obj1' and 'obj2'.

let mergedObj = mergeObject(obj1, obj2);
// Call 'mergeObject' with 'obj1' and 'obj2' as arguments.
// The merged object is stored in 'mergedObj'.

console.log(mergedObj); 
// Logs the merged object to the console.
// Output: { a: 1, b: 2, c: 3, d: 4 }
