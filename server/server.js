const express = require('express');
const app = express();
const path = require('path');
const urlRoutes = require('./controllers/urlsController');
const PORT = process.env.PORT || 3000;



///////////////
// Middleware
///////////////
app.use(express.static('../client/build'));

///////////////
// Routes
///////////////
app.use(urlRoutes);

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

app.listen(PORT, () => {
    console.log(`Server is listening at localhost:${PORT}`);
})




