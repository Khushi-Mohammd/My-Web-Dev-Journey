const num = [100, 40, 70, 20, 80, 30, 60, 90];
console.log(num);

let multipleOf10 = num.every( (el) => (el % 10 == 0));
console.log(multipleOf10);

function getMin(num) {
  let min = num.reduce( (min, el) => {
    if (min < el) {
      return min;
    } else {
      return el;
    }
  });

  return min;
}

console.log(getMin(num));