// let calculator = {
//   add: function(a, b) {
//     return a + b;
//   },
//   sub: function(a, b) {
//     return a - b;
//   },
//   mul: function(a, b) {
//     return a * b;
//   }
// };

// This is shorthand
let calculator = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  mul(a, b) {
    return a * b;
  }
};

console.log(calculator.add(9, 3));
console.log(calculator.sub(9, 3));
console.log(calculator.mul(9, 3));