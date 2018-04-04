var http=require('http');
// var User=require('./user');
var Teacher=require('./teacher');

http.createServer((request,response)=>{

	response.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});

	if(request.url!=='/favicon.ico'){

		// user=new User('001','张三','18');
		teacher=new Teacher('002','黎明','30');

		// user.enter();
		teacher.enter();
		teacher.teach(response);

		response.write(teacher.id)

		response.end('');

	}

}).listen('8888')

console.log('http://127.0.0.1:8888/')