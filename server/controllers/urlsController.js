const express = require('express');
const router = express.Router();
const db = require('../models');



router.get('/api/urls/', async (req, res) => {
    try {
        const urls = await db.URL.find({});
        res.json(urls)
    }
    catch (err) {
        res.status(500).send('Internal Server Error');
    }
});


/**
 * Get URL by shortened Link
 */
router.get('/api/urls/:eId', async (req, res) => {
    const { eId } = req.params;

    if (!eId) {
        res.status(404).send('Invalid Link');
    }
    try {
        const url = await db.URL.findOne({ eId: eId });
        if (url) {
            res.json(url.url);
        }
        else {
            res.status(404).send('Link Not Found');
        }
    }
    catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

router.post('/api/urls/', async (req, res) => {
    const { url } = req.body;

    try {

        const foundUrl = await db.URL.findOne({ url: url });
        if(foundUrl){
            res.json(foundUrl.eId);
        }
        else {
            const newUrl = await db.URL.create({url: url});
            res.json(newUrl.eId);
        }
    }
    catch (err){
        console.error(err)
        res.json(err);
    }

});

router.delete('/api/urls', async (req, res) => {
    try {
        const results = await db.URL.deleteMany({});
        res.json(results);
    }
    catch(err){
        res.json(err);
    }
})





module.exports = router;