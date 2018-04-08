const express = require('express');
const app = express();
const fs = require('fs');

const user = {
   "user4" : {
      "name" : "xwei",
      "password" : "password5",
      "profession" : "student",
      "id": 4
   }
}
// 读取信息
app.get('/',(req,res)=>{
	// console.log('req',req.query.id)
	fs.readFile(__dirname+'/'+'users.json',(err,data)=>{
		if(err){
			console.log('err',err);
			return;
		}
		// console.log(JSON.parse(data))
		res.end(data)
		// data=JSON.parse(data);
		// var user = data["user" + req.query.id] 
		
		// res.end( JSON.stringify(user));

	})
})
// 添加用户
app.get('/addUser',(req,res)=>{
	fs.readFile(__dirname+'/'+'users.json',(err,data)=>{
		if(err){
			console.log('err',err);
			return;
		}

		data=JSON.parse(data);
		
		data['user4']=user['user4']

		data =JSON.stringify(data); 
		
		const des_file = __dirname + "/" + 'users.json';

		fs.writeFile(des_file, data, function (err) {
	        if( err ){
	            console.log( err );
	        }else{
	            response = {
	                message:'File uploaded successfully',
	            };
	        }
	        res.end( JSON.stringify( response ) );
        });


	})
})

// 删除用户
const id = 2;

app.get('/deleteUser', function (req, res) {

   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + req.query.id];
       
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

app.listen(8888)


