const isEven = (n) => {
  if (n % 2 == 0) {
    return `Number ${n} is even number`;
  } else {
    return `Number ${n} is not even number`;
  }
};

let check = isEven(8);
console.log(check);