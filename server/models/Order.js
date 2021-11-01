const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        },
    ],    
    quantities: [
        {
            type: Number,
            default: 1
        }
    ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;