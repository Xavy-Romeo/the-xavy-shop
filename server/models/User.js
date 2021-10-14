const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
});
  
// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;