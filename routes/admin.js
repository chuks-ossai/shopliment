var express = require('express');
var router = express.Router();

/* GET admin login page. */
router.get('/', function(req, res, next) {
  res.render('admin/login', { layout: './layouts/adm-auth', title: 'Login', header: 'Login' });
});

/* GET admin login page. */
router.get('/register', function(req, res, next) {
  res.render('admin/register', { layout: './layouts/adm-auth', title: 'Register', header: 'Register' });
});

module.exports = router;
