const randomNumbers = [12, 45, 78, 23, 89, 34, 67, 90];

const arrayAverage = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  let avg = total / arr.length;
  return avg;
};

let avg = arrayAverage(randomNumbers);
console.log(avg);