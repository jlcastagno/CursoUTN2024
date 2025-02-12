var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Se realizan muchas actividades extracurriculares');
});

module.exports = router;