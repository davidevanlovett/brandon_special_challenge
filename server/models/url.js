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
    },
    https: {
        type: Boolean,
        default: false
    }
    // Index?
});



urlSchema.pre('save', function (next) {
    const parts = this.url.split('://');
    if(parts.length === 0){
        const err = new Error('Bad URL Supplied');
        next(err);
    }
    else if(parts.length === 1){
        this.https = 0;
        this.url = parts[0];
        this.eId = encryptURL(this.url);
    }
    else if(parts.length === 2){
        this.https = parts[0] === 'https';
        this.url = parts[1];
        this.eId = encryptURL(this.url);
    }
    next();
});
/**
 * URL
 * 
 * Contains eId, the external id, the URL itself, and metadata
 */
const URL = mongoose.model('URL', urlSchema);

module.exports = URL;