const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const Post = require('./models/post');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://omry:MFUrGSWvptmiJPLc@cluster0-ttxvy.mongodb.net/node-angular?retryWrites=true")
    .then(() => {
        console.log('Connected to DB')
    })
    .catch(() => {
        console.log('Connection Failed');
    });;
app.use(bodyParser.json()); // Returns a valid Express middleware

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});

app.post('/api/posts', (req, res, next) => {
    const post = new Post({ // Create object for mongoose
        title: req.body.title,
        content: req.body.content
    });
    post.save().then(createdPost => {
        res.status(201).json({
            message: 'Post added successfully',
            postID: createdPost.id
        });
    }); // 201 = OK, new resource was created
});

app.get('/api/posts', (req, res, next) => {
    Post.find()
        .then(documents => {
            res.status(200).json({ // 2000 == Success
                message: 'Posts fetched successfully',
                posts: documents
            });
        });
});

app.delete('/api/posts/:id', (req, res, next) => {
    Post.deleteOne({ _id: req.params.id }).then(result => {

        res.status(200).json({ message: 'Post Deleted' });
    })
})

module.exports = app;