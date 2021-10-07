//Required sources
const express = require('express');
const routes = require('./routes/index');


//Setting view engine
app.set('view engine', 'pug');

//Setting up static middleware
app.use('/static', express.static('public'));

//Router
app.use('/', routes);