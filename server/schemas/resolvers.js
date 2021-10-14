const { User, Product, Category, Order } = require('../models');

const resolvers = {
    Query: {
        categories: async () => {
            return await Category.find();
        },
        user: async (parent, { username }) => {
            return await User.findOne({ username })
                .populate({
                    path: 'orders.products',
                    populate: 'category'
                })
            ;
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

            return { user };
        }
    }
};

module.exports = resolvers;