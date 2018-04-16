const md5 = require('./md5.js')
const mydb = require('./mydb.js')
const jwt = require('jsonwebtoken')

const formidable = require('formidable')
const fs = require('fs');
var sd = require("silly-datetime");
const AVATAR_UPLOAD_FOLDER = '/avatar/'; // 上传路径

// 登录
exports.login = (req,res,next)=>{
	let user = req.body.user, pwd = md5(req.body.pwd);
	let selectobj={'user':user}
	mydb.findOne('users',selectobj)
		.catch((data)=>{
				return res.json({
					"code": 500,
					"message": "内部服务器错误"
				})
		})
		.then((data)=>{
			if (!data || data.length === 0) {
				return res.json({
					"code": 401,
					"message": "找不到用户名"
				})
			}
			// console.log('data',data)
			let dbPassword = data.pwd
			let id = data._id
			let expires = 60 * 60 * 24 * 30;
			if (dbPassword === pwd) {
				let token = jwt.sign({ id, user }, 'secret', { expiresIn: expires })

				return res.json({
					"code": 200,
					"message": "登录成功",
					"data": {
						token: token,
						user: user,
						id: id
					}
				})
			} else {
				return res.json({
					"code": 401,
					"message": "密码错误"
				})
			}

		})
}

// 插入数据
exports.insertArticle = (req,res,next)=>{
	let user = req.body.user;
	let title = req.body.title;
	let content = req.body.content;
	let now = new Date();
	let time = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
	let insertobj = {
		'user':user,
		'title':title,
		'content':content,
		'updateTime':time,
	}

	mydb.insert('myArticles',insertobj)
		.catch((data)=>{
			return res.json({
					"code": 401,
					"message": "插入失败"
			})
		})
		.then((data)=>{
			return res.json({
					"code": 200,
					"message": "新增成功"
			})
		})
}

// 查询
exports.searchArticle = (req,res,next)=>{
	let user = req.query.user;
	let limit= req.query.limit;
	let count= req.query.count;
	let title= req.query.title;
	// console.log('useruseruseruser',user)
	// console.log('tokentokentokentoken',req.query.token)

	let selectobj={
		'queryJson':user&&title?{'user':user,'title':title}:user?{'user':user}:{},
		'limit':limit,
		'count':count
	}
	mydb.find('myArticles',selectobj)
		.catch((data)=>{
				return res.json({
					"code": 404,
					"message": "查询失败"
				})
		})
		.then((data)=>{
			return res.json({
				"code": 200,
				"message": "查询成功",
				"data": data
			})
		})
}

// 删除
exports.deleteArticle=(req,res,next)=>{
	let user=req.query.user;
	let deleteobj={'user':user};
	mydb.delete('myArticles',deleteobj)
		.catch((data)=>{
			return res.json({
					"code": 401,
					"message": "删除失败"
				})
		})
		.then((data)=>{
			
			return res.json({
				"code": 200,
				"message": "删除成功",
			})
		})
}

// 修改
exports.updateArticle=(req,res,next)=>{

	let oldobj={'user':req.body.user}
	let newobj={'title':req.body.title}

	mydb.update('myArticles',oldobj,newobj)
		.catch((data)=>{
			return res.json({
					"code": 401,
					"message": "修改失败"
				})
		})
		.then((data)=>{
			return res.json({
				"code": 200,
				"message": "修改成功",
			})
		})
}


// 上传图片
exports.uploadImg = function (req, res, next) {
	var form = new formidable.IncomingForm();   //创建上传表单
	form.encoding = 'utf-8';		//设置编辑
	form.uploadDir = 'public' + AVATAR_UPLOAD_FOLDER;	 //设置上传目录
	form.keepExtensions = true;	 //保留后缀
	form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小

	form.parse(req, function (err, fields, files) {

		if (err) {
			return res.json({
				"code": 500,
				"message": "内部服务器错误"
			})
		}
		console.log('fields',fields)
		console.log('files',files)

		// 限制文件大小 单位默认字节 这里限制大小为2m
		if (files.fulAvatar.size > form.maxFieldsSize) {
			fs.unlink(files.fulAvatar.path)
			return res.json({
				"code": 401,
				"message": "图片应小于2M"
			})
		}

		var extName = '';  //后缀名
		switch (files.fulAvatar.type) {
			case 'image/pjpeg':
				extName = 'jpg';
				break;
			case 'image/jpeg':
				extName = 'jpg';
				break;
			case 'image/png':
				extName = 'png';
				break;
			case 'image/x-png':
				extName = 'png';
				break;
		}

		if (extName.length == 0) {
			return res.json({
				"code": 404,
				"message": "只支持png和jpg格式图片"
			})
		}

		//使用第三方模块silly-datetime
		var t = sd.format(new Date(), 'YYYYMMDDHHmmss');
		//生成随机数
		var ran = parseInt(Math.random() * 8999 + 10000);

		// 生成新图片名称
		var avatarName = t + '_' + ran + '.' + extName;
		// 新图片路径
		var newPath = form.uploadDir + avatarName;

		// 更改名字和路径
		fs.rename(files.fulAvatar.path, newPath, function (err) {
			if (err) {
				return res.json({
					"code": 401,
					"message": "图片上传失败"
				})
			}
			return res.json({
				"code": 200,
				"message": "上传成功",
				result: AVATAR_UPLOAD_FOLDER + avatarName
			})
		})
	});

}
