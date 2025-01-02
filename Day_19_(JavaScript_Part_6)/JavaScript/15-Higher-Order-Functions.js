let multipleGreet = function (func, count) { // Higher order function.
  for (let i = 1; i <= count; i++) {
    func();
  }
}

let greet = function () {
  console.log("Hello");
}

multipleGreet(greet, 5);
// multipleGreet(function () {console.log("Namaste")}, 10);