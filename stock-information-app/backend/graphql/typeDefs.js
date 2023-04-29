const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  email: String
  stocks: [String!]
}

type Auth {
  user: ID!
  profile: User
}

type Query {
  users: [User]!
  user(userId: ID!): User
}

type Mutation {
  addUser(email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  addStock(userId: ID!, stock: String!): User
  removeUser(userId: ID!): User
  removeStock(userId: ID!, stock: String!): User
}`;
// const typeDefs = gql`
//   type Profile {
//     _id: ID
//     user: String
//     email: String
//     stocks: [Stock!]
//   }

//   # Set up an Auth type to handle returning data from a profile creating or user login
//   type Auth {
//     user: ID!
//     profile: Profile
//   }

//   type Query {
//     profiles: [Profile]!
//     profile(profileId: ID!): Profile
//   }

//   type Mutation {
//     # Set up mutations to handle creating a profile or logging into a profile and return Auth type
//     addProfile(name: String!, email: String!, password: String!): Auth
//     login(email: String!, password: String!): Auth

//     addSkill(profileId: ID!, stock0.: String!): Profile
//     removeProfile(profileId: ID!): Profile
//     removeStock(profileId: ID!, stock: String!): Profile
//   }
// `;
module.exports = typeDefs;

