const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const a=1;

// 创建 application/x-www-form-urlencoded 编码解析
const urlencodedParser = bodyParser.urlencoded({ extended: false })
 
// app.use(express.static('../public'));
app.use(express.static(path.join(__dirname,'../public')))//等同于app.use(express.static('../public'));

// 设置服务器跨域权限
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "X-Requested-With");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1")
  next();//如果不写next() 之后的app.use()将不会执行
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  if(a===0){
      var err = new Error('Not Found');
      err.status = 404;
      next(err);
  }else{
      next();
  }
  
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get('/index1.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index1.html" );
})
 
app.post('/process_post', urlencodedParser, function (req, res) {
  
   // 输出 JSON 格式
   const response = {
       "first_name":req.body.first_name,
       "last_name":req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
 
const server = app.listen(8888, function () {
 
  const host = server.address().address
  const port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})