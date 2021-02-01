const express = require('express');
const r = express.Router();

r.get('/', function(req, res, next) {
    res.send("Api is working");
})

module.exports = r;