// var express = require('express');
// var app = express();

// app.param(function(param, option) {
//   return function (req, res, next, val) {
//     if (val == option) {
//       next();   //
//     }
//     else {
//      res.send(404);
//     }
//   }
// });

// app.param('id', 1337);

// app.get('/user/:id', function (req, res) {
//   res.send('参数通过检验');
// });

// app.listen(8888);

var express = require('express');
var app = express();

app.param(['age','name'], function (req, res, next, age) {//监听参数age，并做校验 主要功能是对参数的校验
	console.log(req.params)
	if(req.params.age==1337){
	  next();
	}else{
	  res.sendStatus(404);
	}
});

app.get('/user/:age/:name', function (req, res) {
  res.send('参数通过检验');
});

app.listen(8888);