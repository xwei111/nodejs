const async =require('async');//async 需要安装

let oneFun=()=>{
	console.log('oneFun')
}

let twoFun=()=>{
	console.log('twoFun')
}

let exec1=()=>{
	async.series({//series函数 串行无关联执行  前一个函数出错，后边函数不再执行  前一个函数执行完毕在执行之后的函数
		one: function(callback){
			callback(null, 1);
		},
		two: function(callback){
			callback(null, 2);
		}
	},function(err, results) {
		console.log(results); //{ one: 1, two: 2 }
	});
}

let exec2=()=>{
	async.parallel({//parallel 并行无关联执行  每个函数都是立即执行，不需要等待其它函数先执行,前边报错后边回调无法回调
		one: function(callback){
			callback(null, 'one');
		},
		two: function(callback){
			callback(null, 'two');
		}
	},function(err, results) {
		console.log(results); //{ one: 1, two: 2 }
	});
}

let exec3=()=>{
	async.waterfall([//waterfall 瀑布流 waterfall和series函数有很多相似之处，都是按照顺序执行。不同之处是waterfall每个函数产生的值，都将传给下一个函数
		function(callback){
			callback(null, 'one','two');
		},
		function(arg1,arg2,callback){
			callback(null, arg1+arg2+'three');
		}
	],function(err, results) {
		console.log(results); //{ three }
	});
}

exec1();
exec2();
exec3();

console.log('进程OK')

