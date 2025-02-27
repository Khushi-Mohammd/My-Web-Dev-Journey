// Arrow functions that returns square of a number.
const square = (n) => (n * n);

// Arrow function that prints "Hello World" 5 times after every 2 seconds.
function helloWorld5Times() {
    let id = setInterval( () => {
      console.log("Hello World");
    }, 2000);
    setTimeout( () => {
      clearInterval(id)
      console.log("clearInterval ran");  
    }, 10000);
}

console.log(square(5));
helloWorld5Times();