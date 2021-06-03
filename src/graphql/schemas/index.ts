import { gql } from 'apollo-server';

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    projects: [Project!]
  }
  type Project {
    id: ID!
    name: String
    price: Float!
    userId: ID!
    user: User!
  }
  type Query {
    projects: [Project!]!
    projectsByUser(userId: ID!): [Project!]!
    projectsById(id: [ID!]): [Project!]!
    project(id: ID!): Project
    users: [User!]!
    usersById(id:[ID!]): [User!]!
    user(id: ID!): User    
  }
  type Mutation {
    createUser(name: String!, email:String!): User!
    updateUser(id: ID!, name: String, email:String): Int!
    deleteUser(id: ID!): Int!
    createProject(name: String, price:Float, userId: ID!): Project!
    updateProject(id: ID!, name: String!, price:Float!): Int!
    deleteProject(id: ID!): Int! 
  }
`;

export default typeDefs;