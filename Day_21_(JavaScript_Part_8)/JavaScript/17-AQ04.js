const num = [12, 45, 78, 23, 89, 34, 67, 90];
console.log(num);

function doubleAdd(array, ...arr) {
  let newArray = array;
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i] *= 2);
  }
  return newArray;
}

let newArray = doubleAdd(num, 3, 6, 2, 4, 1, 10);
console.log(newArray);