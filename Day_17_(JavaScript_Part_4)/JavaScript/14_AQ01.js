let arr = [12, 45, 78, 12, 89, 45, 67, 89, 23, 45, 12, 45, 78, 12, 89, 45, 67, 89, 23, 45];

console.log(arr);

// Stores the number that the user wants to remove from the array.
remNum = parseInt(prompt("Enter the number that you want to remove from the array"));

// This while loop will keep running until there are no more instances of the number in the array.
while (arr.includes(remNum)) {
  let idx = arr.indexOf(remNum); // Finds the index of the number in the array.
  arr.splice(idx, 1); // Removes the number from the array.
}

console.log(arr); // Prints the updated array after removing the number.