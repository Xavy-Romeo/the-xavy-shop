const { AuthenticationError } = require('apollo-server-express');

const { User, Product, Category, Order } = require('../models');

const resolvers = {
    Query: {
        user: async (parent, { username }) => {
            return await User.findOne({ username })
                .populate({
                    path: 'orders.products',
                    populate: 'category'
                })
            ;
        },
        users: async () => {
            return await User.find()
                .populate({
                    path: 'orders.products',
                    populate: 'category'
                })
            ;
        },
        categories: async () => {
            return await Category.find();
        },
        
        products: async () => {
            return await Product.find()
                .populate('category')
                .populate('subCategory')
            ;
        },
        product: async (parent, { _id }) => {
            return await Product.findById({ _id })
                .populate('category')
                .populate('subCategory')
            ;
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);

            return user;
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError(
                    'The username and password entered does not match our records. Please try again.'
                );
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError(
                    'The username and password entered does not match our records. Please try again.'
                ); 
            }

            return user;
        }

    }
};

module.exports = resolvers;