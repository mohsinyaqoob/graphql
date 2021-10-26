const {
  GraphQLList,
  GraphQLString,
  GraphQLObjectType,
  GraphQLID,
} = require("graphql");
const mongoose = require("mongoose");

const Post = require("../../models/Post");
const { PostType, TestType } = require("../TypeDefs/Post");

const CREATE_POST = {
  type: PostType,
  args: {
    title: {
      type: GraphQLString,
    },
    body: {
      type: GraphQLString,
    },
  },
  async resolve(parent, args) {
    const { title, body } = args;
    const newPost = new Post({
      title,
      body,
    });
    await newPost.save();
    return newPost;
  },
};

const DELETE_POST = {
  type: PostType,
  args: {
    _id: {
      type: GraphQLID,
    },
  },
  async resolve(parent, args) {
    const { _id } = args;
    await Post.remove({ _id });
    return args;
  },
};

const EDIT_POST = {
  type: PostType,
  args: {
    _id: {
      type: GraphQLID,
    },
    title: {
      type: GraphQLString,
    },
    body: {
      type: GraphQLString,
    },
  },
  async resolve(parent, args) {
    const { _id, title, body } = args;
    const post = await Post.findById(_id);
    title ? (post.title = title) : null;
    body ? (post.body = body) : null;
    await post.save();
    return post;
  },
};

module.exports = {
  CREATE_POST,
  DELETE_POST,
  EDIT_POST,
};
