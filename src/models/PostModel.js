const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 50,
      unique: true,
    },
    body: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 100,
    },
  },
  { timestamps: true },
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
