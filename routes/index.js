//Required sources
const express = require('express');
const { data } = require('data.json');
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
});