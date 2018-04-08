var http=require('http');
var file=require('./file');



http.createServer((request,response)=>{

	response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});

	if(request.url!=='/favicon.ico'){

		file.readfileSync('./index.html',response);//同步

		file.readfile('./index.html',response)//异步
			.catch((error)=>{
				console.log('error')
			})
			.then((data)=>{
				console.log('data',data)
				if(data){
					response.end('');
				}
			})



	}

}).listen('8888');

console.log('server run at 8888');