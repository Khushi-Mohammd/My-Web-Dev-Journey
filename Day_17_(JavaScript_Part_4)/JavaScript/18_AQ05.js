let arr = [12, 45, 78, 12, 89, 45, 67, 89, 23, 45, 12, 45, 78, 12, 89, 45, 67, 89, 23, 45];

let largest = 0;

// Find the largest number in the array.
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}

console.log(largest);