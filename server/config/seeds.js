const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    {name: "Men's", image:'mens.jpg'},
    {name: "Women's", image:'womens.jpg'},
    {name: 'Kids', image:'kids.jpg'},
    {name: 'Running', image:'running.jpg'},
    {name: 'Weights', image:'weights.jpg'},
    {name: 'Baseball', image:'baseball.jpg'},
    {name: 'Soccer', image:'soccer.jpg'},
    {name: 'Football', image:'football.jpg'},
    {name: 'Hockey', image:'hockey.jpg'},
    {name: 'Tennis', image:'tennis.jpg'},
    {name: 'Basketball', image:'basketball.jpg'},
    {name: 'Fishing', image:'fishing.jpg'},
    {name: 'Volleyball', image:'volleyball.jpg'},
    {name: 'Swimming', image:'swimming.jpg'},
    {name: 'Yoga', image:'yoga.jpg'},
    {name: 'Hiking', image:'hiking.jpg'},
    {name: 'Boxing', image:'boxing.jpg'},
    {name: 'Snow', image:'snow.jpg'},
    {name: 'Shoes', image:'shoes.jpg'},
    {name: 'Nutrition', image:'nutrition.jpg'}
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
        name: "Men's Shirt", 
        description: 'Lorem Ipsum Lorem Ipsum',
        image: '',
        price: 10.00,
        sale: false,
        salePercent: 30,
        fullPrice: 5.00, 
        new: false,
        inStock: true,
        category: categories[0]._id,
        subCategory: categories[1]._id
    },
    {
        name: "Men's Golf Shirt", 
        description: 'Lorem Ipsum Lorem Ipsum',
        image: '',
        price: 10.00,
        sale: false,
        salePercent: 30,
        fullPrice: 5.00,
        new: false,
        inStock: true,
        category: categories[0]._id,
        subCategory: categories[1]._id
    },
    {
        name: "Men's Jacket", 
        description: 'Lorem Ipsum Lorem Ipsum',
        image: '',
        price: 10.00,
        sale: false,
        salePercent: 30,
        fullPrice: 5.00, 
        new: true,
        inStock: true,
        category: categories[0]._id,
        subCategory: categories[1]._id
    },
    {
        name: "Men's Joggers", 
        description: 'Lorem Ipsum Lorem Ipsum',
        image: '',
        price: 10.00,
        sale: false,
        salePercent: 30,
        fullPrice: 5.00, 
        new: false,
        inStock: true,
        category: categories[0]._id,
        subCategory: categories[1]._id
    },
    {
        name: "Men's Pants", 
        description: 'Lorem Ipsum Lorem Ipsum',
        image: '',
        price: 10.00,
        sale: false,
        salePercent: 30,
        fullPrice: 5.00, 
        new: false,
        inStock: true,
        category: categories[0]._id,
        subCategory: categories[1]._id
    },
    {
        name: "Men's Sleeveless", 
        description: 'Lorem Ipsum Lorem Ipsum',
        image: '',
        price: 10.00,
        sale: false,
        salePercent: 30,
        fullPrice: 5.00, 
        new: false,
        inStock: true,
        category: categories[0]._id,
        subCategory: categories[1]._id
    },
    {
        name: "Women's Shirt", 
        description: 'Lorem Ipsum Lorem Ipsum',
        image: '',
        price: 10.00,
        sale: false,
        salePercent: 30,
        fullPrice: 5.00, 
        new: false,
        inStock: true,
        category: categories[0]._id,
        subCategory: categories[1]._id
    },
    {
        name: "Women's Jacket", 
        description: 'Lorem Ipsum Lorem Ipsum',
        image: '',
        price: 10.00,
        sale: false,
        salePercent: 30,
        fullPrice: 5.00, 
        new: true,
        inStock: true,
        category: categories[0]._id,
        subCategory: categories[1]._id
    },
    {
        name: "Women's Leggings", 
        description: 'Lorem Ipsum Lorem Ipsum',
        image: '',
        price: 10.00,
        sale: false,
        salePercent: 30,
        fullPrice: 5.00, 
        new: false,
        inStock: true,
        category: categories[0]._id,
        subCategory: categories[1]._id
    },
    {
        name: "Women's Shorts", 
        description: 'Lorem Ipsum Lorem Ipsum',
        image: '',
        price: 10.00,
        sale: false,
        salePercent: 30,
        fullPrice: 5.00, 
        new: false,
        inStock: true,
        category: categories[0]._id,
        subCategory: categories[1]._id
    },
    {
        name: "Women's Skirt", 
        description: 'Lorem Ipsum Lorem Ipsum',
        image: '',
        price: 10.00,
        sale: false,
        salePercent: 30,
        fullPrice: 5.00, 
        new: false,
        inStock: true,
        category: categories[0]._id,
        subCategory: categories[1]._id
    },
    {
        name: "Women's Sweater", 
        description: 'Lorem Ipsum Lorem Ipsum',
        image: '',
        price: 10.00,
        sale: false,
        salePercent: 30,
        fullPrice: 5.00, 
        new: true,
        inStock: true,
        category: categories[0]._id,
        subCategory: categories[1]._id
    },
    {
        name: 'Jersey Bulls', 
        description: 'Lorem Ipsum Lorem Ipsum',
        image: '',
        price: 10.00,
        sale: false,
        salePercent: 30,
        fullPrice: 5.00, 
        new: false,
        inStock: true,
        category: categories[0]._id,
        subCategory: categories[1]._id
    },
    {
        name: 'Jersey Chivas', 
        description: 'Lorem Ipsum Lorem Ipsum',
        image: '',
        price: 10.00,
        sale: false,
        salePercent: 30,
        fullPrice: 5.00, 
        new: true,
        inStock: true,
        category: categories[0]._id,
        subCategory: categories[1]._id
    },
    {
        name: 'Jersey Dodgers', 
        description: 'Lorem Ipsum Lorem Ipsum',
        image: '',
        price: 10.00,
        sale: false,
        salePercent: 30,
        fullPrice: 5.00, 
        new: true,
        inStock: true,
        category: categories[0]._id,
        subCategory: categories[1]._id
    },
    {
        name: 'Jersey Ducks', 
        description: 'Lorem Ipsum Lorem Ipsum',
        image: '',
        price: 10.00,
        sale: false,
        salePercent: 30,
        fullPrice: 5.00, 
        new: false,
        inStock: true,
        category: categories[0]._id,
        subCategory: categories[1]._id
    },
    {
        name: 'Jersey Jets', 
        description: 'Lorem Ipsum Lorem Ipsum',
        image: '',
        price: 10.00,
        sale: false,
        salePercent: 30,
        fullPrice: 5.00, 
        new: false,
        inStock: true,
        category: categories[0]._id,
        subCategory: categories[1]._id
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Robert',
    lastName: 'Weaver',
    username: 'Rob123',
    email: 'rob@testmail.com',
    password: 'password',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Oscar',
    lastName: 'Valens',
    username: 'Valient444',
    email: 'ovalens@testmail.com',
    password: 'password'
  });

  await User.create({
    firstName: 'Sandra',
    lastName: 'Smith',
    username: 'Sandy456',
    email: 'sandras@testmail.com',
    password: 'password'
  });

  console.log('users seeded');

  process.exit();
});