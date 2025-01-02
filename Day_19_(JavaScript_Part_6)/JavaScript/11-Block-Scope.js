// {
//     let a = 25;
// }

// console.log(a); // Error: 'a' is not defined (Block scope)

// for (let i = 1; i <= 5; i++) {
//     console.log(i); // Block scope of 'i'
// }

// console.log(i); // Error: 'i' is not defined (Block scope)

let age = 25;
if (age >= 18) {
    let str = "adult";
}

console.log(str);
