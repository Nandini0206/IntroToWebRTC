var express = require('express');
var app = express();
console.log('server started');

app.get('/', function(req, res){
  res.render('index.ejs');
});

app.listen(3000);
