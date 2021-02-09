const express = require('express');
const app = express();
const path = require('path');
const urlRoutes = require('./controllers/urlsController');
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');

///////////////
// Middleware
///////////////
app.use(express.static('../client/build'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

///////////////
// Routes
///////////////
app.use(urlRoutes);

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

mongoose.connect(process.env.MONOGODB_URI || 'mongodb://localhost/url_shortening', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening at localhost:${PORT}`);
    });
});




