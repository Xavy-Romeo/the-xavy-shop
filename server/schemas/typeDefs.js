const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Category {
        _id: ID
        name: String
        image: String
    }

    type Product {
        _id: ID
        name: String
        description: String
        image: String
        salePercent: Int
        fullPrice: Float
        price: Float
        new: Boolean
        inStock: Boolean
        purchaseQuantity: Int
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

    type Auth {
        token: ID
        user: User
    }

    type Checkout {
        session: ID
    }

    type Query {
        user: User
        users: [User]
        category(_id: ID!): Category
        categories: [Category]
        products: [Product]
        product(_id: ID!): Product
        checkout(products: [ID]!): Checkout
    }

    type Mutation {
        addUser(
            firstName: String!, 
            lastName: String!, 
            username: String!, 
            email: String!,
            password: String!
        ): Auth
        login(
            username: String!, 
            password: String!
        ): Auth
        updatePrice(
            productId: ID!,
            newPrice: Float!
        ): Product
        updateQuantity(
            productId: ID!
            newQuantity: Int!
        ): Product
    }
`;

module.exports = typeDefs;