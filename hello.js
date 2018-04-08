var http=require('http');
var anthorFunc=require('./anthorFunc');

http.createServer((request,response)=>{

	response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});// 内容类型: text/html;charset=utf-8
	// response.writeHead(200, {'Content-Type': 'text/plain'});

	
	if(request.url!=='/favicon.ico'){//node会默认的访问两次，加上判断消除访问两次
		fun1(response);
		// 两种写法 后面遇到路由必须写成 anthorFunc['fun2'] 这种形式
		funname='fun2';//变量形式复制 写fun2调用fun2 写fun3写fun3
		anthorFunc[funname](response);//此种写法很重要
		anthorFunc.fun3(response);

		response.end('');
	}

	
}).listen(8888)

console.log('Server running at http://127.0.0.1:8888/');

let fun1=(res)=>{
	console.log('fun1')
	res.write('hello,i am fun1')
}