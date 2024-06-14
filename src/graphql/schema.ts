const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
} = require("graphql");

// Define your types
const ExampleType = new GraphQLObjectType({
  name: "Example",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  }),
});

// Define the root query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    example: {
      type: ExampleType,
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        // Here, you should fetch data from your database or other sources
        return { id: args.id, name: "Example Name" };
      },
    },
    hello: {
      type: GraphQLString,
      resolve() {
        return "Hello, world!";
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

// Export the schema
export default schema;
