const countries = ["India", "United States", "Canada", "Australia", "Germany", "Brazil", "Japan", "Russia", "France", "South Africa"];

function longestCountry(arr) {
  let longest = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}

console.log(countries);

let longCon = longestCountry(countries);
console.log(longCon);