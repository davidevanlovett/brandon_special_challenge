const  mongoose = require('mongoose');
const { Schema } = mongoose;

const urlSchema = new Schema({
    eId: String,
    url: String,
    meta: {
        hits: Number
    }
});

/**
 * URL
 * 
 * Contains eId, the external id, the URL itself, and metadata
 */
const URL = mongoose.model('URL', urlSchema);

module.exports = URL;