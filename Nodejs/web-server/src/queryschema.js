const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const querySchema = new Schema({
    Name: String,
    Email: String,
    Phone: Number,
    Query: String,
});


module.exports = mongoose.model("Query", querySchema);