const square = (n) => (n * n);

function helloWorld5Times() {
    let id = setInterval( () => {
      console.log("Hello World");
    }, 2000);
    setTimeout( () => {
      clearInterval(id)
      console.log("Clear interval ran");  
    }, 10000);
}

console.log(square(5));
helloWorld5Times();