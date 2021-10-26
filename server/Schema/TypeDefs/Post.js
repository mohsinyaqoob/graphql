const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} = require("graphql");

const PostType = new GraphQLObjectType({
  name: "Post",
  fields: () => ({
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    createdAt: { type: GraphQLString },
  }),
});

// Test query endpoint
const TestType = new GraphQLObjectType({
  name: "Test",
  fields: () => ({
    test: GraphQLString,
  }),
});

module.exports = { PostType, TestType };
