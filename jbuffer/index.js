const buf = Buffer.from('runoob', 'ascii');//返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）

// 输出 72756e6f6f62
console.log(buf.toString('hex'));

// 输出 cnVub29i
console.log(buf.toString('base64'));

const buf1=Buffer.alloc(10);//Buffer.alloc(size[, fill[, encoding]])： 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0
const buf2 = Buffer.alloc(10, 1);

const buf3 = Buffer.allocUnsafe(10);//Buffer.allocUnsafe(size)： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据
// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3, 4, 5]);
// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('tést');
// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');

console.log('buf1',buf1)//<Buffer 00 00 00 00 00 00 00 00 00 00>

console.log('buf2',buf2)//<Buffer 01 01 01 01 01 01 01 01 01 01>

console.log('buf3',buf3)

console.log('buf4',buf4)//<Buffer 01 02 03 04 05>

console.log('buf5',buf5)

console.log('buf6',buf6)



