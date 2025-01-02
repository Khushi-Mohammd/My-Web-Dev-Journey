let msg = "ILoveCoding";

console.log(msg.slice(1, 5)); // Here 1 = Starting index and 5 = Ending index - 1.
console.log(msg.slice(5, msg.length));
console.log(msg.slice(5)); // If only one value is provided then all the string after that index will be logged or assigned.
console.log(msg.slice(-10)); // If we provide negative value then is indicates (.length - n)th latter of string.