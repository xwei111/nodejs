const fs=require('fs');

var readerStream = fs.createReadStream('input.txt');

var writerStream = fs.createWriteStream('opt.txt');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);


console.log('执行完毕')
