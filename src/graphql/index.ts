import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { userTypeDefs, userResolvers } from "./user.schema";
// import { bookTypeDefs, bookResolvers } from './book.schema';
// import { combinedTypeDefs, combinedResolvers } from './combined.schema';

const typeDefs = mergeTypeDefs([userTypeDefs]);
const resolvers = mergeResolvers([
  userResolvers,
  //   bookResolvers,
  //   combinedResolvers,
]);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
