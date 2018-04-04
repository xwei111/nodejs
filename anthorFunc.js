

// module.exports = fun2; //只支持一个函数

// 调用多个函数
module.exports={
	fun2:(res)=>{
		// console.log('fun2');
		res.write('hello,i am fun2')
	},
	fun3:(res)=>{
		// console.log('fun3');
		res.write('hello,i am fun3')
	}
}