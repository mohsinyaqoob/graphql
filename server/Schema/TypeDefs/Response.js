const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLEnumType,
} = require("graphql");

const ResponseType = new GraphQLObjectType({
  name: "Response",
  fields: () => ({
    responseType: new GraphQLEnumType(),
  }),
});

module.exports = { PostType, TestType };
