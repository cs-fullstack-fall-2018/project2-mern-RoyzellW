
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    username: String,
    title: String,
    content: String,

});


module.exports = Blog = mongoose.model('item', BlogSchema);