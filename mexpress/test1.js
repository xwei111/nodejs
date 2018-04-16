const express = require('express');
const app = express();
const home = express();
const child = express();

// admin.on('mount', function(parent) {
//     console.log('Admin Mounted');
//     // console.log(parent); // refers to the parent app
// });

home.on('mount', function(parent) {//当子程序被挂载到父程序时，mount事件被发射。父程序对象作为参数，传递给回调方法。
    console.log('Admin Mounted');
    // console.log(parent); // refers to the parent app
});

home.get('/',(req,res)=>{
	// console.log(home.mountpath);
	res.send('Home Homepage')
})

child.get('/',(req,res)=>{
	// console.log(child.mountpath);
	res.send('Child Homepage')
})

child.get(['/one','/two'],(req,res)=>{//一个子程序被挂载在多条路径模式
	// console.log(child.mountpath);
	res.send('Child Homepage One')
})

app.use('/',home);
app.use(['/child','/people'],child);//一个子程序被挂载在多条路径模式

app.all('*',(req,res)=>{//all 执行完整匹配，use 只匹配前缀
	res.send('404-未找到页面')
})

// console.log('app',app.path())
// console.log('home',home.path())
// console.log('child',child.path())

app.listen(8888);
