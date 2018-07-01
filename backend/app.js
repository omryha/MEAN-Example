const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('First middleware');
    console.log(req.url); // Browsers request favicon so the 'First middleware' will appear twice 
    next();
});

app.use((req,res,next) => {
    res.send("Hello from Express");
});

module.exports = app;