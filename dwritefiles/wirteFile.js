const fs = require('fs');

module.exports={

	writefile:(path,data)=>{//异步

		const promise = new Promise((resolve,reject)=>{

			fs.writeFile(path,data,(error)=>{

				if(error){
					console.log('error');
					reject('err')
				}else{
					console.log('我被写入了')
					resolve('success')
				}

			})

		})

		return promise;

	},

	writeFileSync:((path,data)=>{//同步

		fs.writeFileSync(path,data)

	})

}