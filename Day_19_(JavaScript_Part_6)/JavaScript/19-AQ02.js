let str = "abcdabcdefgggh";

function unique(str) {
  let uniqStr = "";
  for (let i = 0; i < str.length; i++) {
    if (!(uniqStr.includes(str[i]))) {
      uniqStr += str[i];
    }
  }
  return uniqStr;
}

console.log(str);

let uniqueStr = unique(str);
console.log(uniqueStr);