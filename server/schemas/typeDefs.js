const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Category {
        _id: ID
        name: String
    }

    type Product {
        _id: ID
        name: String
        description: String
        image: String
        price: Float
        sale: Boolean
        salePercent: Int
        fullPrice: Float
        new: Boolean
        inStock: Boolean
        category: Category
        subCategory: Category
    }

    type Order {
        _id: ID
        purchaseDate: String
        products: [Product]
    }

    type User {
        _id: ID
        firstName: String
        lastName: String
        username: String
        email: String
        orders: [Order]
    }

    type Query {
        user(username: String!): User
        categories: [Category]
        products: [Product]
        product(_id: ID!): Product
    }

    type Mutation {
        addUser(
            firstName: String!, 
            lastName: String!, 
            username: String!, 
            email: String!,
            password: String!
        ): User
    }
`;

module.exports = typeDefs;