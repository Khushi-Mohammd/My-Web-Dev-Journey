const post = {
  username: "@shradhakhapra",
  content: "This is my #firstPost",
  likes: 150,
  reposts: 5,
  tags: ["@apnacollege", "@delta"]
};

console.log(post); // { username: '@shradhakhapra', content: 'This is my #firstPost', likes: 150, reposts: 5, tags: [ '@apnacollege', '@delta' ] }

// To access the values of the keys in an object, we can use the dot notation or the square bracket notation.
// The dot notation is used when the key is a valid identifier.
console.log(post["username"]); // Here we used the square bracket notation to access the value of the key "username".
console.log(post.content); // Here we used the dot notation to access the value of the key "content".
console.log(post.likes); // Here we used the dot notation to access the value of the key "likes".
console.log(post["tags"]); // Here we used the square bracket notation to access the value of the key "tags".

let prop = "reposts";

// We can also use a variable to access the value of a key.
console.log(post[prop]); // Here we used the variable prop to access the value of the key "reposts".
console.log(post.tags[0]); // Here we used the square bracket notation to access the first element of the array stored in the key "tags".
console.log(post["tags"][0]); // Here we used the square bracket notation to access the first element of the array stored in the key "tags".+