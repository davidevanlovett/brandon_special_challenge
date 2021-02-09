const express = require('express');
const router = express.Router();



router.get('/api/urls', (req,res) => {
    res.send('URL controller hit succesfully');
})







module.exports = router;