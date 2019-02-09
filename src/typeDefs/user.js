import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    me: User @auth
    user(id: ID!): User @auth
    users: [User!]!
  }

  extend type Mutation {
    signUp(
      email: String!
      username: String!
      name: String!
      password: String!
    ): User
    signIn(email: String!, password: String!): User
    signOut: Boolean @auth
  }

  type User {
    id: ID!
    email: String!
    username: String!
    name: String!
    createdAt: String!
  }
`;
