const { AuthenticationError } = require('apollo-server-express');

const { User, Product, Category, Order } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id)
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
        },
        checkout: async (parent, args, context) => {
            const url = new URL(context.headers.referer).origin;
            const order = new Order({ products: args.products });
            const line_items = [];

            const { products } = await order.populate('products');

            for (let i = 0; i < products.length; i++) {

                const product = await stripe.products.create({
                    name: products[i].name,
                    description: products[i].description,
                    images: [`${url}/images/productImages/${products[i].image}`],
                });
        
                const price = await stripe.prices.create({
                    product: product.id,
                    unit_amount: products[i].price * 100,
                    currency: 'usd',
                });
        
                line_items.push({
                    price: price.id,
                    adjustable_quantity: {
                        enabled: true,
                        minimum: 1,
                        maximum: 20
                    },
                    quantity: products[i].purchaseQuantity
                });
            }

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items,
                mode: 'payment',
                success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${url}/shop`
            });

            return { session: session.id };
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
        },
        updatePrice: async (parent, { productId, newPrice }) => {
            const updatedProductPrice = await Product.findOneAndUpdate(
                { _id: productId },
                { price: newPrice },
                { new: true }
            );

            return updatedProductPrice;
        },
        updateQuantity: async (parent, { productId, newQuantity }) => {
            const updatedProductPrice = await Product.findOneAndUpdate(
                { _id: productId },
                { purchaseQuantity: newQuantity },
                { new: true }
            );

            return updatedProductPrice;
        },

    }
};

module.exports = resolvers;