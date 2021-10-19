const { AuthenticationError } = require('apollo-server-express');

const { User, Product, Category, Order } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findOne(context.user._id)
                    .populate({
                        path: 'orders.products',
                        populate: 'category'
                    })
                ;
            
                // sort orders by most recent first
                user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

                return user;
            }

            throw new AuthenticationError('You must be logged in to view this content!!!')           
        },
        users: async () => {
            return await User.find()
                .populate({
                    path: 'orders.products',
                    populate: 'category'
                })
            ;
        },
        category: async (parent, { _id }) => {
            return await Category.findById({ _id });
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
            const token = signToken(user);

            return { token, user } ;
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

            const token = signToken(user);

            return { token, user };
        }

    }
};

module.exports = resolvers;