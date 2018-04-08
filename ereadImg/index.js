var http = require('http');
var readImg = require('./readImg');

http.createServer((request,response)=>{

	// response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	response.writeHead(200,{'Content-Type':'image/jpeg'})//格式应为图片，否则乱码

	if(request.url!=='/favicon.ico'){

		readImg.readimg('./yihan.jpg',response)
			.then((data)=>{
				if(data=='success'){
					response.end('');
				}
			})

	}

}).listen('8888')

console.log('server 8888')