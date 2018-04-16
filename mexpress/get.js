var express = require('express');
var app = express();
 
<<<<<<< HEAD
app.use(express.static('../public'));
=======
app.use(express.static('public'));
>>>>>>> bf37c13d8e2f1b6754f3e33b78a54beed31fbaff
 
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})
 
app.get('/process_get', function (req, res) {
 
   // 输出 JSON 格式
   var response = {
       "first_name":req.query.first_name,
       "last_name":req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
 
var server = app.listen(8888, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})