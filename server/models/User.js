const mongoose = require('mongoose');
const { Schema } = mongoose;

const Order = require('./Order');

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        match: [/^[a-zA-Z]+$/, 'Please use letters only!']
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        match: [/^[a-zA-Z]+$/, 'Please use letters only!']
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true, 
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email format']
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    orders: [Order.schema]
});

const User = mongoose.model('User', userSchema);

module.exports = User;