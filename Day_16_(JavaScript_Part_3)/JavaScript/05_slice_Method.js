let msg = "ILoveCoding";

console.log(msg.slice(1, 5)); // It will print the substring from index 1 to 4.
console.log(msg.slice(5, msg.length)); // It will print the substring from index 5 to end of the string.
console.log(msg.slice(5)); // If only one value is provided then all the string after that index will be logged or assigned.
console.log(msg.slice(-10)); // If we provide negative value then is indicates (.length - n)th index of string.