const fs = require('fs');

module.exports={

	readimg:(path,res)=>{

		const promise =new Promise((resolve,reject)=>{

			fs.readFile(path,'binary',(err,fileData)=>{//binary标识读取二进制

				if(err){
					console.log(err);
					reject('err')
				}else{
					res.write(fileData,'binary');
					resolve('success')
				}

			})

		})

		return promise;

	}

}