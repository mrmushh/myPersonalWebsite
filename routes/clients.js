var express = require('express');
var router = express.Router();

/* GET language page. */
router.get('/', function(req, res, next) {
  res.render('clients.ejs', { title: 'Matthew - Clients' });
});

module.exports = router;
