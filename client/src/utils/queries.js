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
                name
            }
            subCategory {
                name
            }
        }
    }
`;