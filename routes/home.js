var express = require('express');

var router = express.Router();

router.get('/', function(req, res) {
    res.render("index-gallery");
});

router.post('/', function(req, res) {
    res.render("index-gallery");
});

// router.get('/fullpape', function(req, res) {
//     res.render("home");
// });
//
// router.post('/fullbape', function(req, res) {
//     res.render("home");
// });
//
// router.get('/index_gallery', function(req, res) {
//     res.render("index_gallery");
// });
//
// router.post('/index_gallery', function(req, res) {
//     res.render("index_gallery");
// });
//
// router.get('/index_slider', function(req, res) {
//     res.render("index_slider");
// });
//
// router.post('/index_slider', function(req, res) {
//     res.render("index_slider");
// });
module.exports = router;
