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

module.exports = typeDefs;
