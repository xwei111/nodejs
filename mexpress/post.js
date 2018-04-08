const express = require('express');
const app = express();
const bodyParser = require('body-parser');
 
// 创建 application/x-www-form-urlencoded 编码解析
const urlencodedParser = bodyParser.urlencoded({ extended: false })
 
app.use(express.static('public'));
 
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