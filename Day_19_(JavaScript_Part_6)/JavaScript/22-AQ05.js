function getRandomNumber(start, end) {
  let diff = end - start;
  let randomNumber = Math.floor(Math.random() * (diff + 1)) + start;
  return randomNumber;
}

let randomNumber = getRandomNumber(11, 12);
console.log(randomNumber);