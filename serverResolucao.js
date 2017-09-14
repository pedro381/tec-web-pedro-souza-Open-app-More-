var express = require('express');
var app = express();
var fs = require("fs");

app.get('/:id', function (req, res) {
   fs.readFile( "evolucao.json", 'utf8', function (err, data) {
       users = JSON.parse(data);

       var user = users.filter(function(o){
               return (o.Name === req.params.id);
          });
       
   });

})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})