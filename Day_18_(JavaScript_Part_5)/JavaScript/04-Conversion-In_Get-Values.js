const post = {
  1: "a",
  2: "b",
  true: "c",
  null: "d",
  undefined: "e",
  user: "kmp"
};

console.log(post);
console.log(post[1]); // JavaScripts automatically converts reservered word or numbers into string. 
console.log(post[2]);
console.log(post[true]);
console.log(post[null]);
console.log(post[undefined]);
console.log(post["user"]);
console.log(post.undefined);