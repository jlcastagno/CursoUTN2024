var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hay muchos contactos con docentes y profesores');
});

module.exports = router;