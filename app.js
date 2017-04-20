var express    = require("express");

var path = require('path');
var http = require('http');
// var fs = require('fs');

var home    = require('./routes/home');
var features    = require('./routes/features');
var notes = require('./routes/notes');
var pages = require('./routes/pages');

var app = express();

//All controller
app.use('/home',  home);
app.use('/features',  features);
app.get('/index_slider', notes.index_slider);
app.get('/index_gallery', notes.index_gallery);
app.get('/page_full_width', pages.page_full_width);



// some environment variables

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get("/",function(req,res){
  //res.render("home");
  res.send("Hello The");
});

//app.listen(process.env.PORT || 3000);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
