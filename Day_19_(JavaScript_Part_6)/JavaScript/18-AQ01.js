const numbers = [12, 25, 7, 19, 45, 32, 8, 27, 50, 14, 66, 38, 71, 29, 3, 87, 42, 18, 90, 53];

function largerThanN(arr, n) {
  let arrGreaterThan = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > n) {
      arrGreaterThan.push(arr[i]);
    }
  }

  return arrGreaterThan;
}

console.log(numbers);

let arr = largerThanN(numbers, 80);
console.log(arr);