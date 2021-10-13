const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        min: 3.00
    },
    sale: {
        type: Boolean,
        default: false
    },
    salePercent: {
        type: Number,
        max: 30,
        min: 0,
        default: 0
    },
    fullPrice: {
        type: Number,
        required: true,
        min: 4.99
    },
    new: {
        type: Boolean,
        default: false
    },
    inStock: {
        type: Boolean,
        default: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    subCategory: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;