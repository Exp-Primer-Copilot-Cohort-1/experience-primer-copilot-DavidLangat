// Create web server
var express = require('express');
var router = express.Router();
var comments = require('../models/comments.js');

// Get all comments
router.get('/', function(req, res) {
    comments.getAll(function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

// Get comment by id
router.get('/:id', function(req, res) {
    comments.getById(req.params.id, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

// Get comment by id
router.get('/post/:id', function(req, res) {
    comments.getByPostId(req.params.id, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});