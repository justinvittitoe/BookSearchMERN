import { gql } from 'graphql-tag';

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }
    
    type Book {
        bookId: String!
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    
    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        user(id: ID, username: String): User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        createUser(username: String!, email: String!, password: String!): Auth
        saveBook(book: BookInput!): User
        deleteBook(bookId: String!): User
    }

    input BookInput {
        bookId: String!
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    
`

export default typeDefs