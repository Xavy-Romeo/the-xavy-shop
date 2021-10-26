import { gql } from '@apollo/client';

export const QUERY_CATEGORIES = gql`
    {
        categories {
            _id
            name
            image
        }
    }
`;

export const QUERY_GET_CATEGORY = gql`
    query getCategory($category: ID!) {
        category(category: $category) {
            _id
            name
            image
        }
    }
`;

export const QUERY_ALL_PRODUCTS = gql`
    {
        products {
            _id
            name
            description
            image
            salePercent
            fullPrice
            new
            inStock
            category {
                _id
                name
            }
            subCategory {
                name
            }
        }
    }
`;

export const QUERY_GET_PRODUCT = gql`
    query getProduct($product: ID) {
        product(product: $product) {
            _id
            name
            description
            image
            salePercent
            fullPrice
            inStock
            category {
                _id
                name
                image
            }
            subCategory {
                _id
                name
                image
            }
        }
    }
`;

export const QUERY_CHECKOUT = gql`
    query getCheckout($products: [ID]!) {
        checkout(products: $products) {
            session
        }
    }
`;

export const QUERY_USER = gql`
    {
        user {
            _id
            firstName
            lastName
            username
            email
            orders {
                _id
                purchaseDate
                products {
                    _id
                    name
                    description
                    price
                    purchaseQuantity
                    image
                    category {
                        _id
                        name
                    }
                }
            }
        }
    }
`;