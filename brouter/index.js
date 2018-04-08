const http=require('http');
const url=require('url');//nodejs 自带的urls
const route =require('./route');
const querystring = require('querystring');

http.createServer((request,response)=>{

	// response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});

	if(request.url!=='/favicon.ico'){

		pathname=url.parse(request.url).pathname;
		// console.log('aaaaa',url.parse(request.url,true).query)//打印参数
		
		pathname=pathname.replace(/\/home\//,'');// 替换/

		if(pathname){
			route[pathname](request,response);
		}else{
			response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
			response.write('没有对应路由');
			response.end('');
		}
		

		// console.log('aa',request.url)
		// console.log('bb',url.parse(request.url))
		// console.log('cc',pathname)

		// response.end('');

	}
}).listen('8888');

console.log('server run at 8888');