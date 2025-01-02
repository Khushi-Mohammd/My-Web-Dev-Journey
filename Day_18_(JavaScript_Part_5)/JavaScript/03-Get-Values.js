const post = {
  username: "@shradhakhapra",
  content: "This is my #firstPost",
  likes: 150,
  reposts: 5,
  tags: ["@apnacollege", "@delta"]
};

console.log(post);

console.log(post["username"]);
console.log(post.content);
console.log(post.likes);
console.log(post["tags"]);

let prop = "reposts";

console.log(post[prop]);
console.log(post.tags[0]);
console.log(post["tags"][0]);