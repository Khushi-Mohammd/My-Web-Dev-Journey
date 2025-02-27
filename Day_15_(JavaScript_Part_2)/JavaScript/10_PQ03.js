let str = "aGoodString";

// if the first character of the string is "a" and the length of the string is greater than 3 then it is a good string.

if (str[0] === "a" && str.length > 3) {
  console.log(`String "${str}" is a good string`);
} else {
  console.log(`String ${str} is not a good string`);
}