/*
File Name: users.js
Author's Name: Bhargav Prajapati
Website: http://portfolio.bhargavprajapati.com:3000/
*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
