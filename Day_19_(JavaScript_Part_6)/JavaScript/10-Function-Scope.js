let sum = 54; // Global Scope

function calSum(a, b) {
    let sum = a + b; // Function Scope
    console.log(sum); // Here it will print the function scope variable "sum".
}

calSum(1, 2);
console.log(sum); // Here it will print the global scope variable "sum".