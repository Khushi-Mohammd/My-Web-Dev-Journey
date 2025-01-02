let arr = ['a', 'b', 'c'];
console.log(arr);

let arrCopy = arr;
console.log(arrCopy);

console.log(arr == arrCopy);

arr.push('d');
console.log(arr);
console.log(arrCopy);

// It happened because "arr" and "arrCopy" stores memory address of a, b and c.

arrCopy.pop();
console.log(arrCopy);
console.log(arr);

arrCopy = ['a', 'b', 'c'];

arr.push('d');
console.log(arr);
console.log(arrCopy);