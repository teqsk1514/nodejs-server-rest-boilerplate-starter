const express = require('express');
const route = express.Router();




module.exports = (app) => {
    app.use('/auth', route)

    route.get('/test', (req, res, next) => res.json('Auth Testing Route Working'))
}