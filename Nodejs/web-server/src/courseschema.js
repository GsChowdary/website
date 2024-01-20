const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    Name: String,
});

module.exports = mongoose.model("Course", Course);