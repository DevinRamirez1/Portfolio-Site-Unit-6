//Required sources
const express = require('express');
const { projects } = require('data.json');
const router = express.Router();

// GET home page
router.get('/', function(req, res, next) {
    res.render('index', { data });
  });

//Render about
router.get('/about', (req, res) => {
    res.render('about');
});

//Get projects
router.get('/projects/id:', (req, res, next) => {
    const projectId = req.params.id;
    const project = projects.find( ({ id }) => id === +projectId);

    if (project) {
        res.render('project', { project} )
    } else {
        const err = new Error();
        err.message = "Yikes, looks like there is something wrong with the server."
        err.status = 500;
        next(err);
    }
});