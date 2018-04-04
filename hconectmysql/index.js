// const http=require('http');
// const OptPool=require('./connectchi');

// http.createServer((request,response)=>{

//   response.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});

//   if(request.url!=='/favicon.ico'){

//     response.write('aa');
//     response.end('');

//   }

// }).listen('8888')

// console.log('http://127.0.0.1:8888/')

const OptPool=require('./connectchi');

const optPool=new OptPool();

const pool=optPool.getPool();

pool.getConnection(function(err,conn){

	const sqlgoods="select * from goods";
	
	conn.query(sqlgoods, function(err, rows, fields) { 
	     if (err) {
	             console.log('[query] - :'+err);
	        return;
	     }
	     console.log('The solution is: ', rows);  
	     conn.release();//放回连接池
	});

})


