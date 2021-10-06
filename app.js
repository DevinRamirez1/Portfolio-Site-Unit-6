//Required sources
const express = require('express');


//Setting view engine
app.set('view engine', 'pug');

//Setting up static middleware
app.use('/static', express.static('public'));