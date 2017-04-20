var express = require('express');

var router = express.Router();

module.exports.blog_single = function(req, res, next) {
      res.render("blog-single");
}
module.exports.blog_style1 = function(req, res, next) {
      res.render("blog-style1");
}
module.exports.blog_style2 = function(req, res, next) {
      res.render("blog-style2");
}
module.exports.blog_style3 = function(req, res, next) {
      res.render("blog-style3");
}
module.exports.blog_style4 = function(req, res, next) {
      res.render("blog-style4");
}

// router.get('/blog-style1', function(req, res) {
//     res.render("blog-style1");
// });
//
// router.get('/blog-style2', function(req, res) {
//     res.render("blog-style2");
// });
//
// router.get('/blog-style3', function(req, res) {
//     res.render("blog-style3");
// });
//
// router.get('/blog-style4', function(req, res) {
//     res.render("blog-style4");
// });
//
// module.exports = router;
