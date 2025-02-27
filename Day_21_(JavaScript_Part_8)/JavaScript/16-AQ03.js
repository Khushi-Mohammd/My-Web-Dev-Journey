// Q: Crate a new array whose elements are in uppercase of words present in the original array.

let strings = ["hello","shradha", "apnacollege"];

let stringsUpper = strings.map( (el) => el.toUpperCase());
console.log(stringsUpper);