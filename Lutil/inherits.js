// util.inherits(constructor, superConstructor)是一个实现对象间原型继承 的函数。
var util = require('util');

function Base() { 
    this.name = 'base'; 
    this.base = 1991; 
    this.sayHello = function() { 
    console.log('Hello ' + this.name); 
    }; 
} 

Base.prototype.showName = function() { 
    console.log(this.name);
}; 

function Sub() { 
    this.name = 'sub'; 
} 

util.inherits(Sub, Base); //Sub 仅仅继承了Base 在原型中定义的函数
var objBase = new Base(); 
objBase.showName(); 
objBase.sayHello(); 
console.log(objBase); 
var objSub = new Sub(); 
objSub.showName(); 
//objSub.sayHello(); 
console.log(objSub); 