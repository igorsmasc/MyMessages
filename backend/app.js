const express = require('express');

const app = express();

app.use('/api/posts' , (req, res, next) => {
    const posts = [
        {
            id: 'g43f2f332rf', 
            title: 'First server-side post', 
            content: 'This is coming from the Server'
        },
        {
            id: '325f432f6', 
            title: 'Second server-side post', 
            content: 'This is coming from the Server'
        },
    ];
    
    res.status(200).json({
        message: 'Posts fetched succesfully!',
        posts: posts
    });
});

module.exports = app;
