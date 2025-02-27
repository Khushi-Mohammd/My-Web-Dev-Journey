// {
//     let a = 25; // Block scope of 'a'
// }

// console.log(a); // Error: 'a' is not defined (Because a has block scope so it is not accessible outside the block).

// for (let i = 1; i <= 5; i++) {
//     console.log(i); // Block scope of 'i'
// }

// console.log(i); // Error: 'i' is not defined (Because i has block scope so it is not accessible outside the block).

let age = 25; // Global scope of 'age'
if (age >= 18) {
    let str = "adult"; // Block scope of 'str'
}

console.log(str); // Error: 'str' is not defined (Because str has block scope so it is not accessible outside the block).
