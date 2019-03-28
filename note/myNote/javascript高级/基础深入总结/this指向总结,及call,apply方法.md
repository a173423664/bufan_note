## this指针总结
```
// 定义一个全局变量
var type = "全局"; 
 
// 定义函数aa
function aa () {
	var type = '局部';
	console.log(this.type);
}
aa(); // "全局"
 
// 定义对象bb
var bb = {
	type: '局部',
	getType: function () {
		console.log(this.type)
	}
};
bb.getType(); // “局部”
 
// 定义对象cc
var cc = {
	type: '局部',
	getType: function () {
		return function () {
			return this.type
		}
	}
};
cc.getType(); // “全局”（非严格模式下）
```
1. 第一个函数的运行在全局环境中.所以this指向window.
2. bb是一个对象,当函数作为一个对象的方法被调用时,this指向调用的对象
3. cc第三个比较复杂,这个和JS的活动对象有关。每个函数在被调用时，其活动对象都会自动取得两个特殊变量：this和arguments。内部函数在搜索这两个变量时，只会搜索其活动对象为止，活动对象为当前所在执行环境的变量对象，当前所在的执行环境是一个立即执行的匿名函数，变量对象里并没有this.type，所以this还是指向window。

## 改变this的几种方法
+ apply()接收两个参数,一作用域,二是参数(可以是数组也可以是arguments对象)
```
function test (test1, test2) {
console.log(test1 + test2);
}
function applyTest1 (test1, test2) {
return test.apply(this, [test1, test2]); // 传入数组
}
 
function applyTest2 (test1, test2) {
return test.apply(this, arguments); // 传入arguments
}
applyTest1 (50, 50); // 100
applyTest2 (50, 50); // 100
```
+ 这个例子里将test函数的this指向了applyTest系列函数，同时参数为applyTest系列函数传入的参数为数组和arguments对象都可以正常执行并返回正确的结果。

+ call()
+ call()的使用和apply()基本是一样的，不同的是参数的传递，call()必须明确的传入每一个参数。
``` 
function test (test1, test2) {
console.log(test1 + test2);
}
function applyTest1 (test1, test2) {
return test.call(this, test1, test2); // 明确传入参数
}
```
+ 当然，传递参数并不是apply()和call()真正的用武之地，其真正强大的地方还是在于通过传入作用域来扩充函数赖以运行的作用域。通过传入的作用域不同，来改变函数的this指向.

## call()方法和apply()方法的区别.
+ 相同点: 都用来改变this的指向 都是调用一个对象的方法,(功能相同)
+ 例如： B.call(A, args1,args2);即A对象调用B对象的方法 F.apply(G, arguments);即G对象应用F对象的方法
+ 不同点: 参数书写方式不同.
    - call()第一个参数是this需要指向的对象.后来是参数列表,可以是任意类型的值.当第一个参数为null/undefined时.默认指向window.
    - apply():第一个参数是this所要指向的对象.第二个参数是一个数组.

## call和bind区别
+ 相同点:都是用来改变this的指向
+ 不同点:call改变this指向后,会立即执行函数,bind改过this后,不执行函数,会返回一个绑定新this的函数.需要手动调用

##用法
+ call的应用
+ 利用call()来判断数据类型
+ 在判断数据类形式使用typeof，一般不是太准确的，我们可以使用Object.prototype.toString.call()方法来判断一个数据的数据类型.

+ 使用apply可以找出数组中的最大值
```  
var arr = [2,4,5,1];
console.log(Math.max.apply(arr,[2,4,5,1]));
```
+ 注意:Math是一个对象, 第一个arr表示让arr借用max这个方法,相当于替换了Math对象.第二个参数是数组.
+ apply(执行的操作)1.执行Math.max[1,2,3,5];2.把内部的this改成arr