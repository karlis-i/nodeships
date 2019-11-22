
'use strict';

const express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
    console.log('served /index');
});

router.get('/shoot', (req, res) => {
    res.send('Shots fired');
});

module.exports = router;
