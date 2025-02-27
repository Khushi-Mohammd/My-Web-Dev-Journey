// This function takes an array of strings as an argument and returns a single string by concatenating all the strings in the array.
function concArr(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
  }
  return str;
}

let strs = ["Hi", "hello", "how", "are", "you", "!"];

console.log(concArr(strs));