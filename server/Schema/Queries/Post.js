const {
  GraphQLList,
  GraphQLString,
  GraphQLObjectType,
  GraphQLID,
} = require("graphql");

const { PostType, TestType } = require("../TypeDefs/Post");
const Post = require("../../models/Post");

const POSTS = {
  type: new GraphQLList(PostType),
  async resolve() {
    const posts = await Post.find({});
    return posts;
  },
};

const POST = {
  type: PostType,
  args: {
    _id: {
      type: GraphQLID,
    },
  },
  async resolve(parent, args) {
    const post = await Post.findById({ _id: args._id });
    return post;
  },
};

const TEST = {
  type: PostType,
  resolve() {
    return "Hello World!";
  },
};

module.exports = {
  POSTS,
  TEST,
  POST,
};
