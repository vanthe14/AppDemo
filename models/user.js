var db = require('./db');

  // db.query('SELECT * from actor LIMIT 20', function(err, rows, fields) {
  // //connection.end();
  //   if (!err){
  // //  return JSON.stringify(rows);
  //   //  console.log('The solution is: ', rows);
  //   //  exports.teamlist=rows
  // //    exports.teamlist = JSON.stringify(rows);
  //   exports.teamlist= rows;
  // //  res.end();
  //   //return res.send(JSON.stringify(rows));
  //   }
  //   else{
  //   //  res.end();
  //     return console.log('Error while performing Query.');
  //   }
  //
  // });

//  var data;
  var mymodel = {};

  mymodel.getData = function(input1,input2,callback) {

      // if(data) {
      //   console.log("da ton tai du lieu");
      //     callback(data);
      // } else {
          db.query('SELECT * from actor LIMIT 20', function(err, rows, fields) {
              // error checking and such
            console.log(input1 + input2);
            //  data = rows;
              callback(rows);
          });
      // }
  }
  module.exports = mymodel
