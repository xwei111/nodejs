// const MongoClient = require('mongodb').MongoClient;
// const url = "mongodb://localhost:27017/runoob";
 
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     console.log("数据库已创建!");

//     const dbase = db.db('runoob');
//     dbase.createCollection('site', function (err, res) {
//         if (err) throw err;
//         console.log("创建集合!");
//         db.close();
//     });
// });


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
 
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("runoob");
//     var myobj = { name: "1", sex:'男', age:'18', id:"1" };
//     dbo.collection("site").insertOne(myobj, function(err, res) {//插入一条
//         if (err) throw err;
//         console.log("文档插入成功");
//         db.close();
//     });
// });



var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    var myobj =  [
        { name: '菜鸟工具', url: 'https://c.runoob.com', type: 'cn'},
        { name: 'Google', url: 'https://www.google.com', type: 'en'},
        { name: 'Facebook', url: 'https://www.google.com', type: 'en'}
       ];
    dbo.collection("site").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("插入的文档数量为: " + res.insertedCount);
        db.close();
    });
});
