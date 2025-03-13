const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true,
        unique : true
    },

    password : {
        type : String,
        required : true
    },

    role : {
        type : String,
        enum : ['Admin', 'User'], default : 'User'
    }
});

userSchema.pre('save', function(next) {
    if(!this.isModified('password')) return next();
    this.password = bcrypt.hashSync(this.password, 10);
});

const User = mongoose.model('User', userSchema);
module.exports = User;