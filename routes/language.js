var express = require('express');
var router = express.Router();

/* GET language page. */
router.get('/', function(req, res, next) {
  res.render('language.ejs', { title: 'Matthew - Language' });
});

module.exports = router;
