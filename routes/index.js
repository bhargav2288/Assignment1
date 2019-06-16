/*
File Name: index.js
Author's Name: Bhargav Prajapati
Website: http://portfolio.bhargavprajapati.com:3000/
File Description: includes root to different files
*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'AboutMe' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Services' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
