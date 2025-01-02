let arr = [1, 2, 3, 4, 5];
let newArr = [...arr];

console.log(arr);
console.log(newArr);

newArr.push(6);
console.log(arr);
console.log(newArr);

let chars = [..."Apna College"];
console.log(chars);

let even = [2, 4, 6, 8, 10];
let odd = [1, 3, 5, 7, 9];

let nums = [...even, ...odd];
console.log(nums);