const mongoose = require('mongoose');

// Schema creating. Notice: in node.js (and JS) - string is String
const postSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true }
});
//Add this for using it outside of this mongoose file
// Collection name is ALWAYS pluaral for model name (e.g posts)
module.exports = mongoose.model('Post', postSchema);