function concArr(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
  }
  return str;
}

let strs = ["Hi", "hello", "how", "are", "you", "!"];

console.log(concArr(strs));