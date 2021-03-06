## Promise
                                       
+ Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。
+  Promise对象是一个构造函数,自身身上有all,reject,resolve这几个方法,原型上有then,catch等同样眼熟的方法.
+  Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了Promise对象。

+  首先promise的构造函数接收的是一个参数,是函数.并且传入两个参数:ressolve,reject分别表示异步操作执行成功后的回调函数和异步操作执行失败后的回调函数.
```
var p = new Promise(function(resolve, reject){
    //做一些异步操作
    setTimeout(function(){
        console.log('执行完成');
        resolve('随便什么数据');
    }, 2000);
});
```
## promise特点
1.  对象的状态不受外界影响,promise对象代表一个异步操作,有三种状态:pending(进行中)fulfilled(失败)rejected(成功)
+ 只有异步操作的结果,可以决定当前是哪一种状态.其他任务操作都无法改变这个状态.这也是promise名字的由来,承诺,表示其他手段无法改变.
2. 一旦状态改变,就不会再变,并且任何时候都可以得到这结果.promise对象的状态改变,只有两种可能:从pending变成fulfilled,只要这两种情况发生,状态就凝固了,不会再改变.这时就称为resolved(已定型)
3. 有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise对象提供统一的接口，使得控制异步操作更加容易。

+ then接收的一个参数,并且是函数.当我们在构造函数函数调用后拿到resolve时传入的参数.实际上then里面传入的函数,就跟我我们平时的回调函数一个意思,能够在构造函数执行完异步操作后,被执行.

+ 这么写的好处,就是能把原来的回调写法分离出来,在异步操作执行完后,用链式调用的方式执行回调函数.
