import { gql } from "apollo-server-koa";

const userTypeDefs = gql`
  type UserProfile {
    userId: ID
    name: String
  }
  type Query {
    userProfile(id: ID!): UserProfile
  }
`;

const userResolvers = {
  Query: {
    userProfile: async (parent, args, context, info) => {
      return { userId: args.id, name: `hello ${args.id}` };
    },
  },
};

export { userTypeDefs, userResolvers };
