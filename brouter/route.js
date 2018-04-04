const file=require('../creadfiles/file');
const url=require('url');
const querystring = require('querystring');
const mysql=require('mysql');

module.exports={
	login:(req,res)=>{

		res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});

		file.readfileSync('../test.json',res);//同步
		res.end('');
	},
	regisn:(req,res)=>{

		// // get接受参数 同步
		// const rdata=url.parse(req.url,true).query;
		
		// if(rdata['email']!=undefined){
		// 	console.log('rdata[email]',rdata['email'])
		// }
		// // get接受参数
		
		
		// // post接受参数 异步
		// let post = '';
		// req.on('data',(chunk)=>{
		// 	post+=chunk;
		// })

		// req.on('end',()=>{
		// 	post = querystring.parse(post);
		// 	console.log('post',post)
		// })
		// // post接受参数

		res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});

		file.readfile('../creadfiles/regisn.html',res)//异步
			.catch((error)=>{//异步异常处理
				res.write(error.toString())
			})
			.then((data)=>{
				if(data){
					res.end('');
				}
			})
	},
	readimg:(path,res)=>{

		res.writeHead(200,{'Content-Type':'image/jpeg'});
		file.readimg('../ereadImg/yihan.jpg',res)
			.catch((error)=>{
				res.write(error.toString())
			})
			.then((data)=>{
				if(data){
					res.end('');
				}
			})

	},
	mysqlContent:(req,res)=>{
		res.writeHeader(200,{
	        'content-type':'application/json',
	        'Access-Control-Allow-Origin' : '*',
	        'Access-Control-Request-Method':'POST,GET,OPTIONS,PUT,DELETE',
	        'Access-Control-Request-Headers':'content-type'
        });
		const promise =new Promise((resolve,reject)=>{
			const connection = mysql.createConnection({
				host:'localhost',
				user:'root',
				password:'211315',
				database:'bbs',//数据库名称
				port:'3306'
			})
			// 创建一个connection
			connection.connect((err)=>{
				if(err){
					console.log('error');
					return;
				}
				console.log('success')
			})

			//执行SQL语句
			const sqlgoods="select * from user";
			connection.query(sqlgoods, function(err, rows, fields) { 
			     if (err) {
			             console.log('[query] - :'+err);
			        return;
			     }
			     console.log('The solution is: ', rows);  

			     res.write(JSON.stringify(rows))
			});
			// 关闭connection
			connection.end((err)=>{
				if(err){
					console.log('error');
					return;
				}
				console.log('success');
				resolve('success');
				res.end('');
			})
		})

		// promise
		// 	.then((data)=>{
		// 		if(data){
		// 			res.end('');
		// 		}
		// 	})

		return promise;

	}

}