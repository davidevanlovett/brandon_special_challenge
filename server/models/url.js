const mongoose = require('mongoose');
const { Schema } = mongoose;
const { encryptURL } = require('../utils/encrypt');

const urlSchema = new Schema({
    eId: String,
    url: String,
    meta: {
        hits: {
            type: Number,
            default: 0
        }
    }
    // Index?
});



urlSchema.pre('save', function (next) {
    this.eId = encryptURL(this.url);
    next();
});
/**
 * URL
 * 
 * Contains eId, the external id, the URL itself, and metadata
 */
const URL = mongoose.model('URL', urlSchema);

module.exports = URL;