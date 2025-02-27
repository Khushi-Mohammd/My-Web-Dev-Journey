let str = "Apna College";

// This function takes a string as an argument and returns the number of vowels in the string.
function vowelCount(str) {
  let current;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    current = str[i].toLowerCase();
    if (current === "a" || current === "e" || current === "i" || current === "o" || current === "u") {
      count++;
    }
  }

  return count;
}

console.log(str); // Print the original string.

let vowel = vowelCount(str); // Call the function and store the returned number in a variable.
console.log(`There are ${vowel} vowels in: "${str}"`); // Print the returned number.