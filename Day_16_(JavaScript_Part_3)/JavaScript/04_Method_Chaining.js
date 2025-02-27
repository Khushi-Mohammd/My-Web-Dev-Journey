let msg = "                                 Hello                                     ";

console.log("Normal : ", msg);

// let newMsg = msg.trim();
// console.log("After trim :", newMsg);

// newMsg = newMsg.toUpperCase();
// console.log("After Upper Case :", newMsg);

let newMsg = msg.trim().toUpperCase(); // Method Chaining
console.log("After trim and Upper Case :", newMsg);