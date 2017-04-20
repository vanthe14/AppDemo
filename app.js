var express    = require("express");

var path = require('path');
var http = require('http');
// var fs = require('fs');

var home    = require('./routes/home');
var features    = require('./routes/features');
var notes = require('./routes/notes');
var pages = require('./routes/pages');
var blogs = require('./routes/blogs');

var app = express();

//All controller
app.use('/home',  home);
app.use('/features',  features);
app.get('/index_slider', notes.index_slider);
app.get('/index_gallery', notes.index_gallery);
app.get('/page_full_width', pages.page_full_width);
app.get('/blog_single', blogs.blog_single);
app.get('/blog_style1', blogs.blog_style1);
app.get('/blog_style2', blogs.blog_style2);
app.get('/blog_style3', blogs.blog_style3);
app.get('/blog_style4', blogs.blog_style4);
//app.use('/blog',  blogs);


// some environment variables
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get("/",function(req,res){
  res.render("home");
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
