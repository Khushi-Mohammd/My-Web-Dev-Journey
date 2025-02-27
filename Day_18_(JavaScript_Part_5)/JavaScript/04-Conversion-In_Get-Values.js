const post = {
  1: "a",
  2: "b",
  true: "c",
  null: "d",
  undefined: "e",
  user: "kmp"
};

// JavaScript automatically converts reserved words or numbers into strings so we can access them using the square bracket notation without using quotes.
console.log(post);
console.log(post[1]);
console.log(post[2]);
console.log(post[true]);
console.log(post[null]);
console.log(post[undefined]);
console.log(post["user"]);
console.log(post.undefined);