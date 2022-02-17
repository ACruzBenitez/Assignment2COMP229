let mongoose = require('mongoose');

// Create a model class
let loginModel = mongoose.Schema(
    {
        username: String,
        password: String,
        emaila: String
    },
    {
        collection: "user"
    }
);

module.exports = mongoose.model('user', loginModel);