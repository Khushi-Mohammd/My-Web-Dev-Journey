const mongoose = require("mongoose");
const { Schema } = mongoose;

// Connecting to the MongoDB database
main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

// Defining a schema for a user
// This schema represents the users who will create posts
const userSchema = new Schema({
  username: String, // The username of the user
  email: String, // The email of the user
});

// Defining a schema for a post
// This schema represents posts created by users
const postSchema = new Schema({
  content: String, // The content of the post
  likes: Number, // The number of likes the post has received
  user: {
    type: Schema.Types.ObjectId, // References the ObjectId of a User document
    ref: "User", // Specifies the model being referenced (User)
  },
});

// Creating models for User and Post
const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

// Function to add data to the database
const addData = async () => {
  // Uncomment the following lines to create a new user and their first post
  // let user1 = new User({
  //   username: "johnsnow", // Creating a new user with username "johnsnow"
  //   email: "john@gmail.com", // Email of the user
  // });

  // let post1 = new Post({
  //   content: "Winter is coming", // Content of the post
  //   likes: 77,                   // Number of likes for the post
  // });

  // Associating the post with the user
  // post1.user = user1;

  // Saving the user and post to the database
  // await user1.save();
  // await post1.save();

  // Finding an existing user by username
  let user = await User.findOne({ username: "johnsnow" });

  // Creating a new post and associating it with the found user
  let post2 = new Post({
    content: "King of north", // Content of the post
    likes: 63, // Number of likes for the post
  });

  // Associating the post with the user
  post2.user = user;

  // Saving the post to the database
  await post2.save();
};

// Uncomment the following line to add data to the database
// addData();

// Function to retrieve posts and populate the user field
const getData = async () => {
  // Using 'populate' to replace the ObjectId in the 'user' field with the actual User document
  // Only the 'username' field of the User document is fetched
  let result = await Post.find({}).populate("user", "username");
  console.log(result); // Logs the posts along with the associated user's username
};

// Calling the function to retrieve and display posts with user data
getData();
