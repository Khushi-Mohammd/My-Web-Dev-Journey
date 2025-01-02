let arr = [12, 45, 78, 12, 89, 45, 67, 89, 23, 45, 12, 45, 78, 12, 89, 45, 67, 89, 23, 45];

console.log(arr);

remNum = parseInt(prompt("Enter the number that you want to remove from the array"));

while (arr.includes(remNum)) {
  let idx = arr.indexOf(remNum);
  arr.splice(idx, 1);
}

console.log(arr);