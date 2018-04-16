const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/myproject1";

// 查询单个数据
exports.findOne=(col,selectobj)=>{
	const promise= new Promise((resolve,reject)=>{
		MongoClient.connect(url,(err,db)=>{
			if(err) throw err;
			db.collection(col).findOne(selectobj,(err,result)=>{
				if(err) throw err;

				if(err){
					reject(err)
				}else{
					resolve(result)
				}
				db.close();
			})
		})
	})
	return promise;
}

//插入数据
exports.insert=(col,insertobj)=>{
	const promise=new Promise((resolve,reject)=>{
		MongoClient.connect(url,(err,db)=>{
			if(err) throw err;
			db.collection(col).insertOne(insertobj,(err,result)=>{
				if(err) throw err;

				if (err) {
					reject(err);
				}else{
					resolve(result)
				}
				db.close();
			})
		})
	})
	return promise;
}

//查询多条数据
exports.find=(col,selectobj)=>{
	const promise=new Promise((resolve,reject)=>{
		MongoClient.connect(url,(err,db)=>{
			if(err) throw err;
			let queryJson=selectobj.queryJson;
			let limit=Number(selectobj.limit)||0;//显示多少数据
			let count=Number(selectobj.count)||0;//调过多少数据亦或第几页
			let sort=selectobj.sort||{};//排序，例如{id：-1}-1标识倒序，1标识正序
			db.collection(col).find(queryJson,{_id:0}).limit(limit).skip(count*limit).sort(sort).toArray((err,result)=>{
				if(err) throw err;

				if (err) {
					reject(err);
				}else{
					resolve(result)
				}
				db.close();
			})
		})
	})
	return promise;
}

// 删除
exports.delete=(col,deleteobj)=>{
	const promise=new Promise((resolve,reject)=>{
		MongoClient.connect(url,(err,db)=>{
			if(err) throw err;
			db.collection(col).deleteOne(deleteobj,(err,result)=>{
				if(err) throw err;

				if (err) {
					reject(err);
				}else{
					resolve(result)
				}
				db.close();
			})
		})
	})
	return promise;
}

// 修改
exports.update=(col,oldobj,newobj)=>{
	const promise=new Promise((resolve,reject)=>{
		MongoClient.connect(url,(err,db)=>{
			if(err) throw err;
			db.collection(col).updateMany(oldobj,{$set:newobj,$currentDate:{"lastModified": false}},(err,result)=>{
				if(err) throw err;

				if (err) {
					reject(err);
				}else{
					resolve(result)
				}
				db.close();
			})
		})
	})
	return promise;
}
