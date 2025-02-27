let arr = ['a', 'b', 'c'];
console.log(arr);

let arrCopy = arr; // This is not a copy of "arr" but a reference to the same array.
console.log(arrCopy);

console.log(arr == arrCopy); // true

arr.push('d');
console.log(arr); // ['a', 'b', 'c', 'd']
console.log(arrCopy); // ['a', 'b', 'c', 'd']

// It happened because "arr" and "arrCopy" stores memory address of elements in an array.
// Here, "arr" and "arrCopy" are pointing to the same memory address.
// So, when we change the array "arr", the array "arrCopy" also changes.

arrCopy.pop(); // Removes the last element from the array.
console.log(arrCopy); // ['a', 'b', 'c']
console.log(arr); // ['a', 'b', 'c']

arrCopy = ['a', 'b', 'c']; // Here we haven't assigned the memory address of "arr" to "arrCopy".

arr.push('d'); // Adds 'd' to the array "arr".
console.log(arr); // ['a', 'b', 'c', 'd']
console.log(arrCopy); // ['a', 'b', 'c']