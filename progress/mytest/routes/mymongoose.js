const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const url = 'mongodb://localhost:27017/myproject1';

mongoose.connect(url,(err)=>{
	if(err){
		console.log(err)
	}else{
		console.log('connect success!');
		const mySchema = new Schema({
			id: {
			    type: Number,
			    required: true
			},
			age:{
				type:Number,
				default:18,
				required:true,
			},
			name:{
				type:String,
				required:true,
				match:/x/,
			},
			x:Number,
			y:Number,
		},{
			timestamps: true//在schema中设置timestamps为true，schema映射的文档document会自动添加createdAt和updatedAt这两个字段，代表创建时间和更新时间
		})

		mySchema.add({sex:'string'});//添加其他字段add()

		const My = mongoose.model('My', mySchema);
		// save新增
		// const doc1 = new My({id:2,age:23,name:'xwww',sex:'0',x:2,y:2})
		// doc1.save((err,doc)=>{
		// 	if(err){
		// 		console.log('err',err)
		// 	}else{
		// 		console.log('doc',doc)
		// 	}
		// })
		// crete新增
		// My.create({title:'test2'},{title:'test3'},(err,doc1,doc2)=>{
		// 	console.log('doc1',doc1)
		// 	console.log('doc2',doc2)
		// })
		// insertMany新增
		// const data=[
		// 			{
		// 				id:11,
		// 				age:2,
		// 				name:'x4www',
		// 				sex:'0',
		// 				x:1,
		// 				y:2
		// 			},
		// 			{
		// 				id:12,
		// 				age:106,
		// 				name:'xw23ww12',
		// 				sex:'0',
		// 				x:1,
		// 				y:9
		// 			}
		// 		]
		// My.insertMany(data,function(err,docs){
  // 			console.log(docs); 
  // 		});
        // find查询
        // My.find({title:'666555',author:/x/},{author:1,_id:0,title:1},(err,docs)=>{//查找title为test4并且author里存在x的,且只输出author,注意_id会默认输出，_id:0排除掉_id
        // 	console.log(docs)
        // })
        // findById查询
        // const iDarry = [];
        // My.find((err,docs)=>{
        // 	docs.forEach((item,index,arr)=>{
        // 		iDarry.push(item._id)
        // 	})

        // 	My.findById(iDarry[1],{author:1,_id:0}).exec((err,doc)=>{
        // 		console.log(doc)
        // 	})
        // })
        // findOne查询
        // My.findOne({title:'test'},(err,doc)=>{
        // 	console.log(doc)
        // })
        // $where使用
        // My.find({$where:'this.title==this.author'},(err,doc)=>{
        // 	console.log(doc)
        // })
        // update()更新
        // My.update({title:/test/},{title:'666'},{multi:true},(err,doc)=>{//将含有test的title全部更新为666 multi若为true表示全部更新
        // 	console.log(doc)
        // 	My.find((err,docs)=>{
        // 		console.log(docs)
        // 	})
        // })
		// My.update({author:/aa/},{title: 0},{upsert:true},function(err,raw){//upsert为true表示若不存在则添加
		//     console.log(raw);
		//     My.find((err,docs)=>{
		//     	console.log(docs)
		//     })
		// })
		// updateMany()与update()方法唯一的区别就是默认更新多个文档，即使设置{multi:false}也无法只更新第一个文档
		// updateOne()方法只能更新找到的第一条数据，即使设置{multi:true}也无法同时更新多个文档
		// find + save 方法更新  或者findOne()+save() 
		// My.find({title:/6/},(err,docs)=>{
		// 	docs.forEach((item,index,arr)=>{
		// 		item.title+='555';
		// 		item.save();
		// 	})
		// })
		// remove删除 如果只删除符合条件的第一条数据，则可以使用model的findOneAndRemove()方法
		// My.remove({title:undefined},(err,doc)=>{//remove()方法中的回调函数不能省略，否则数据不会被删除。当然，可以使用exec()方法来简写代码
		// 	console.log(doc)
		// })
		// My.remove({}).exec();//exec简写
		// findOneAndRemove只删除一条数据
		// My.findOneAndRemove({author:'222'}).exec((err,doc)=>{
		// 	console.log('doc',doc)
		// })
		// sort()排序
		// My.find().sort('age').exec((err,docs)=>{//title表示从大到小 -title表示从小到大
		// 	console.log(docs)
		// })
		// skip()跳过
		// My.find().skip(5).exec((err,docs)=>{
		// 	console.log(docs)
		// })
		// limit 限制显示数量
		// My.find().limit(2).exec((err,doc)=>{
		// 	console.log(doc)
		// })
		// select 显示和不显示的字段
		// My.find().select('author title -_id').exec((err,doc)=>{//select({name:1, age:1, _id:0})
		// 	console.log(doc)
		// })
		// count()显示文档数量
		// My.find().count((err,count)=>{
		// 	console.log(count)
		// })
		// distinct()以数组形式返回集合中某个字段 返回同时会去除重复的数据
		// My.find().distinct('title',(err,distinct)=>{
		// 	console.log(distinct)
		// })
		

		My.find().skip(5).limit(10).sort('id').select({_id:0}).exec((err,doc)=>{
			console.log('doc',doc)
		})
		
	}
});

// setTimeout(function(){
//     mongoose.disconnect(function(){
//         console.log("断开连接");
//     })
// }, 2000);




// $or　　　　或关系
// $nor　　　 或关系取反
// $gt　　　　大于
// $gte　　　 大于等于
// $lt　　　　小于
// $lte　　　 小于等于
// $ne　　　　不等于
// $in　　　　在多个值范围内
// $nin　　　 不在多个值范围内
// $all　　　 匹配数组中多个值
// $regex　　 正则，用于模糊查询
// $size　　　匹配数组大小
// $maxDistance　范围查询，距离（基于LBS）
// $mod　　　　取模运算
// $near　　　 邻域查询，查询附近的位置（基于LBS）
// $exists　　 字段是否存在
// $elemMatch　匹配内数组内的元素
// $within　　　范围查询（基于LBS）
// $box　　　　 范围查询，矩形范围（基于LBS）
// $center　　　范围醒询，圆形范围（基于LBS）
// $centerSphere　范围查询，球形范围（基于LBS）
// $slice　　　　查询字段集合中的元素（比如从第几个之后，第N到第M个元素


//update options可选项
// safe (boolean)： 默认为true。安全模式。
// upsert (boolean)： 默认为false。如果不存在则创建新记录。
// multi (boolean)： 默认为false。是否更新多个查询记录。
// runValidators： 如果值为true，执行Validation验证。
// setDefaultsOnInsert： 如果upsert选项为true，在新建时插入文档定义的默认值。
// strict (boolean)： 以strict模式进行更新。
// overwrite (boolean)： 默认为false。禁用update-only模式，允许覆盖记录。


// 数据验证
// required: 数据必须填写
// default: 默认值
// validate: 自定义匹配
// min: 最小值(只适用于数字)
// max: 最大值(只适用于数字)
// match: 正则匹配(只适用于字符串)
// enum:  枚举匹配(只适用于字符串)