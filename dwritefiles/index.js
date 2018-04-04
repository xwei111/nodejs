var http = require('http');
var writeFile = require('./wirteFile');

http.createServer((request,response)=>{

	response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});

	if(request.url!=='/favicon.ico'){

		// response.write('hahaha');

		writeFile.writefile('./index1.html','我还只是个html')
			.then((data)=>{
				if(data=='success'){
					response.end('')
				}
			})

		writeFile.writeFileSync('./index2.html','我也只是个html')

	}

}).listen('8888')

console.log('server 8888')