import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($firstName: String!, $lastName: String!, $email: String!, $username: String!, $password: String!) {
        addUser(firstName: $firstName, lastName: $lastName, email: $email, username: $username, password: $password) {
            token
            user {
                _id
                firstName
                lastName
                username
            }
        }
    }
`;

export const UPDATE_PRODUCT_PRICE = gql`
    mutation Mutation($productId: ID!, $newPrice: Float!) {
        updatePrice(productId: $productId, newPrice: $newPrice) {
            _id
            price
        }
    }
`;