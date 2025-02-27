let colors = ["Red", "Yellow", "Blue", "Orange", "Pink", "White"];
console.log(colors);

// "slice" Method does not changes the original array, it temprarily creates a new array with the sliced value.
console.log(colors.slice()); // If no argument is passed, it will return the whole array.
console.log(colors.slice(2)); // If only one argument is passed, it will return the array starting from the index passed as argument.
console.log(colors.slice(5));
console.log(colors.slice(2, 4)); // If two arguments are passed, it returns a new array starting from the first argument's index up to (but not including) the second argument's index.
console.log(colors.slice(colors.length-1)); // If the first argument is the last index of the array, it will return the last element of the array.
console.log(colors.slice(7)); // If the first argument is greater than the last index of the array, it will return an empty array.
console.log(colors.slice(-1)); // If the first argument is negative, the slicing starts from that index counted from the end of the array.
console.log(colors.slice(-2));
console.log(colors.slice(-8)); // If the first argument is less than the negative of the length of the array, it will return the whole array.