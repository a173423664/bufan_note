## this指针的总结
>其实已经说过很多次this指向的问题了,这里我们做一个全面的总结
+ this在五种不同情况下,有不同的指向
1. 全局范围内
    + 在全局范围内,使用this,它将指向全局对象(浏览器中为window)
```
var name = 'name1';
console.log(name);

this.name = 'name2';
console.log(name);
console.log(this.name);

window.name = 'name3';
console.log(name);
console.log(this.name);
console.log(window.name);
```
2. 函数调用
    + 直接调用一个函数,,this默认会指向全局(浏览器为window)也就是说相当于window调用了这个函数
```
var name = 'name1';
function sayName(){
    console.log(name);
    console.log(this);
}

sayName();
window.sayName();
```

+ 像一些类似匿名函数,默认都是被全局对象调用.要正确被obj调用,就要指代好调用者.
+ 可以用that保持this再进行下一步,或者匿名函数传值,或者使用call/apply/bind改变context(上下文对象)

3. 作为对象的方法调用时,这时this会指向这个对象

4. call/apply/bind 的调用
```
var name = 'name1';

var obj = {
    name: 'name2',
    sayName: function(){
        // 返回一个默认全局的函数,所以这里this指向window
        return function(){
            console.log(this.name);
        };
    },
    changeName: function(){
        // 返回一个默认全局的函数
        setTimeout(function(){
            this.name = 'name3';
        // 然后将该函数绑定给this(当前obj对象)
        }.bind(this),0);
    }
};

// obj.sayName()这个函数，让obj来调用
obj.sayName().call(obj);
//  让this(也就是全局对象）来调用
obj.sayName().apply(this);

obj.changeName();
setTimeout(function(){
    // 输出更改之后，全局name的值
    console.log(name);
    // 输出更改之后，obj对象中 name的值
    console.log(obj.name);
},0);
```
5. 作为构造函数调用
```
var name = 'name1';
function Foo(){
    // 赋值this(当前对象)的name属性值
    this.name = 'name2';
}

// new 构造函数产生一个实例
var foo = new Foo();

console.log(name);
console.log(foo.name);

// 直接调用该函数
Foo();
console.log(name);
```
+ 可以看到，如果函数倾向于和 new 关键词一块使用，则我们称这个函数为构造函数，当new 了之后，this则指向这个心创建的对象（这个new 的过程其实也涉及到了继承机制）。
+ 若直接调用这个函数，this就默认执行全局对象了。
