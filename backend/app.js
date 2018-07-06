const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json()); // Returns a valid Express middleware

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});

app.post('/api/posts', (req, res, next) => {
    const post = req.body;
    console.log(post);
    res.status(201).json({
        message: 'Post added successfully'
    }); // 201 = OK, new resource was created
});
// MFUrGSWvptmiJPLc
app.get('/api/posts', (req, res, next) => {
    const posts = [];
    res.status(200).json({ // 2000 == Success
        message: 'Posts fetched successfully',
        posts: posts
    });
});

module.exports = app;