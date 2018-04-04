// express_cookie.js 文件
var express      = require('express')
var cookieParser = require('cookie-parser')
var util = require('util');
 
var app = express()
app.use(cookieParser())
 
app.get('/', function(req, res) {
	console.log(req.cookies);
    console.log("Cookies: " + util.inspect(req.cookies));
    res.end('')
})
 
app.listen(8888)