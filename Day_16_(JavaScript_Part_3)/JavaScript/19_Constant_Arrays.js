const arr = [1, 2, 3];

console.log(arr);

arr.push(4);
console.log(arr);

arr.pop(4);
console.log(arr);

arr = [1, 2, 3];

// Here "arr" is a constant array, so we can't change the memory address of the array but we can change the elements of the array.

let color = ["Red", "Yellow", "Blue"];

console.log(color);

arr = color;