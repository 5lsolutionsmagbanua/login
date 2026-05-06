var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('dashboard', { title: 'Express' });
});


router.get('/get-data/:name/:position', (req, res) => {
    try {
        const {name, position} = req.params;
        console.log('Request: ', name, position);

        res.status(200).json({ message: "Success", data: [{ name: name, position: position }] });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error })
    }
});

module.exports = router;

