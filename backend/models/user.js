const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

// Schema creating. Notice: in node.js (and JS) - string is String
const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

//Add this for using it outside of this mongoose file
// Collection name is ALWAYS plural for model name (e.g posts)
module.exports = mongoose.model('User', userSchema);