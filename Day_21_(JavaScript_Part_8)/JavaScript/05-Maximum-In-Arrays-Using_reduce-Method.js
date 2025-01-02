const num = [12, 45, 78, 23, 89, 34, 67, 90];
console.log(num);

let max = num.reduce( (max, el) => {
  if (max < el) {
    return el;
  } else {
    return max;
  }
});

console.log(max);