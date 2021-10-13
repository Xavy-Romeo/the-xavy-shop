const { User, Product, Category, Order } = require('../models');

const resolvers = {
    Query: {
        categories: () => {
            return Category.find();
        }
    }
};

module.exports = resolvers;