const  mongoose = require('mongoose');
const { Schema } = mongoose;

const filterSchema = new Schema({
    domain: String
});

/**
 * Filter
 * 
 * Stores domains to be excluded from shortening
 */
const Filter = mongoose.model('Filter', filterSchema);

module.exports = Filter;