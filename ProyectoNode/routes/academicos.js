
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Esto trata sobre las cuestiones acadèmicas');
});

module.exports = router;
