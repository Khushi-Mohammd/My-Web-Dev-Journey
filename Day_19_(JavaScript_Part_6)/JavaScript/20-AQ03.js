const countries = ["India", "United States", "Canada", "Australia", "Germany", "Brazil", "Japan", "Russia", "France", "South Africa"];

// This function will return the longest country name from the array
function longestCountry(arr) {
  let longest = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}

console.log(countries); // Print the original array.

let longCon = longestCountry(countries); // Call the function and store the returned string in a variable.
console.log(longCon); // Print the returned string.