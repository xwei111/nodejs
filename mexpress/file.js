const express = require('express');
const app = express();
const fs = require("fs");
 
const bodyParser = require('body-parser');
const multer  = require('multer');
 
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image'));
 
app.get('/index3.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index3.html" );
})
 
app.post('/file_upload', function (req, res) {
 
   console.log(req.files[0]);  // 上传的文件信息
 
   const des_file = __dirname + "/" + req.files[0].originalname;
   // fs.readFile( req.files[0].path, function (err, data) {
   //      fs.writeFile(des_file, data, function (err) {
   //       if( err ){
   //            console.log( err );
   //       }else{
   //             response = {
   //                 message:'File uploaded successfully', 
   //                 filename:req.files[0].originalname
   //            };
   //        }
   //        console.log( response );
   //        res.end( JSON.stringify( response ) );
   //     });
   // });
   
   const response = {
                   message:'File uploaded successfully', 
                   filename:req.files[0].originalname
              };

   const readerStream = fs.createReadStream(req.files[0].path);

   const writerStream = fs.createWriteStream(des_file);

   readerStream.pipe(writerStream);

   

   writerStream.on('finish', function() {
      console.log("写入完成。");
      res.end( JSON.stringify( response ) );
  });

})
 
const server = app.listen(8081, function () {
 
  const host = server.address().address
  const port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})