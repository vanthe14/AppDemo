var express    = require("express");
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '12345',
  database : 'sakila'
});
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");
} else {
    console.log("Error connecting database ... nn");
}
});

app.get("/",function(req,res){
connection.query('SELECT * from actor LIMIT 2', function(err, rows, fields) {
connection.end();
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
  });
});

app.listen(3000);

<ul>
    <% data.forEach(function(drink) { %>
        <li><%= drink.actor_id %> - <%= drink.first_name %></li>
    <% }); %>
</ul>

<table id="table" >
   <thead>
       <tr>
           <th>Username</th>
           <th>Password</th>
       </tr>
   </thead>
    <tbody>
    <% data.forEach(function (user) { %>
       <tr>
           <td><%= user.actor_id %></td>
           <td><%= user.first_name %></td>
       </tr>
    <% }); %>
    </tbody>
</table>
