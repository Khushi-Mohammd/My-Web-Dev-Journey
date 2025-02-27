let str = "ILoveCoding";

console.log(str.indexOf("Love")); // It will print the index of the first character of the substring.
console.log(str.indexOf("J")); // It will print -1 because the character is not present in the string.
console.log(str.indexOf("o")); // It will print 2 because the character "o" is present in the string at index 2.
console.log(str.indexOf("love")); // It will print -1 because the substring is not present in the string.
console.log(str.indexOf("Coding")); // It will print 5 because the substring is present in the string at index 5.
console.log(str.indexOf("I")); // It will print 0 because the character "I" is present in the string at index 0.
console.log(str.indexOf("i")); // It will print -1 because the character is not present in the string.