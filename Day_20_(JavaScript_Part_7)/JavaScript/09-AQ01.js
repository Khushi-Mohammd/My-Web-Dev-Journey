const randomNumbers = [12, 45, 78, 23, 89, 34, 67, 90];

// This function calculates the average of the numbers in the array.
const arrayAverage = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  let avg = total / arr.length;
  return avg;
};

let avg = arrayAverage(randomNumbers); // Calling the function and storing the result in 'avg'.
console.log(avg);  // Printing the average.