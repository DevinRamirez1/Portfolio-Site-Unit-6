//Required sources
const express = require('express');
const routes = require('./routes/index');

const app = express();

//Setting view engine
app.set('view engine', 'pug');

//Setting up static middleware
app.use('/static', express.static('public'));

//Router
app.use('/', routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));