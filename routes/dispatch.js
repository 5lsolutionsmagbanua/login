var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('dispatch', { title: 'Dispatch Page' });
});

module.exports = router;