// node-mysql 连接池 需要安装 cnpm install -g node-mysql

// const mysql = require('mysql');

// function OptPool(){//链接池连接
// 	this.flag=true;//是否连接过
// 	this.pool = mysql.createPool({
// 		host:'localhost',
// 		user:'root',
// 		password:'211315',
// 		database:'bbs',//数据库名称
// 		port:'3306'
// 	})

// 	this.getPool=function(){
// 		if(this.flag){
// 			this.pool.on('connection',function(connection){
// 				connection.query('select * from user');
// 				this.flag=false;
// 			})
// 		}

// 		return this.pool;
// 	}
// }

const mysql = require('mysql');

class OptPool{

	constructor(){
		this.flag=true;
		this.pool = mysql.createPool({
			host:'localhost',
			user:'root',
			password:'211315',
			database:'bbs',//数据库名称
			port:'3306'
		})
	}

	getPool(){
		// if(this.flag){
		// 	this.pool.on('connection',function(connection){
		// 		connection.query('select * from user');
		// 		this.flag=false;
		// 	})
		// }

		return this.pool;
	}

}

module.exports=OptPool;