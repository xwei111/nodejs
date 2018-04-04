// buf.write(string[, offset[, length]][, encoding])
// string - 写入缓冲区的字符串。

// offset - 缓冲区开始写入的索引值，默认为 0 。

// length - 写入的字节数，默认为 buffer.length

// encoding - 使用的编码。默认为 'utf8' 。



// 写入缓冲区
buf = Buffer.alloc(256);
len = buf.write("www.runoob.com1234567890");

console.log("写入字节数 : "+  len);


// buf.toString([encoding[, start[, end]]])
// encoding - 使用的编码。默认为 'utf8' 。

// start - 指定开始读取的索引位置，默认为 0。

// end - 结束位置，默认为缓冲区的末尾。

// 从缓冲区读取数据
buff = Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
  buff[i] = i + 97;
}

console.log( buff.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buff.toString('ascii',0,6));   // 输出: abcde
console.log( buff.toString('utf8',0,5));    // 输出: abcde
console.log( buff.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde


const bufff = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(bufff);

// 输出: {"type":"Buffer","data":[1,2,3,4,5]}
console.log(json);