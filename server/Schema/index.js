const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const { POSTS, POST, TEST } = require("./Queries/Post");
const { CREATE_POST, DELETE_POST, EDIT_POST } = require("./Mutations/Post");

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    // Import and add queries here
    posts: POSTS,
    post: POST,
    test: TEST,
  },
});

const RootMutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: {
    // Import and add mutations here
    createPost: CREATE_POST,
    deletePost: DELETE_POST,
    editPost: EDIT_POST,
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});

module.exports = schema;
