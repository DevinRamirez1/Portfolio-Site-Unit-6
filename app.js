//Required sources
const express = require('express');
const path = require('path');
const routes = require('./routes/index');

const app = express();

//Setting view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Setting up static middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static('public'));

//Router
app.use('/', routes);

//404 Handler
app.use((req, res, next) => {
    res.status(404).render('page-not-found');
    console.log('Oh no! Looks like page was not found');
});

//Global error handler
app.use((err, req, res, next) => {
    if (err.status === 404) {
        res.status(404).render('page-not-found', {err});
    } else {
        err.message = err.message || 'Yikes, look like something went wrong with the server!';
        res.status(err.status || 500).render('error', {err});
        console.log(err.message);
    }
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));