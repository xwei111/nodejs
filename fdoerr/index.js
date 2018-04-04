var http=require('http');
var url=require('url');//nodejs 自带的urls
var route =require('../brouter/route');
var throwExample=require('./throw');

http.createServer((request,response)=>{

	// response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});

	if(request.url!=='/favicon.ico'){

		pathname=url.parse(request.url).pathname;
		pathname=pathname.replace(/\//,'');// 替换/

		try{//同步异常处理
			data=throwExample.expfun(10);//当参数为0时，走catch
			route[pathname](request,response);
		}catch(err){
			console.log(err.toString())
			response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
			response.write(err.toString());
			response.end('');
		}
		

		// console.log('aa',request.url)
		// console.log('bb',url.parse(request.url))
		// console.log('cc',pathname)

		// response.end('');

	}
}).listen('8888');

console.log('server run at 8888');