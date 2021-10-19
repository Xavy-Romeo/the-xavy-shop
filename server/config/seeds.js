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
    {name: 'Golf', image: 'golf.png'},
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

  const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
        'dolore magna aliqua. Id diam vel quam elementum pulvinar etiam. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. ' +  
        'Tellus orci ac auctor augue mauris augue neque gravida in. Mattis nunc sed blandit libero volutpat. '

  const products = await Product.insertMany([
    {
        name: 'Golf Shirt',
        description: description,
        image: 'mens-golf-shirt.jpg',
        fullPrice: 44.49,
        new: true,
        options: [
            {name: 'XS', price: 44.49},
            {name: 'S', price: 44.49},
            {name: 'M', price: 44.49},
            {name: 'L', price: 44.49},
            {name: 'XL', price: 44.49},
        ], 
        category: categories[0]._id,
        subCategory: categories[10]._id
    },
    {
        name: 'Jacket' ,
        description: description,
        image: 'mens-jacket.png',
        fullPrice: 49.99,
        new: true,
        options: [
            {name: 'XS', price: 49.99},
            {name: 'S', price: 49.99},
            {name: 'M', price: 49.99},
            {name: 'L', price: 49.99},
            {name: 'XL', price: 49.99},
        ],
        category: categories[0]._id,
        subCategory: categories[3]._id
    },
    {
        name: 'Joggers',
        description: description,
        image: 'mens-joggers.jpeg',
        salePercent: 30,
        fullPrice: 22.49,
        inStock: false,
        options: [
            {name: 'XS', price: 22.49},
            {name: 'S', price: 22.49},
            {name: 'M', price: 22.49},
            {name: 'L', price: 22.49},
            {name: 'XL', price: 22.49},
        ],
        category: categories[0]._id,
        subCategory: categories[3]._id
    },
    {
        name: 'Pants',
        description: description,
        image: 'mens-pants.jpg',
        salePercent: 20,
        fullPrice: 29.99,
        options: [
            {name: 'XS', price: 29.99},
            {name: 'S', price: 29.99},
            {name: 'M', price: 29.99},
            {name: 'L', price: 29.99},
            {name: 'XL', price: 29.99},
        ],
        category: categories[0]._id,
        subCategory: categories[16]._id
    },
    {
        name: 'Compression Long Sleeve',
        description: description,
        image: 'mens-shirt.jpg',
        salePercent: 10,
        fullPrice: 24.99,
        options: [
            {name: 'XS', price: 24.99},
            {name: 'S', price: 24.99},
            {name: 'M', price: 24.99},
            {name: 'L', price: 24.99},
            {name: 'XL', price: 24.99},
        ],
        category: categories[0]._id,
        subCategory: categories[7]._id
    },
    {
        name: 'Sleeveless Hoodie',
        description: description,
        image: 'mens-sleeveless.jpg',
        fullPrice: 44.49,
        new: true,
        options: [
            {name: 'XS', price: 44.49},
            {name: 'S', price: 44.49},
            {name: 'M', price: 44.49},
            {name: 'L', price: 44.49},
            {name: 'XL', price: 44.49},
        ],
        category: categories[0]._id,
        subCategory: categories[4]._id
    },
    {
        name: 'Speed Chute',
        description: description,
        image: 'running-chute.jpg',
        salePercent: 10,
        fullPrice: 29.99,
        category: categories[3]._id,
        subCategory: categories[7]._id
    },
    {
        name: 'Agility Ladder',
        description: description,
        image: 'running-ladder.jpg',
        salePercent: 10,
        fullPrice: 29.99,
        category: categories[3]._id,
        subCategory: categories[6]._id
    },
    {
        name: 'Golf Shirt',
        description: description,
        image: 'women-golf-shirt.jpg',
        fullPrice: 64.99,
        options: [
            {name: 'XS', price: 64.99},
            {name: 'S', price: 64.99},
            {name: 'M', price: 64.99},
            {name: 'L', price: 64.99},
            {name: 'XL', price: 64.99},
        ],
        category: categories[1]._id,
        subCategory: categories[10]._id
    },
    {
        name: 'Jacket',
        description: description,
        image: 'women-jacket.jpeg',
        salePercent: 20,
        fullPrice: 29.99,
        inStock: false,
        options: [
            {name: 'XS', price: 29.99},
            {name: 'S', price: 29.99},
            {name: 'M', price: 29.99},
            {name: 'L', price: 29.99},
            {name: 'XL', price: 29.99},
        ],
        category: categories[1]._id,
        subCategory: categories[3]._id
    },
    {
        name: 'Leggings',
        description: description,
        image: 'women-leggings.jpg',
        salePercent: 10,
        fullPrice: 37.99,
        options: [
            {name: 'XS', price: 37.99},
            {name: 'S', price: 37.99},
            {name: 'M', price: 37.99},
            {name: 'L', price: 37.99},
            {name: 'XL', price: 37.99},
        ],
        category: categories[1]._id,
        subCategory: categories[15]._id
    },
    {
        name: 'Shorts',
        description: description,
        image: 'women-shorts.jpg',
        salePercent: 10,
        fullPrice: 19.99,
        options: [
            {name: 'XS', price: 19.99},
            {name: 'S', price: 19.99},
            {name: 'M', price: 19.99},
            {name: 'L', price: 23.99},
            {name: 'XL', price: 23.99},
        ],
        category: categories[1]._id,
        subCategory: categories[3]._id
    },
    {
        name: 'Tennis Skort',
        description: description,
        image: 'women-skirt-tennis.jpg',
        fullPrice: 39.99,
        options: [
            {name: 'XS', price: 39.99},
            {name: 'S', price: 39.99},
            {name: 'M', price: 39.99},
            {name: 'L', price: 44.99},
            {name: 'XL', price: 44.99},
        ],
        category: categories[1]._id,
        subCategory: categories[9]._id
    },
    {
        name: 'Sweater',
        description: description,
        image: 'women-sweater.png',
        fullPrice: 39.99,
        new: true,
        options: [
            {name: 'XS', price: 39.99},
            {name: 'S', price: 39.99},
            {name: 'M', price: 39.99},
            {name: 'L', price: 39.99},
            {name: 'XL', price: 39.99},
        ],
        category: categories[1]._id,
        subCategory: categories[3]._id
    },
    {
        name: 'Baseballs',
        description: 'Mattis nunc sed blandit libero volutpat. Semper viverra nam libero justo laoreet sit amet. Tellus in hac habitasse platea dictumst. Risus feugiat in ante metus dictum. ',
        image: 'baseball-balls.jpg',
        salePercent: 10,
        fullPrice: 59.99,
        options: [
            {name: '20 pack', price: 59.99},
            {name: '30 pack', price: 79.99},
            {name: '50 pack', price: 109.99}
        ],
        category: categories[5]._id
    },
    {
        name: 'Baseball Bat',
        description: 'Risus feugiat in ante metus dictum. Et molestie ac feugiat sed lectus vestibulum mattis.',
        image: 'baseball-bat.jpg',
        salePercent: 15,
        fullPrice: 349.99,
        category: categories[5]._id
    },
    {
        name: 'Baseball Glove',
        description: 'Nibh cras pulvinar mattis nunc sed blandit. Amet porttitor eget dolor morbi non arcu. Pharetra vel turpis nunc eget. Ac odio tempor orci dapibus ultrices in iaculis nunc.',
        image: 'baseball-glove.jpg',
        fullPrice: 249.99,
        category: categories[5]._id
    },
    {
        name: "Dodger's Jersey",
        description: 'Nibh cras pulvinar mattis nunc sed blandit. Amet porttitor eget dolor morbi non arcu. Pharetra vel turpis nunc eget. Ac odio tempor orci dapibus ultrices in iaculis nunc.',
        image: 'jersey-dodgers.jpg',
        fullPrice: 299.99,
        new: true,
        options: [
            {name: 'XS', price: 299.99},
            {name: 'S', price: 299.99},
            {name: 'M', price: 299.99},
            {name: 'L', price: 299.99},
            {name: 'XL', price: 299.99},
            {name: 'XXL', price: 299.99},
        ],
        category: categories[5]._id
    },
    {
        name: 'Basketball',
        description: description,
        image: 'basketball-ball.jpg',
        salePercent: 30,
        fullPrice: 49.99,
        category: categories[11]._id
    },
    {
        name: 'Basketball Hoop',
        description: description,
        image: 'basketball-hoop.jpg',
        salePercent: 10,
        fullPrice: 199.99,
        category: categories[11]._id
    },
    {
        name: "Bulls's Jersey",
        description: 'Nibh cras pulvinar mattis nunc sed blandit. Amet porttitor eget dolor morbi non arcu. Pharetra vel turpis nunc eget. Ac odio tempor orci dapibus ultrices in iaculis nunc.',
        image: 'jersey-bulls.jpg',
        fullPrice: 299.99,
        options: [
            {name: 'XS', price: 299.99},
            {name: 'S', price: 299.99},
            {name: 'M', price: 299.99},
            {name: 'L', price: 299.99},
            {name: 'XL', price: 299.99},
            {name: 'XXL', price: 299.99},
        ],
        category: categories[11]._id
    },
    {
        name: 'Punching Bag',
        description: description,
        image: 'boxing-bag.jpeg',
        fullPrice: 99.99,
        new: true,
        category: categories[17]._id,
    },
    {
        name: 'Boxing Gloves',
        description: description,
        image: 'boxing-gloves.jpg',
        salePercent: 30,
        fullPrice: 34.99,
        options: [
            {name: 'Youth', price: 39.99},
            {name: '12 Oz', price: 64.99},
            {name: '14 Oz', price: 64.99},
            {name: '16 Oz', price: 64.99},
        ],
        category: categories[17]._id
    },
    {
        name: 'Fishing Hook',
        description: description,
        image: 'fishing-hook.jpg',
        salePercent: 20,
        fullPrice: 19.99,
        category: categories[12]._id
    },
    {
        name: 'Fishing Line',
        description: description,
        image: 'fishing-line.jpg',
        salePercent: 20,
        fullPrice: 15.99,
        options: [
            {name: '150 Yds', price: 15.99},
            {name: '300 Yds', price: 24.99},
            {name: '500 Yds', price: 36.99},
        ],
        category: categories[12]._id
    },
    {
        name: 'Football',
        description: description,
        image: 'football-ball.jpg',
        salePercent: 20,
        fullPrice: 67.99,
        category: categories[7]._id
    },
    {
        name: 'Football Gloves',
        description: description,
        image: 'football-gloves.jpg',
        salePercent: 20,
        fullPrice: 32.00,
        inStock: false,
        options: [
            {name: 'XS', price: 32.00},
            {name: 'S', price: 32.00},
            {name: 'M', price: 32.00},
            {name: 'L', price: 32.00},
            {name: 'XL', price: 32.00},
        ],
        category: categories[7]._id
    },
    {
        name: "Jets's Jersey",
        description: 'Nibh cras pulvinar mattis nunc sed blandit. Amet porttitor eget dolor morbi non arcu. Pharetra vel turpis nunc eget. Ac odio tempor orci dapibus ultrices in iaculis nunc.',
        image: 'jersey-jets.jpg',
        fullPrice: 299.99,
        options: [
            {name: 'XS', price: 299.99},
            {name: 'S', price: 299.99},
            {name: 'M', price: 299.99},
            {name: 'L', price: 299.99},
            {name: 'XL', price: 299.99},
            {name: 'XXL', price: 299.99},
        ],
        category: categories[7]._id
    },
    {
        name: 'Golf Balls',
        description: description,
        image: 'golf-balls.jpg',
        salePercent: 10,
        fullPrice: 24.99,
        options: [
            {name: '6 pack', price: 24.99},
            {name: '10 pack', price: 34.99},
            {name: '20 pack', price: 64.99},
            {name: '50 pack', price: 129.99},
        ],
        category: categories[10]._id
    },
    {
        name: 'Golf Clubs',
        description: description,
        image: 'golf-clubs.jpeg',
        salePercent: 20,
        fullPrice: 299.99,
        category: categories[10]._id
    },
    {
        name: 'GPS',
        description: description,
        image: 'hiking-gps.jpg',
        salePercent: 20,
        fullPrice: 269.99,
        inStock: false,
        category: categories[16]._id,
        subCategory: categories[3]._id
    },
    {
        name: 'Hiking Stick',
        description: description,
        image: 'hiking-stick.jpg',
        salePercent: 20,
        fullPrice: 124.49,
        category: categories[16]._id
    },
    {
        name: 'Hockey Puck',
        description: description,
        image: 'hockey-puck.png',
        fullPrice: 7.99,
        category: categories[8]._id
    },
    {
        name: 'Hockey Stick',
        description: description,
        image: 'hockey-stick.jpeg',
        salePercent: 10,
        fullPrice: 84.99,
        category: categories[8]._id
    },
    {
        name: "Ducks's Jersey",
        description: 'Nibh cras pulvinar mattis nunc sed blandit. Amet porttitor eget dolor morbi non arcu. Pharetra vel turpis nunc eget. Ac odio tempor orci dapibus ultrices in iaculis nunc.',
        image: 'jersey-ducks.jpg',
        fullPrice: 249.99,
        options: [
            {name: 'XS', price: 249.99},
            {name: 'S', price: 249.99},
            {name: 'M', price: 249.99},
            {name: 'L', price: 249.99},
            {name: 'XL', price: 249.99},
            {name: 'XXL', price: 249.99},
        ],
        category: categories[8]._id
    },
    {
        name: 'Baby Lifting Bodysuit',
        description: description,
        image: 'kids-bodysuit.jpeg',
        fullPrice: 8.49,
        new: true,
        options: [
            {name: 'New Born', price: 8.49},
            {name: '3 Months', price: 8.49},
            {name: '6 Months', price: 8.49},
            {name: '12 Months', price: 8.49},
            {name: '18 Months', price: 8.49},
        ],
        category: categories[2]._id
    },
    {
        name: 'Kids Long Sleeve Shirt',
        description: description,
        image: 'kids-longsleeve.jpg',
        salePercent: 10,
        fullPrice: 8.99,
        inStock: false,
        options: [
            {name: 'XS', price: 8.99},
            {name: 'S', price: 8.99},
            {name: 'M', price: 8.99},
            {name: 'L', price: 8.99},
            {name: 'XL', price: 8.99},
        ],
        category: categories[2]._id,
        subCategory: categories[7]._id
    },
    {
        name: 'Kids Shorts',
        description: description,
        image: 'kids-shorts.jpg',
        salePercent: 20,
        fullPrice: 14.99,
        options: [
            {name: 'XS', price: 14.99},
            {name: 'S', price: 14.99},
            {name: 'M', price: 14.99},
            {name: 'L', price: 14.99},
            {name: 'XL', price: 14.99},
        ],
        category: categories[2]._id,
        subCategory: categories[6]._id
    },
    
    {
        name: 'Pre-Workout',
        description: description,
        image: 'nutrition-pre-workout.jpg',
        fullPrice: 29.99,
        category: categories[20]._id,
        subCategory: categories[4]._id
    },
    {
        name: 'Protein Bars',
        description: description,
        image: 'nutrition-protein-bar.jpg',
        fullPrice: 9.99,
        category: categories[20]._id,
        subCategory: categories[16]._id
    },
    {
        name: 'Cleats',
        description: description,
        image: 'shoes-cleats.jpg',
        salePercent: 10,
        fullPrice: 154.99,
        options: [
            {name: '7', price: 154.99},
            {name: '8', price: 154.99},
            {name: '9', price: 154.99},
            {name: '10', price: 154.99},
            {name: '11', price: 165.99},
            {name: '12', price: 165.99},
            {name: '13', price: 165.99},
        ],
        category: categories[19]._id,
        subCategory: categories[6]._id
    },
    {
        name: 'Running Shoes',
        description: description,
        image: 'shoes-running.jpg',
        fullPrice: 79.99,
        new: true,
        options: [
            {name: '7', price: 79.99},
            {name: '8', price: 79.99},
            {name: '9', price: 79.99},
            {name: '10', price: 79.99},
            {name: '11', price: 85.99},
            {name: '12', price: 85.99},
            {name: '13', price: 85.99},
        ],
        category: categories[19]._id,
        subCategory: categories[3]._id
    },
    {
        name: 'Snow Goggles',
        description: description,
        image: 'snow-goggles.jpg',
        fullPrice: 139.99,
        new: true,
        category: categories[18]._id,
        subCategory: categories[16]._id
    },
    {
        name: 'Snowboard',
        description: description,
        image: 'snow-snowboard.jpg',
        salePercent: 15,
        fullPrice: 354.99,
        category: categories[18]._id
    },
    {
        name: 'Soccer Ball',
        description: description,
        image: 'soccer-ball.jpeg',
        salePercent: 10,
        fullPrice: 34.99,
        options: [
            {name: 'Size 3', price: 34.99},
            {name: 'Size 4', price: 37.99},
            {name: 'Size 5', price: 44.99},
        ],
        category: categories[6]._id
    },
    {
        name: 'Soccer Goal',
        description: description,
        image: 'soccer-goal.jpg',
        salePercent: 15,
        fullPrice: 34.99,
        category: categories[6]._id
    },
    {
        name: 'Chivas Jersey',
        description: 'Nibh cras pulvinar mattis nunc sed blandit. Amet porttitor eget dolor morbi non arcu. Pharetra vel turpis nunc eget. Ac odio tempor orci dapibus ultrices in iaculis nunc.',
        image: 'jersey-chivas.jpg',
        fullPrice: 139.99,
        new: true,
        options: [
            {name: 'XS', price: 139.99},
            {name: 'S', price: 139.99},
            {name: 'M', price: 139.99},
            {name: 'L', price: 139.99},
            {name: 'XL', price: 139.99},
            {name: 'XXL', price: 139.99},
        ],
        category: categories[6]._id
    },
    {
        name: 'Swimming Cap',
        description: description,
        image: 'swimming-cap.png',
        salePercent: 20,
        fullPrice: 12.59,
        inStock: false,
        options: [
            {name: 'XS', price: 12.59},
            {name: 'M', price: 12.59},
            {name: 'XL', price: 12.59},
        ],
        category: categories[14]._id
    },
    {
        name: 'Swimming Goggles',
        description: description,
        image: 'swimming-goggles.jpg',
        salePercent: 20,
        fullPrice: 21.49,
        category: categories[14]._id
    },
    {
        name: 'Tennis Balls',
        description: description,
        image: 'tennis-balls.jpg',
        fullPrice: 4.99,
        options: [
            {name: '3 pack', price: 4.99},
            {name: '10 pack', price: 9.99},
            {name: '20 pack', price: 19.99},
            {name: '50 pack', price: 39.99},
        ],
        category: categories[9]._id,
        subCategory: categories[2]._id
    },
    {
        name: 'Tennis Raquet',
        description: description,
        image: 'tennis-raquet.jpg',
        salePercent: 10,
        fullPrice: 64.99,
        category: categories[9]._id
    },
    {
        name: 'Volleyball',
        description: description,
        image: 'volleyball-ball.jpg',
        fullPrice: 22.99,
        category: categories[13]._id,
        subCategory: categories[2]._id
    },
    {
        name: 'Volleyball Net',
        description: description,
        image: 'volleyball-net.jpg',
        salePercent: 10,
        fullPrice: 122.99,
        category: categories[13]._id
    },
    {
        name: 'Olympic Bar',
        description: description,
        image: 'weights-bar.jpg',
        salePercent: 10,
        fullPrice: 109.99,
        inStock: false,
        category: categories[4]._id
    },
    {
        name: 'Dumbell',
        description: description,
        image: 'weights-dumbell.jpg',
        fullPrice: 15.99,
        options: [
            {name: '5 lbs', price: 15.99},
            {name: '10 lbs', price: 19.99},
            {name: '20 lbs', price: 34.99},
            {name: '35 lbs', price: 59.99},
            {name: '45 lbs', price: 74.99},
            {name: '60 lbs', price: 99.99},
        ],
        category: categories[4]._id
    },
    {
        name: 'Weight Rack',
        description: description,
        image: 'weights-rack.jpeg',
        salePercent: 15,
        fullPrice: 444.49,
        category: categories[4]._id
    },
    {
        name: 'Yoga Mat Bag',
        description: description,
        image: 'yoga-mat-bag.jpg',
        salePercent: 20,
        fullPrice: 49.99,
        inStock: false,
        category: categories[15]._id
    },
    {
        name: 'Yoga Mat',
        description: description,
        image: 'yoga-mat.jpg',
        salePercent: 10,
        fullPrice: 69.99,
        category: categories[15]._id
    }  
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