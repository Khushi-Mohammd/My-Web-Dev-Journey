let str = "Apna College";

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

console.log(str);

let vowel = vowelCount(str);
console.log(`There are ${vowel} vowels in: "${str}"`); 