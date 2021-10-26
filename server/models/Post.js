const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  createdAt: {
    type: String,
    default: new Date().toString(),
  },
});

module.exports = mongoose.model("Post", PostSchema);
