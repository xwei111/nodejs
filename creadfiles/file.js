var fs=require('fs');//操作文件类

module.exports={

	readfileSync:(path,res)=>{ //同步读取数据

		var data=fs.readFileSync(path,'utf-8');
		
		res.write(data);

	},

	readfile:(path,res)=>{ //异步读取数据
		
		const promise =new Promise((resolve,reject)=>{
			fs.readFile(path,(err,data)=>{
				if(err){
					reject(err)
				}else{
					res.write(data);
					resolve(data);
				}
			})
		})

		return promise;
	},

	readimg:(path,res)=>{//读取图片

		const promise =new Promise((resolve,reject)=>{

			fs.readFile(path,'binary',(err,fileData)=>{//binary标识读取二进制

				if(err){
					reject(err)
				}else{
					res.write(fileData,'binary');
					resolve('success')
				}

			})

		})

		return promise;

	}

}
