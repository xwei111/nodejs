const express = require('express');
const router = express.Router();
const api = require('./api.js');
const verifyToken = require('./verify-token.js')

router.get('/',(req,res)=>{
	res.render('index', { title: 'Express' });
	res.end('i am 8888,hahahahaha')
})

// 拦截器
// router.get(['/admin', '/admin/*', '/publish', '/publish/*'], ...这样设置后要进入这些页面必须cookies中有token的（即登录状态下）
// router.get(['/users'], function(req, res, next) {
//   // console.log('----tokendddd:', req.cookies.token)
//   if (req.cookies.token) {
//     next()
//   } else {
//     res.redirect('/')
//   }
// })


// 登录模块
router.post('/api/login', api.login);
// 增
router.route('/api/insertArticle').all(verifyToken).post(api.insertArticle);
// 查
router.route('/api/searchArticle').all(verifyToken).get(api.searchArticle);
// 删
router.route('/api/deleteArticle').all(verifyToken).delete(api.deleteArticle);
// 改
router.route('/api/updateArticle').all(verifyToken).put(api.updateArticle);

// 上传图片
router.route('/api/uploadImg').post(api.uploadImg);

module.exports = router;