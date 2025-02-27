let str = "abcdabcdefgggh";

// This function takes a string as an argument and returns a string by removing all the duplicate characters from the string.
function unique(str) {
  let uniqStr = "";
  for (let i = 0; i < str.length; i++) {
    if (!(uniqStr.includes(str[i]))) {
      uniqStr += str[i];
    }
  }
  return uniqStr;
}

console.log(str); // Print the original string.

let uniqueStr = unique(str); // Call the function and store the returned string in a variable.
console.log(uniqueStr); // Print the returned string.