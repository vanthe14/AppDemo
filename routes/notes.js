

exports.index_slider = function(req, res, next) {
var test_data = require('../models/user');
//  var rooms = test_data.teamlist;
//  var teamlist = test_data.teamlist;
  //    console.log('kakakak'+rooms);
  var input1='xinchaoban';
  var input2='toi la nodejs';

      test_data.getData(input1,input2,function(mydata) {
        res.render("index-slider",{data:mydata})
    });

}

exports.index_gallery = function(req, res, next) {
      res.render("index-gallery")
}
